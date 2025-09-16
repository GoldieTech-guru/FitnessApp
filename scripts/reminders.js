// Reminders functionality for FitnessPal

// Initialize reminders
function initReminders() {
    // Load user reminders
    const userEmail = localStorage.getItem('userEmail') || 'default';
    const reminders = JSON.parse(localStorage.getItem(`reminders-${userEmail}`)) || [
        { id: 1, type: 'workout', time: '09:00', enabled: true },
        { id: 2, type: 'water', time: '12:00', enabled: true },
        { id: 3, type: 'meal', time: '13:00', enabled: true },
        { id: 4, type: 'water', time: '15:00', enabled: true },
        { id: 5, type: 'water', time: '18:00', enabled: true }
    ];
    
    // Display reminders
    displayReminders(reminders);
    
    // Add event listeners
    document.getElementById('add-reminder-btn').addEventListener('click', showAddReminderForm);
    document.getElementById('save-reminder').addEventListener('click', saveReminder);
}

// Display reminders
function displayReminders(reminders) {
    const remindersContainer = document.getElementById('reminders-list');
    remindersContainer.innerHTML = '';
    
    reminders.forEach(reminder => {
        const reminderItem = document.createElement('div');
        reminderItem.className = 'reminder-item';
        reminderItem.innerHTML = `
            <div class="reminder-icon">
                <i class="fas ${getReminderIcon(reminder.type)}"></i>
            </div>
            <div class="reminder-details">
                <h4>${getReminderText(reminder.type)}</h4>
                <p>${formatTime(reminder.time)}</p>
            </div>
            <label class="switch">
                <input type="checkbox" ${reminder.enabled ? 'checked' : ''} data-id="${reminder.id}">
                <span class="slider"></span>
            </label>
            <button class="btn-icon delete-reminder" data-id="${reminder.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        remindersContainer.appendChild(reminderItem);
    });
    
    // Add event listeners to toggle switches
    document.querySelectorAll('.switch input').forEach(switchEl => {
        switchEl.addEventListener('change', function() {
            const id = parseInt(this.getAttribute('data-id'));
            toggleReminder(id, this.checked);
        });
    });
    
    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-reminder').forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            deleteReminder(id);
        });
    });
}

// Get reminder icon based on type
function getReminderIcon(type) {
    switch(type) {
        case 'workout': return 'fa-dumbbell';
        case 'water': return 'fa-glass-whiskey';
        case 'meal': return 'fa-utensils';
        default: return 'fa-bell';
    }
}

// Get reminder text based on type
function getReminderText(type) {
    switch(type) {
        case 'workout': return 'Workout Reminder';
        case 'water': return 'Water Reminder';
        case 'meal': return 'Meal Reminder';
        default: return 'General Reminder';
    }
}

// Format time for display
function formatTime(time) {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${period}`;
}

// Show add reminder form
function showAddReminderForm() {
    document.getElementById('add-reminder-form').style.display = 'block';
}

// Save new reminder
function saveReminder() {
    const type = document.getElementById('reminder-type').value;
    const time = document.getElementById('reminder-time').value;
    
    if (type && time) {
        const userEmail = localStorage.getItem('userEmail') || 'default';
        const reminders = JSON.parse(localStorage.getItem(`reminders-${userEmail}`)) || [];
        
        // Create new reminder
        const newReminder = {
            id: Date.now(),
            type: type,
            time: time,
            enabled: true
        };
        
        reminders.push(newReminder);
        localStorage.setItem(`reminders-${userEmail}`, JSON.stringify(reminders));
        
        // Update display
        displayReminders(reminders);
        
        // Reset form
        document.getElementById('add-reminder-form').style.display = 'none';
        document.getElementById('reminder-type').value = 'water';
        document.getElementById('reminder-time').value = '12:00';
    }
}

// Toggle reminder
function toggleReminder(id, enabled) {
    const userEmail = localStorage.getItem('userEmail') || 'default';
    const reminders = JSON.parse(localStorage.getItem(`reminders-${userEmail}`)) || [];
    
    const reminder = reminders.find(r => r.id === id);
    if (reminder) {
        reminder.enabled = enabled;
        localStorage.setItem(`reminders-${userEmail}`, JSON.stringify(reminders));
    }
}

// Delete reminder
function deleteReminder(id) {
    const userEmail = localStorage.getItem('userEmail') || 'default';
    let reminders = JSON.parse(localStorage.getItem(`reminders-${userEmail}`)) || [];
    
    reminders = reminders.filter(r => r.id !== id);
    localStorage.setItem(`reminders-${userEmail}`, JSON.stringify(reminders));
    
    // Update display
    displayReminders(reminders);
}

// Check and show reminders
function checkReminders() {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    const userEmail = localStorage.getItem('userEmail') || 'default';
    const reminders = JSON.parse(localStorage.getItem(`reminders-${userEmail}`)) || [];
    
    reminders.forEach(reminder => {
        if (reminder.enabled && reminder.time === currentTime) {
            showReminderNotification(reminder);
        }
    });
}

// Show reminder notification
function showReminderNotification(reminder) {
    // In a real app, this would show a browser notification
    // For this example, we'll show an alert
    alert(`Reminder: ${getReminderText(reminder.type)} at ${formatTime(reminder.time)}`);
}

// Set up interval to check reminders
setInterval(checkReminders, 60000); // Check every minute

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initReminders };
}
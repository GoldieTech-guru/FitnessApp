// scripts/dashboard.js

// Set current date
function setCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', options);
}

// Initialize hydration progress
function initHydrationProgress() {
    const progressElement = document.querySelector('.progress');
    const progress = progressElement.getAttribute('data-progress');
    progressElement.parentElement.style.setProperty('--progress', `${progress}%`);
}

// Water intake buttons
function setupWaterButtons() {
    const waterButtons = document.querySelectorAll('.btn-water');
    const progressText = document.querySelector('.progress-text span');
    const progressElement = document.querySelector('.progress');
    
    let currentWater = 1.8; // Starting value in liters
    
    waterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const amount = parseFloat(button.getAttribute('data-amount'));
            const amountInLiters = amount / 1000;
            currentWater += amountInLiters;
            
            // Update display
            progressText.textContent = `${currentWater.toFixed(1)}L`;
            
            // Update progress (assuming goal is 3L)
            const progressPercent = Math.min((currentWater / 3) * 100, 100);
            progressElement.setAttribute('data-progress', progressPercent.toFixed(0));
            progressElement.parentElement.style.setProperty('--progress', `${progressPercent}%`);
            
            // Change color when goal is reached
            if (progressPercent >= 100) {
                progressElement.parentElement.style.background = 
                    `conic-gradient(#2ecc71 0% ${progressPercent}%, #eee ${progressPercent}% 100%)`;
            }
        });
    });
}

// Set reminder button
function setupReminderButton() {
    const reminderButton = document.querySelector('.btn-reminder');
    
    reminderButton.addEventListener('click', () => {
        // In a real app, this would set up browser notifications
        alert('Reminder set! You will now receive notifications to drink water every 2 hours.');
    });
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
    initHydrationProgress();
    setupWaterButtons();
    setupReminderButton();
    
    // Simulate login (in a real app, this would come from your auth system)
    const userName = localStorage.getItem('userName') || 'User';
    document.querySelector('.user-name').textContent = `Hello, ${userName}!`;
    
    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', function(e) {
        e.preventDefault();
        // In a real app, this would clear auth tokens and redirect
        if (confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('authToken');
            window.location.href = '../index.html';
        }
    });
});
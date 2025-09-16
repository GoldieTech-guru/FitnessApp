// Progress tracking functionality for FitnessPal

// Initialize progress page
function initProgress() {
    // Load user data
    const userEmail = localStorage.getItem('userEmail') || 'default';
    const weightHistory = JSON.parse(localStorage.getItem(`weightHistory-${userEmail}`)) || [];
    const waterIntake = parseFloat(localStorage.getItem(`waterIntake-${userEmail}`)) || 0;
    const waterGoal = parseFloat(localStorage.getItem(`waterGoal-${userEmail}`)) || 3;
    
    // Display weight history
    displayWeightHistory(weightHistory);
    
    // Display hydration progress
    displayHydrationProgress(waterIntake, waterGoal);
    
    // Display workout completion stats
    displayWorkoutStats(userEmail);
}

// Display weight history chart
function displayWeightHistory(weightHistory) {
    if (weightHistory.length === 0) {
        document.getElementById('weight-chart-container').innerHTML = '<p>No weight data yet. Start tracking your weight to see progress.</p>';
        return;
    }
    
    // Prepare data for chart
    const dates = weightHistory.map(entry => entry.date);
    const weights = weightHistory.map(entry => parseFloat(entry.value));
    
    // In a real app, you would use a charting library like Chart.js
    // This is a simplified representation
    const chartContainer = document.getElementById('weight-chart-container');
    chartContainer.innerHTML = `
        <h3>Weight Progress</h3>
        <div class="weight-chart">
            ${weights.map((weight, index) => `
                <div class="chart-bar" style="height: ${(weight / Math.max(...weights)) * 100}%">
                    <span class="chart-value">${weight}kg</span>
                    <span class="chart-date">${dates[index]}</span>
                </div>
            `).join('')}
        </div>
    `;
}

// Display hydration progress
function displayHydrationProgress(intake, goal) {
    const progressPercent = Math.min((intake / goal) * 100, 100);
    
    document.getElementById('hydration-progress').innerHTML = `
        <div class="progress-circle" style="background: conic-gradient(var(--primary) 0% ${progressPercent}%, #eee ${progressPercent}% 100%)">
            <div class="progress-text">
                <span>${intake.toFixed(1)}L</span>
                <small>of ${goal}L</small>
            </div>
        </div>
        <p>You've consumed ${progressPercent.toFixed(0)}% of your daily water goal</p>
    `;
}

// Display workout completion stats
function displayWorkoutStats(userEmail) {
    const workoutTypes = ['glutes', 'weightloss', 'musclegain', 'abs'];
    let totalExercises = 0;
    let completedExercises = 0;
    
    workoutTypes.forEach(type => {
        const exercises = JSON.parse(localStorage.getItem(`completed-${userEmail}-${type}`)) || [];
        totalExercises += workoutData[type].exercises.length;
        completedExercises += exercises.length;
    });
    
    const completionPercent = totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0;
    
    document.getElementById('workout-stats').innerHTML = `
        <h3>Workout Completion</h3>
        <div class="completion-progress">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${completionPercent}%"></div>
            </div>
            <p>${completedExercises} of ${totalExercises} exercises completed (${completionPercent.toFixed(0)}%)</p>
        </div>
    `;
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initProgress };
}
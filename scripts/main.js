// Main application functionality for FitnessPal

// Initialize the application
function initApp() {
    // Check if user is logged in
    const userEmail = localStorage.getItem('userEmail');
    
    if (!userEmail && window.location.pathname.endsWith('dashboard.html')) {
        // Redirect to login if not authenticated
        window.location.href = 'index.html';
        return;
    }
    
    // Initialize page-specific functionality
    const path = window.location.pathname;
    
    if (path.endsWith('index.html') || path.endsWith('/')) {
        // Landing page
        initAuthentication();
    } else if (path.endsWith('dashboard.html')) {
        // Dashboard page
        initDashboard();
        initWorkoutModals();
    } else if (path.endsWith('')) {
        // Workouts page
        initWorkoutModals();
    } else if (path.endsWith('nutrition.js')) {
        // Nutrition page
        initNutrition();
    } else if (path.endsWith('progress.js')) {
        // Progress page
        initProgress();
    } else if (path.endsWith('reminders.js')) {
        // Reminders page
        initReminders();
    }
    
    // Initialize common functionality
    initLogout();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
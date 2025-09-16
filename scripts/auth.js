// Authentication functionality for FitnessPal

// DOM Elements
const authModal = document.getElementById('auth-modal');
const loginBtn = document.getElementById('login-btn');
const getStartedBtn = document.getElementById('get-started-btn');
const closeModal = document.getElementById('close-modal');
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const codeForm = document.getElementById('code-form');
const forgotPassword = document.getElementById('forgot-password');
const resendCode = document.getElementById('resend-code');

// Initialize authentication
function initAuthentication() {
    // Show auth modal on page load (simulating login requirement)
    if (!localStorage.getItem('userEmail')) {
        authModal.style.display = 'flex';
    }
    
    // Switch between auth tabs
    const authTabs = document.querySelectorAll('.auth-tab');
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active tab
            authTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding form
            document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
            document.getElementById(`${tabName}-form`).classList.add('active');
        });
    });
    
    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Simple validation
        if (email && password) {
            // In a real app, this would verify credentials with a backend
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', email.split('@')[0]);
            authModal.style.display = 'none';
            updateUserInfo();
        }
    });
    
    // Signup form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        
        if (name && email && password) {
            // Show code verification form
            document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
            codeForm.classList.add('active');
            
            // In a real app, this would send a code to the user's email
            console.log(`Verification code sent to ${email}`);
        }
    });
    
    // Code verification form submission
    codeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real app, this would verify the code with a backend
        const email = document.getElementById('signup-email').value;
        const name = document.getElementById('signup-name').value;
        
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', name);
        authModal.style.display = 'none';
        updateUserInfo();
    });
    
    // Forgot password
    forgotPassword.addEventListener('click', function(e) {
        e.preventDefault();
        // In a real app, this would send a password reset email
        alert('Password reset instructions have been sent to your email.');
    });
    
    // Resend code
    resendCode.addEventListener('click', function(e) {
        e.preventDefault();
        // In a real app, this would resend the verification code
        alert('Verification code has been resent to your email.');
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        authModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === authModal) {
            authModal.style.display = 'none';
        }
    });
}

// Update user information
function updateUserInfo() {
    const userName = localStorage.getItem('userName') || 'User';
    const userEmail = localStorage.getItem('userEmail') || '';
    
    document.querySelector('.user-name').textContent = `Hello, ${userName}!`;
    document.querySelector('.user-avatar').innerHTML = `<i class="fas fa-user"></i>`;
}

// Logout functionality
function initLogout() {
    document.getElementById('logout-btn').addEventListener('click', function(e) {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            window.location.href = 'index.html';
        }
    });
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initAuthentication, updateUserInfo, initLogout };
}
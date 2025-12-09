//chris code //
document.addEventListener('DOMContentLoaded', function() {
    console.log('Login.js loaded successfully');
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        console.log('Login form found');
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Form submitted');
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            
            console.log('Username entered:', username);
            console.log('Password length:', password.length);
            
            if(username === "admin" && password === "manager123") {
                console.log('Manager credentials matched! Redirecting...');
                window.location.href = "manager.html";
            } else {
                alert('Login successful! Redirecting to menu...');
                window.location.href = "menu.html";
            }
        });
    } else {
        console.error('Login form NOT found!');
    }
    
    
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('signup-name').value;
            const username = document.getElementById('signup-username').value;
            const password = document.getElementById('signup-password').value;
            
            // Store user data in localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            users.push({ name, username, password });
            localStorage.setItem('users', JSON.stringify(users));
            
            alert('Account created successfully! You can now login.');
            signupForm.reset();
        });
    }
});
// chris code ^ //

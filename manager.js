document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if(username === "admin" && password === "manager123") {
                window.location.href = "css/manager.html";
            } else {
                alert('Login successful! Redirecting to menu...');
                window.location.href = "menu.html";
            }
        });
    }
});
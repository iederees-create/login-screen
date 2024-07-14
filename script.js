document.addEventListener('DOMContentLoaded', function () {
    const showLoginFormButton = document.getElementById('showLoginForm');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const loginForm = document.getElementById('loginForm');

    showLoginFormButton.addEventListener('click', function () {
        loginFormContainer.style.display = 'block';
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You can add validation or authentication logic here

        if (username === 'admin' && password === 'password') {
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password');
        }
    });
});

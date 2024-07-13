document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

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

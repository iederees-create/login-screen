document.addEventListener('DOMContentLoaded', function () {
    const showLoginFormLink = document.getElementById('showLoginForm');
    const showSignUpFormLink = document.getElementById('showSignUpForm');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const signUpFormContainer = document.getElementById('signUpFormContainer');
    const loginForm = document.getElementById('loginForm');
    const signUpForm = document.getElementById('signUpForm');

    showLoginFormLink.addEventListener('click', function (event) {
        event.preventDefault();
        signUpFormContainer.style.display = 'none';
        loginFormContainer.style.display = 'block';
    });

    showSignUpFormLink.addEventListener('click', function (event) {
        event.preventDefault();
        loginFormContainer.style.display = 'none';
        signUpFormContainer.style.display = 'block';
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

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;

        // You can add sign-up logic here

        alert('Sign-Up successful! Please log in with your new credentials.');
        signUpFormContainer.style.display = 'none';
        loginFormContainer.style.display = 'block';
    });
});

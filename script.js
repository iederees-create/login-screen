document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const country = document.getElementById('country').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Country:', country);

    // Here you can add your form submission logic
});

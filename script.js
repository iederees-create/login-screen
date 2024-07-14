document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hard-coded credentials for testing
    const validUsername = "testuser";
    const validPassword = "testpassword";

    if(username === validUsername && password === validPassword) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to the dashboard
    } else {
        alert("Invalid username or password.");
    }
});

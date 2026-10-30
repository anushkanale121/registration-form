document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let mobile = document.getElementById("mobile").value;

    let password = document.getElementById("password").value;

    let confirmPassword =
        document.getElementById("confirmPassword").value;

    // Password validation
    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match!");
        return;
    }

    // Mobile number validation
    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter a valid 10 digit mobile number!");
        return;
    }

    // Success message
    document.getElementById("message").innerHTML =
        "Registration Successful!";

    alert("Welcome " + name + "! Registration Successful.");

    // Clear form
    this.reset();

});

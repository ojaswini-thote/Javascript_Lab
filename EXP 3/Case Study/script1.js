function login() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let city = document.getElementById("city").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    // Name Validation
    if (!/^[A-Za-z ]+$/.test(name)) {
        alert(
            "Name should contain only alphabets and spaces."
        );
        return;
    }

    // Email Validation
    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone Validation
    let phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phone)) {
        alert(
            "Phone number must contain exactly 10 digits."
        );
        return;
    }

    // City Validation
    if (city === "") {
        alert("Please enter your city.");
        return;
    }

    // Gender Validation
    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    // Password Validation
    // Minimum 8 characters
    // One uppercase letter
    // One lowercase letter
    // One number
    // One special character

    let passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordPattern.test(password)) {

        alert(
            "Password must contain:\n\n" +
            "• Minimum 8 characters\n" +
            "• One uppercase letter\n" +
            "• One lowercase letter\n" +
            "• One number\n" +
            "• One special character"
        );

        return;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Success Message
    document.getElementById("output").innerHTML = `
        <strong>Login Successful!</strong><br>
        Welcome, ${name}!<br>
        Redirecting to Student Grading System...
    `;

    // Redirect after 1.5 seconds
    setTimeout(function () {
        window.location.href = "index2.html";
    }, 1500);
}
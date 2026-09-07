const form = document.getElementById("registrationForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const website = document.getElementById("website");
const terms = document.getElementById("terms");
const message = document.getElementById("message");


for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    day.appendChild(option);
}


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


months.forEach(function (monthName, index) {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = monthName;
    month.appendChild(option);
});


const currentYear = new Date().getFullYear();

for (let i = currentYear; i >= 1950; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
}


firstName.addEventListener("focus", function () {
    firstName.style.backgroundColor = "#f5f1f9";
});


firstName.addEventListener("blur", function () {
    firstName.style.backgroundColor = "#fcfbfd";
});


website.addEventListener("change", function () {

    if (website.value.trim() !== "") {

        website.style.backgroundColor = "#eee7f7";
        website.style.borderColor = "#8d72b5";

        showMessage(
            "Website field has been changed.",
            "success"
        );

    }

});


form.addEventListener("submit", function (event) {

    event.preventDefault();


    if (
        firstName.value.trim() === "" ||
        lastName.value.trim() === "" ||
        day.value === "" ||
        month.value === "" ||
        year.value === "" ||
        username.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value.trim() === "" ||
        confirmPassword.value.trim() === ""
    ) {

        showMessage(
            "Please complete all required fields.",
            "error"
        );

        return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email.value)) {

        showMessage(
            "Please enter a valid email address.",
            "error"
        );

        email.focus();

        return;
    }


    if (password.value.length < 6) {

        showMessage(
            "Password must contain at least 6 characters.",
            "error"
        );

        password.focus();

        return;
    }


    if (password.value !== confirmPassword.value) {

        showMessage(
            "Passwords do not match. Please try again.",
            "error"
        );

        confirmPassword.focus();

        return;
    }


    if (website.value.trim() !== "") {

        try {

            new URL(website.value);

        } catch (error) {

            showMessage(
                "Please enter a valid website URL.",
                "error"
            );

            website.focus();

            return;
        }

    }


    if (!terms.checked) {

        showMessage(
            "Please agree to the Terms and Conditions.",
            "error"
        );

        return;
    }


    showMessage(
        "Profile created successfully!",
        "success"
    );

});


function showMessage(text, type) {

    message.textContent = text;
    message.className = type;

}
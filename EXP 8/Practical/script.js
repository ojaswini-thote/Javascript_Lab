const form = document.getElementById("membershipForm");

const fullName = document.getElementById("fullName");
const age = document.getElementById("age");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const goal = document.getElementById("goal");
const plan = document.getElementById("plan");
const terms = document.getElementById("terms");

const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const goalError = document.getElementById("goalError");
const planError = document.getElementById("planError");
const termsError = document.getElementById("termsError");

const message = document.getElementById("message");

function validateName() {
    const value = fullName.value.trim();

    if (value === "") {
        nameError.textContent = "Full name is required.";
        fullName.classList.add("invalid");
        fullName.classList.remove("valid");
        return false;
    }

    if (!/^[A-Za-z ]+$/.test(value)) {
        nameError.textContent = "Name should contain only letters.";
        fullName.classList.add("invalid");
        fullName.classList.remove("valid");
        return false;
    }

    nameError.textContent = "";
    fullName.classList.add("valid");
    fullName.classList.remove("invalid");
    return true;
}

function validateAge() {
    const value = Number(age.value);

    if (age.value === "") {
        ageError.textContent = "Age is required.";
        age.classList.add("invalid");
        age.classList.remove("valid");
        return false;
    }

    if (value < 16 || value > 60) {
        ageError.textContent = "Age must be between 16 and 60.";
        age.classList.add("invalid");
        age.classList.remove("valid");
        return false;
    }

    ageError.textContent = "";
    age.classList.add("valid");
    age.classList.remove("invalid");
    return true;
}

function validateGender() {
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        genderError.textContent = "Please select your gender.";
        return false;
    }

    genderError.textContent = "";
    return true;
}

function validateEmail() {
    const value = email.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
        emailError.textContent = "Email is required.";
        email.classList.add("invalid");
        email.classList.remove("valid");
        return false;
    }

    if (!pattern.test(value)) {
        emailError.textContent = "Enter a valid email address.";
        email.classList.add("invalid");
        email.classList.remove("valid");
        return false;
    }

    emailError.textContent = "";
    email.classList.add("valid");
    email.classList.remove("invalid");
    return true;
}

function validatePhone() {
    const value = phone.value.trim();

    if (value === "") {
        phoneError.textContent = "Phone number is required.";
        phone.classList.add("invalid");
        phone.classList.remove("valid");
        return false;
    }

    if (!/^[0-9]{10}$/.test(value)) {
        phoneError.textContent = "Phone number must contain 10 digits.";
        phone.classList.add("invalid");
        phone.classList.remove("valid");
        return false;
    }

    phoneError.textContent = "";
    phone.classList.add("valid");
    phone.classList.remove("invalid");
    return true;
}

function validateGoal() {
    if (goal.value === "") {
        goalError.textContent = "Please select a fitness goal.";
        goal.classList.add("invalid");
        goal.classList.remove("valid");
        return false;
    }

    goalError.textContent = "";
    goal.classList.add("valid");
    goal.classList.remove("invalid");
    return true;
}

function validatePlan() {
    if (plan.value === "") {
        planError.textContent = "Please select a membership plan.";
        plan.classList.add("invalid");
        plan.classList.remove("valid");
        return false;
    }

    planError.textContent = "";
    plan.classList.add("valid");
    plan.classList.remove("invalid");
    return true;
}

function validateTerms() {
    if (!terms.checked) {
        termsError.textContent = "You must agree to the terms and conditions.";
        return false;
    }

    termsError.textContent = "";
    return true;
}

fullName.addEventListener("focus", function () {
    fullName.style.backgroundColor = "#f5f8f1";
});

fullName.addEventListener("input", validateName);

fullName.addEventListener("blur", function () {
    validateName();
    fullName.style.backgroundColor = "";
});

age.addEventListener("focus", function () {
    age.style.backgroundColor = "#f5f8f1";
});

age.addEventListener("input", validateAge);

age.addEventListener("blur", function () {
    validateAge();
    age.style.backgroundColor = "";
});

document.querySelectorAll('input[name="gender"]').forEach(function (radio) {
    radio.addEventListener("change", validateGender);
});

email.addEventListener("focus", function () {
    email.style.backgroundColor = "#f5f8f1";
});

email.addEventListener("input", validateEmail);

email.addEventListener("blur", function () {
    validateEmail();
    email.style.backgroundColor = "";
});

phone.addEventListener("focus", function () {
    phone.style.backgroundColor = "#f5f8f1";
});

phone.addEventListener("input", function () {
    phone.value = phone.value.replace(/\D/g, "");
    validatePhone();
});

phone.addEventListener("blur", function () {
    validatePhone();
    phone.style.backgroundColor = "";
});

goal.addEventListener("focus", function () {
    goal.style.backgroundColor = "#f5f8f1";
});

goal.addEventListener("change", validateGoal);

goal.addEventListener("blur", function () {
    validateGoal();
    goal.style.backgroundColor = "";
});

plan.addEventListener("focus", function () {
    plan.style.backgroundColor = "#f5f8f1";
});

plan.addEventListener("change", validatePlan);

plan.addEventListener("blur", function () {
    validatePlan();
    plan.style.backgroundColor = "";
});

terms.addEventListener("change", validateTerms);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const validName = validateName();
    const validAge = validateAge();
    const validGender = validateGender();
    const validEmail = validateEmail();
    const validPhone = validatePhone();
    const validGoal = validateGoal();
    const validPlan = validatePlan();
    const validTerms = validateTerms();

    if (
        validName &&
        validAge &&
        validGender &&
        validEmail &&
        validPhone &&
        validGoal &&
        validPlan &&
        validTerms
    ) {
        message.textContent = "Membership successfully registered!";
        message.className = "success";

        form.reset();

        document.querySelectorAll("input, select").forEach(function (field) {
            field.classList.remove("valid");
        });
    } else {
        message.textContent = "Please correct the highlighted fields.";
        message.className = "fail";
    }
});
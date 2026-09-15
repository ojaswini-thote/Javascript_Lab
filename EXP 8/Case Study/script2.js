// ==================================================
// GET FORM ELEMENTS
// ==================================================

const form =
    document.getElementById("membershipForm");

const fullName =
    document.getElementById("fullName");

const age =
    document.getElementById("age");

const email =
    document.getElementById("email");

const phone =
    document.getElementById("phone");

const eyeColor =
    document.getElementById("eyeColor");

const goal =
    document.getElementById("goal");

const plan =
    document.getElementById("plan");

const ability =
    document.getElementById("ability");

const terms =
    document.getElementById("terms");

const heightCheck =
    document.getElementById("heightCheck");

const weightCheck =
    document.getElementById("weightCheck");

const message =
    document.getElementById("message");


// ==================================================
// ERROR ELEMENTS
// ==================================================

const nameError =
    document.getElementById("nameError");

const ageError =
    document.getElementById("ageError");

const genderError =
    document.getElementById("genderError");

const emailError =
    document.getElementById("emailError");

const phoneError =
    document.getElementById("phoneError");

const eyeError =
    document.getElementById("eyeError");

const goalError =
    document.getElementById("goalError");

const planError =
    document.getElementById("planError");

const abilityError =
    document.getElementById("abilityError");

const termsError =
    document.getElementById("termsError");


// ==================================================
// VALIDATE NAME
// ==================================================

function validateName() {

    const value =
        fullName.value.trim();


    if (value === "") {

        nameError.textContent =
            "Full name is required.";

        fullName.classList.add("invalid");
        fullName.classList.remove("valid");

        return false;
    }


    if (!/^[A-Za-z ]+$/.test(value)) {

        nameError.textContent =
            "Name should contain only letters.";

        fullName.classList.add("invalid");
        fullName.classList.remove("valid");

        return false;
    }


    nameError.textContent = "";

    fullName.classList.add("valid");
    fullName.classList.remove("invalid");

    return true;
}


// ==================================================
// VALIDATE AGE
// ==================================================

function validateAge() {

    const value =
        Number(age.value);


    if (age.value === "") {

        ageError.textContent =
            "Age is required.";

        age.classList.add("invalid");
        age.classList.remove("valid");

        return false;
    }


    if (value < 16 || value > 60) {

        ageError.textContent =
            "Age must be between 16 and 60.";

        age.classList.add("invalid");
        age.classList.remove("valid");

        return false;
    }


    ageError.textContent = "";

    age.classList.add("valid");
    age.classList.remove("invalid");

    return true;
}


// ==================================================
// VALIDATE GENDER
// ==================================================

function validateGender() {

    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );


    if (!gender) {

        genderError.textContent =
            "Please select your gender.";

        return false;
    }


    genderError.textContent = "";

    return true;
}


// ==================================================
// VALIDATE EMAIL
// ==================================================

function validateEmail() {

    const value =
        email.value.trim();

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (value === "") {

        emailError.textContent =
            "Email is required.";

        email.classList.add("invalid");
        email.classList.remove("valid");

        return false;
    }


    if (!pattern.test(value)) {

        emailError.textContent =
            "Enter a valid email address.";

        email.classList.add("invalid");
        email.classList.remove("valid");

        return false;
    }


    emailError.textContent = "";

    email.classList.add("valid");
    email.classList.remove("invalid");

    return true;
}


// ==================================================
// VALIDATE PHONE
// ==================================================

function validatePhone() {

    const value =
        phone.value.trim();


    if (value === "") {

        phoneError.textContent =
            "Phone number is required.";

        phone.classList.add("invalid");
        phone.classList.remove("valid");

        return false;
    }


    if (!/^[0-9]{10}$/.test(value)) {

        phoneError.textContent =
            "Phone number must contain 10 digits.";

        phone.classList.add("invalid");
        phone.classList.remove("valid");

        return false;
    }


    phoneError.textContent = "";

    phone.classList.add("valid");
    phone.classList.remove("invalid");

    return true;
}


// ==================================================
// VALIDATE EYE COLOR
// ==================================================

function validateEyeColor() {

    if (eyeColor.value === "") {

        eyeError.textContent =
            "Please select your eye color.";

        eyeColor.classList.add("invalid");
        eyeColor.classList.remove("valid");

        return false;
    }


    eyeError.textContent = "";

    eyeColor.classList.add("valid");
    eyeColor.classList.remove("invalid");

    return true;
}


// ==================================================
// VALIDATE FITNESS GOAL
// ==================================================

function validateGoal() {

    if (goal.value === "") {

        goalError.textContent =
            "Please select a fitness goal.";

        goal.classList.add("invalid");
        goal.classList.remove("valid");

        return false;
    }


    goalError.textContent = "";

    goal.classList.add("valid");
    goal.classList.remove("invalid");

    return true;
}


// ==================================================
// VALIDATE MEMBERSHIP PLAN
// ==================================================

function validatePlan() {

    if (plan.value === "") {

        planError.textContent =
            "Please select a membership plan.";

        plan.classList.add("invalid");
        plan.classList.remove("valid");

        return false;
    }


    planError.textContent = "";

    plan.classList.add("valid");
    plan.classList.remove("invalid");

    return true;
}


// ==================================================
// VALIDATE ATHLETIC ABILITY
// ==================================================

function validateAbility() {

    const value =
        ability.value.trim();


    if (value === "") {

        abilityError.textContent =
            "Please describe your athletic ability.";

        ability.classList.add("invalid");
        ability.classList.remove("valid");

        return false;
    }


    if (value.length < 10) {

        abilityError.textContent =
            "Please enter at least 10 characters.";

        ability.classList.add("invalid");
        ability.classList.remove("valid");

        return false;
    }


    abilityError.textContent = "";

    ability.classList.add("valid");
    ability.classList.remove("invalid");

    return true;
}


// ==================================================
// VALIDATE TERMS
// ==================================================

function validateTerms() {

    if (!terms.checked) {

        termsError.textContent =
            "You must agree to the terms and conditions.";

        return false;
    }


    termsError.textContent = "";

    return true;
}


// ==================================================
// NAME EVENTS
// ==================================================

fullName.addEventListener(
    "focus",
    function() {

        fullName.style.backgroundColor =
            "#f5f8f1";

    }
);


fullName.addEventListener(
    "input",
    validateName
);


fullName.addEventListener(
    "blur",
    function() {

        validateName();

        fullName.style.backgroundColor = "";

    }
);


// ==================================================
// AGE EVENTS
// ==================================================

age.addEventListener(
    "focus",
    function() {

        age.style.backgroundColor =
            "#f5f8f1";

    }
);


age.addEventListener(
    "input",
    validateAge
);


age.addEventListener(
    "blur",
    function() {

        validateAge();

        age.style.backgroundColor = "";

    }
);


// ==================================================
// GENDER EVENT
// ==================================================

document
    .querySelectorAll(
        'input[name="gender"]'
    )
    .forEach(function(radio) {

        radio.addEventListener(
            "change",
            validateGender
        );

    });


// ==================================================
// EMAIL EVENTS
// ==================================================

email.addEventListener(
    "focus",
    function() {

        email.style.backgroundColor =
            "#f5f8f1";

    }
);


email.addEventListener(
    "input",
    validateEmail
);


email.addEventListener(
    "blur",
    function() {

        validateEmail();

        email.style.backgroundColor = "";

    }
);


// ==================================================
// PHONE EVENTS
// ==================================================

phone.addEventListener(
    "focus",
    function() {

        phone.style.backgroundColor =
            "#f5f8f1";

    }
);


phone.addEventListener(
    "input",
    function() {

        phone.value =
            phone.value.replace(/\D/g, "");

        validatePhone();

    }
);


phone.addEventListener(
    "blur",
    function() {

        validatePhone();

        phone.style.backgroundColor = "";

    }
);


// ==================================================
// EYE COLOR EVENTS
// ==================================================

eyeColor.addEventListener(
    "change",
    validateEyeColor
);


eyeColor.addEventListener(
    "blur",
    validateEyeColor
);


// ==================================================
// FITNESS GOAL EVENTS
// ==================================================

goal.addEventListener(
    "change",
    validateGoal
);


goal.addEventListener(
    "blur",
    validateGoal
);


// ==================================================
// MEMBERSHIP PLAN EVENTS
// ==================================================

plan.addEventListener(
    "change",
    validatePlan
);


plan.addEventListener(
    "blur",
    validatePlan
);


// ==================================================
// ATHLETIC ABILITY EVENTS
// ==================================================

ability.addEventListener(
    "input",
    validateAbility
);


ability.addEventListener(
    "blur",
    validateAbility
);


ability.addEventListener(
    "focus",
    function() {

        ability.style.backgroundColor =
            "#f5f8f1";

    }
);


// ==================================================
// TERMS EVENT
// ==================================================

terms.addEventListener(
    "change",
    validateTerms
);


// ==================================================
// EXTRA CHECKBOX EVENTS
// ==================================================

heightCheck.addEventListener(
    "change",
    function() {

        if (heightCheck.checked) {

            heightCheck.parentElement.style.fontWeight =
                "600";

        } else {

            heightCheck.parentElement.style.fontWeight =
                "500";
        }

    }
);


weightCheck.addEventListener(
    "change",
    function() {

        if (weightCheck.checked) {

            weightCheck.parentElement.style.fontWeight =
                "600";

        } else {

            weightCheck.parentElement.style.fontWeight =
                "500";
        }

    }
);


// ==================================================
// FORM SUBMIT
// ==================================================

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const validName =
            validateName();

        const validAge =
            validateAge();

        const validGender =
            validateGender();

        const validEmail =
            validateEmail();

        const validPhone =
            validatePhone();

        const validEyeColor =
            validateEyeColor();

        const validGoal =
            validateGoal();

        const validPlan =
            validatePlan();

        const validAbility =
            validateAbility();

        const validTerms =
            validateTerms();


        if (
            validName &&
            validAge &&
            validGender &&
            validEmail &&
            validPhone &&
            validEyeColor &&
            validGoal &&
            validPlan &&
            validAbility &&
            validTerms
        ) {

            message.textContent =
                "Membership successfully registered!";

            message.className =
                "success";


            // Collect selected checkbox information

            let additionalInfo = [];


            if (heightCheck.checked) {

                additionalInfo.push(
                    "Over 6 feet tall"
                );

            }


            if (weightCheck.checked) {

                additionalInfo.push(
                    "Over 200 pounds"
                );

            }


            // Display successful submission

            console.log(
                "Name:",
                fullName.value
            );

            console.log(
                "Age:",
                age.value
            );

            console.log(
                "Gender:",
                document.querySelector(
                    'input[name="gender"]:checked'
                ).value
            );

            console.log(
                "Eye Color:",
                eyeColor.value
            );

            console.log(
                "Fitness Goal:",
                goal.value
            );

            console.log(
                "Membership Plan:",
                plan.value
            );

            console.log(
                "Athletic Ability:",
                ability.value
            );

            console.log(
                "Additional Information:",
                additionalInfo
            );


            form.reset();


            document
                .querySelectorAll(
                    "input, select, textarea"
                )
                .forEach(function(field) {

                    field.classList.remove(
                        "valid"
                    );

                    field.classList.remove(
                        "invalid"
                    );

                });

        }

        else {

            message.textContent =
                "Please correct the highlighted fields.";

            message.className =
                "fail";

        }

    }
);
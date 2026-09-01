/* =====================================================
   FORM VALIDATION
===================================================== */

document.getElementById("myForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        // Get values

        let name =
            document.getElementById("name").value.trim();

        let email =
            document.getElementById("email").value.trim();

        let phone =
            document.getElementById("phone").value.trim();

        let dob =
            document.getElementById("dob").value;

        let password =
            document.getElementById("password").value;

        let confirmPassword =
            document.getElementById("confirmPassword").value;


        let gender =
            document.querySelector(
                'input[name="gender"]:checked'
            );


        let valid = true;


        // Clear previous error messages

        document
            .querySelectorAll(".error")
            .forEach(function(error) {

                error.textContent = "";

            });


        document.getElementById(
            "success"
        ).textContent = "";


        /* =================================================
           NAME VALIDATION
        ================================================= */

        if (name === "") {

            document.getElementById(
                "nameError"
            ).textContent =
                "Name is required.";

            valid = false;

        }

        else if (name.length < 3) {

            document.getElementById(
                "nameError"
            ).textContent =
                "Name must contain at least 3 characters.";

            valid = false;

        }

        else if (!/^[A-Za-z ]+$/.test(name)) {

            document.getElementById(
                "nameError"
            ).textContent =
                "Name can contain only letters and spaces.";

            valid = false;
        }


        /* =================================================
           EMAIL VALIDATION
        ================================================= */

        if (email === "") {

            document.getElementById(
                "emailError"
            ).textContent =
                "Email address is required.";

            valid = false;
        }


        // Check @

        else if (!email.includes("@")) {

            document.getElementById(
                "emailError"
            ).textContent =
                'Email must contain "@". Example: name@gmail.com';

            valid = false;
        }


        // More than one @

        else if (
            (email.match(/@/g) || []).length > 1
        ) {

            document.getElementById(
                "emailError"
            ).textContent =
                'Email must contain only one "@".';

            valid = false;
        }


        else {

            let parts =
                email.split("@");


            let username =
                parts[0];

            let domain =
                parts[1];


            // Nothing before @

            if (username === "") {

                document.getElementById(
                    "emailError"
                ).textContent =
                    'Enter the username before "@". Example: name@gmail.com';

                valid = false;
            }


            // Nothing after @

            else if (domain === "") {

                document.getElementById(
                    "emailError"
                ).textContent =
                    'Enter a domain after "@". Example: name@gmail.com';

                valid = false;
            }


            // Dot missing

            else if (!domain.includes(".")) {

                document.getElementById(
                    "emailError"
                ).textContent =
                    'Email domain must contain ".". Example: name@gmail.com';

                valid = false;
            }


            // Dot at beginning or end

            else if (
                domain.startsWith(".") ||
                domain.endsWith(".")
            ) {

                document.getElementById(
                    "emailError"
                ).textContent =
                    'The "." cannot be at the beginning or end of the domain.';

                valid = false;
            }


            // Empty part around dot

            else if (
                domain
                    .split(".")
                    .some(function(part) {
                        return part === "";
                    })
            ) {

                document.getElementById(
                    "emailError"
                ).textContent =
                    'Enter text after "." in the email domain.';

                valid = false;
            }


            // Spaces

            else if (/\s/.test(email)) {

                document.getElementById(
                    "emailError"
                ).textContent =
                    "Email cannot contain spaces.";

                valid = false;
            }
        }


        /* =================================================
           PHONE VALIDATION
        ================================================= */

        if (phone === "") {

            document.getElementById(
                "phoneError"
            ).textContent =
                "Phone number is required.";

            valid = false;
        }


        else if (!/^[0-9]+$/.test(phone)) {

            document.getElementById(
                "phoneError"
            ).textContent =
                "Phone number can contain only digits.";

            valid = false;
        }


        else if (phone.length !== 10) {

            document.getElementById(
                "phoneError"
            ).textContent =
                "Phone number must contain exactly 10 digits.";

            valid = false;
        }


        /* =================================================
           DATE OF BIRTH VALIDATION
        ================================================= */

        if (dob === "") {

            document.getElementById(
                "dobError"
            ).textContent =
                "Date of birth is required.";

            valid = false;
        }


        else {

            let birthDate =
                new Date(dob);

            let today =
                new Date();


            today.setHours(
                0,
                0,
                0,
                0
            );


            if (birthDate > today) {

                document.getElementById(
                    "dobError"
                ).textContent =
                    "Date of birth cannot be a future date.";

                valid = false;
            }
        }


        /* =================================================
           GENDER VALIDATION
        ================================================= */

        if (!gender) {

            document.getElementById(
                "genderError"
            ).textContent =
                "Please select Male, Female, or Other.";

            valid = false;
        }


        /* =================================================
           PASSWORD VALIDATION
        ================================================= */

        if (password === "") {

            document.getElementById(
                "passwordError"
            ).textContent =
                "Password is required.";

            valid = false;
        }


        else if (password.length < 8) {

            document.getElementById(
                "passwordError"
            ).textContent =
                "Password must contain at least 8 characters.";

            valid = false;
        }


        else if (!/[A-Z]/.test(password)) {

            document.getElementById(
                "passwordError"
            ).textContent =
                "Password must contain at least one uppercase letter.";

            valid = false;
        }


        else if (!/[a-z]/.test(password)) {

            document.getElementById(
                "passwordError"
            ).textContent =
                "Password must contain at least one lowercase letter.";

            valid = false;
        }


        else if (!/[0-9]/.test(password)) {

            document.getElementById(
                "passwordError"
            ).textContent =
                "Password must contain at least one number.";

            valid = false;
        }


        else if (!/[!@#$%^&*]/.test(password)) {

            document.getElementById(
                "passwordError"
            ).textContent =
                "Password must contain at least one special character.";

            valid = false;
        }


        /* =================================================
           CONFIRM PASSWORD
        ================================================= */

        if (confirmPassword === "") {

            document.getElementById(
                "confirmPasswordError"
            ).textContent =
                "Please confirm your password.";

            valid = false;
        }


        else if (password !== confirmPassword) {

            document.getElementById(
                "confirmPasswordError"
            ).textContent =
                "Passwords do not match.";

            valid = false;
        }


        /* =================================================
           FINAL RESULT
        ================================================= */

        if (valid) {

            document.getElementById(
                "success"
            ).textContent =
                "✓ Registration successful.";

            document.getElementById(
                "myForm"
            ).reset();
        }

    }
);


/* =====================================================
   SHOW / HIDE PASSWORD
===================================================== */

document.getElementById(
    "togglePassword"
).addEventListener(
    "click",
    function() {

        let password =
            document.getElementById(
                "password"
            );


        if (password.type === "password") {

            password.type = "text";

            this.textContent = "Hide";

        }

        else {

            password.type = "password";

            this.textContent = "Show";
        }

    }
);


/* =====================================================
   SHOW / HIDE CONFIRM PASSWORD
===================================================== */

document.getElementById(
    "toggleConfirm"
).addEventListener(
    "click",
    function() {

        let password =
            document.getElementById(
                "confirmPassword"
            );


        if (password.type === "password") {

            password.type = "text";

            this.textContent = "Hide";

        }

        else {

            password.type = "password";

            this.textContent = "Show";
        }

    }
);
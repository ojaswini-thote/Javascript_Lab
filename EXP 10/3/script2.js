// ==========================================
// GET FORM
// ==========================================

const form =
    document.getElementById("concertForm");


// ==========================================
// FORM FIELDS
// ==========================================

const fields = [
    "name",
    "email",
    "phone",
    "concert",
    "ticketType",
    "tickets",
    "date"
];


// ==========================================
// STORAGE ELEMENTS
// ==========================================

const saveDraft =
    document.getElementById("saveDraft");


const sessionStatus =
    document.getElementById("sessionStatus");


const localStatus =
    document.getElementById("localStatus");


// ==========================================
// UPDATE STORAGE STATUS
// ==========================================

function updateSessionStatus(message) {

    sessionStatus.textContent =
        message;

}


function updateLocalStatus(message) {

    localStatus.textContent =
        message;

}


// ==========================================
// GET FORM DATA
// ==========================================

function getFormData() {

    const data = {};


    fields.forEach(id => {

        data[id] =
            document.getElementById(id).value;

    });


    return data;

}


// ==========================================
// SAVE DRAFT
// ==========================================

function saveDraftData() {

    const data =
        getFormData();


    // ======================================
    // PERMANENT DRAFT
    // LOCAL STORAGE
    // ======================================

    if (saveDraft.checked) {


        // Remove temporary draft

        sessionStorage.removeItem(
            "concertDraft"
        );


        // Store permanently

        localStorage.setItem(
            "concertDraft",
            JSON.stringify(data)
        );


        updateLocalStatus(
            "✓ Draft saved to Local Storage"
        );


        updateSessionStatus(
            "No temporary draft"
        );

    }


    // ======================================
    // TEMPORARY DRAFT
    // SESSION STORAGE
    // ======================================

    else {


        // Remove permanent draft

        localStorage.removeItem(
            "concertDraft"
        );


        // Store temporarily

        sessionStorage.setItem(
            "concertDraft",
            JSON.stringify(data)
        );


        updateSessionStatus(
            "✓ Draft saved to Session Storage"
        );


        updateLocalStatus(
            "No permanent draft"
        );

    }

}


// ==========================================
// PAGE LOAD
// ==========================================

window.addEventListener(
    "DOMContentLoaded",
    () => {


        // ==================================
        // CLEAR TEMPORARY SESSION DRAFT
        // ==================================

        /*
            We deliberately remove the session
            draft when the page is reloaded.

            This gives the practical the required
            behaviour:

            Session Storage = temporary
            Local Storage = permanent
        */

        sessionStorage.removeItem(
            "concertDraft"
        );


        sessionStorage.removeItem(
            "currentConcertRegistration"
        );


        // ==================================
        // CHECK LOCAL STORAGE
        // ==================================

        const permanentDraft =
            localStorage.getItem(
                "concertDraft"
            );


        if (permanentDraft) {


            try {

                const data =
                    JSON.parse(permanentDraft);


                // Restore localStorage draft

                fields.forEach(id => {

                    if (
                        data[id] !== undefined
                    ) {

                        document.getElementById(id).value =
                            data[id];

                    }

                });


                // Checkbox remains checked

                saveDraft.checked = true;


                updateLocalStatus(
                    "✓ Permanent draft restored from Local Storage"
                );


                updateSessionStatus(
                    "No temporary draft"
                );

            }


            catch (error) {

                updateLocalStatus(
                    "⚠ Local Storage data is invalid"
                );

            }

        }


        else {

            updateLocalStatus(
                "No permanent draft"
            );


            updateSessionStatus(
                "Session draft cleared on reload"
            );

        }

    }
);


// ==========================================
// INPUT EVENT
// ==========================================

form.addEventListener(
    "input",
    () => {

        saveDraftData();

    }
);


// ==========================================
// CHECKBOX CHANGE EVENT
// ==========================================

saveDraft.addEventListener(
    "change",
    () => {

        saveDraftData();

    }
);


// ==========================================
// VALIDATION FUNCTION
// ==========================================

function validateField(id) {


    const input =
        document.getElementById(id);


    const error =
        document.getElementById(
            id + "Error"
        );


    const value =
        input.value.trim();


    let message = "";


    // ======================================
    // NAME
    // ======================================

    if (id === "name") {

        if (value === "") {

            message =
                "Name is required.";

        }

        else if (
            !/^[A-Za-z ]{2,}$/.test(value)
        ) {

            message =
                "Enter a valid name using letters only.";

        }

    }


    // ======================================
    // EMAIL
    // ======================================

    if (id === "email") {

        if (value === "") {

            message =
                "Email is required.";

        }

        else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ) {

            message =
                "Enter a valid email address.";

        }

    }


    // ======================================
    // PHONE
    // ======================================

    if (id === "phone") {

        if (value === "") {

            message =
                "Phone number is required.";

        }

        else if (
            !/^\d{10}$/.test(value)
        ) {

            message =
                "Phone number must contain exactly 10 digits.";

        }

    }


    // ======================================
    // CONCERT
    // ======================================

    if (id === "concert") {

        if (value === "") {

            message =
                "Please select a concert.";

        }

    }


    // ======================================
    // TICKET TYPE
    // ======================================

    if (id === "ticketType") {

        if (value === "") {

            message =
                "Please select a ticket type.";

        }

    }


    // ======================================
    // NUMBER OF TICKETS
    // ======================================

    if (id === "tickets") {


        const numberOfTickets =
            Number(value);


        if (value === "") {

            message =
                "Enter number of tickets.";

        }


        else if (
            numberOfTickets < 1 ||
            numberOfTickets > 6
        ) {

            message =
                "Tickets must be between 1 and 6.";

        }

    }


    // ======================================
    // DATE
    // ======================================

    if (id === "date") {


        if (value === "") {

            message =
                "Please select a concert date.";

        }


        else {

            const selectedDate =
                new Date(value);


            const today =
                new Date();


            today.setHours(
                0,
                0,
                0,
                0
            );


            if (selectedDate < today) {

                message =
                    "Concert date cannot be in the past.";

            }

        }

    }


    // ======================================
    // SHOW ERROR
    // ======================================

    error.textContent =
        message;


    return message === "";

}


// ==========================================
// BLUR EVENT
// ==========================================

fields.forEach(id => {


    const element =
        document.getElementById(id);


    element.addEventListener(
        "blur",
        () => {

            validateField(id);

        }
    );


    // ======================================
    // CHANGE EVENT
    // ======================================

    element.addEventListener(
        "change",
        () => {

            validateField(id);

        }
    );

});


// ==========================================
// SUBMIT EVENT
// ==========================================

form.addEventListener(
    "submit",
    (event) => {


        // Stop normal form submission

        event.preventDefault();


        let valid = true;


        // ==================================
        // VALIDATE ALL FIELDS
        // ==================================

        fields.forEach(id => {

            if (!validateField(id)) {

                valid = false;

            }

        });


        // ==================================
        // IF INVALID
        // ==================================

        if (!valid) {


            document.getElementById(
                "successMessage"
            ).style.display = "none";


            alert(
                "Please correct the errors in the form."
            );


            return;

        }


        // ==================================
        // GET REGISTRATION DATA
        // ==================================

        const registration =
            getFormData();


        // ==================================
        // STORE COMPLETED REGISTRATION
        // ACCORDING TO USER'S CHOICE
        // ==================================

        if (saveDraft.checked) {


            // Permanent registration

            localStorage.setItem(
                "lastConcertRegistration",
                JSON.stringify(registration)
            );


            updateLocalStatus(
                "✓ Registration saved to Local Storage"
            );


            // Remove temporary data

            sessionStorage.removeItem(
                "currentConcertRegistration"
            );


            updateSessionStatus(
                "No temporary draft"
            );

        }


        else {


            // Temporary registration

            sessionStorage.setItem(
                "currentConcertRegistration",
                JSON.stringify(registration)
            );


            updateSessionStatus(
                "✓ Registration saved to Session Storage"
            );


            // Remove permanent registration

            localStorage.removeItem(
                "lastConcertRegistration"
            );


            updateLocalStatus(
                "No permanent registration"
            );

        }


        // ==================================
        // REMOVE TEMPORARY DRAFT
        // ==================================

        sessionStorage.removeItem(
            "concertDraft"
        );


        // ==================================
        // SUCCESS MESSAGE
        // ==================================

        const success =
            document.getElementById(
                "successMessage"
            );


        success.textContent =
            "Registration successful! Your concert pass has been saved.";


        success.style.display =
            "block";


        // ==================================
        // ALERT
        // ==================================

        alert(
            "Music concert registration successful!"
        );

    }
);


// ==========================================
// CLEAR BUTTON
// ==========================================

document.getElementById("clearBtn")
    .addEventListener(
        "click",
        () => {


            // ==================================
            // RESET FORM
            // ==================================

            form.reset();


            // ==================================
            // CLEAR ERRORS
            // ==================================

            fields.forEach(id => {

                document.getElementById(
                    id + "Error"
                ).textContent = "";

            });


            // ==================================
            // CLEAR STORAGE
            // ==================================

            localStorage.removeItem(
                "concertDraft"
            );


            localStorage.removeItem(
                "lastConcertRegistration"
            );


            sessionStorage.removeItem(
                "concertDraft"
            );


            sessionStorage.removeItem(
                "currentConcertRegistration"
            );


            // ==================================
            // UPDATE STATUS
            // ==================================

            updateLocalStatus(
                "Local Storage cleared"
            );


            updateSessionStatus(
                "Session Storage cleared"
            );


            // ==================================
            // HIDE SUCCESS
            // ==================================

            document.getElementById(
                "successMessage"
            ).style.display = "none";

        }
    );
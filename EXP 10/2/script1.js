// ==========================================
// GET FORM
// ==========================================

const form =
    document.getElementById("workshopForm");


// ==========================================
// FORM FIELDS
// ==========================================

const fields = [
    "name",
    "email",
    "phone",
    "college",
    "workshop",
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
    // CHECK USER'S CHOICE
    // ======================================

    if (saveDraft.checked) {


        // ==================================
        // LOCAL STORAGE
        // Permanent draft
        // ==================================

        sessionStorage.removeItem(
            "workshopDraft"
        );


        localStorage.setItem(
            "workshopDraft",
            JSON.stringify(data)
        );


        updateLocalStatus(
            "✓ Draft saved to Local Storage"
        );


        updateSessionStatus(
            "No temporary draft"
        );

    }


    else {


        // ==================================
        // SESSION STORAGE
        // Temporary draft
        // ==================================

        localStorage.removeItem(
            "workshopDraft"
        );


        sessionStorage.setItem(
            "workshopDraft",
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
// PAGE LOAD EVENT
// ==========================================

window.addEventListener(
    "DOMContentLoaded",
    () => {


        

        sessionStorage.removeItem(
            "workshopDraft"
        );


        sessionStorage.removeItem(
            "currentWorkshopBooking"
        );


        // ==================================
        // CHECK LOCAL STORAGE
        // ==================================

        const permanentDraft =
            localStorage.getItem(
                "workshopDraft"
            );


        if (permanentDraft) {


            try {

                const data =
                    JSON.parse(permanentDraft);


                // Restore permanent draft

                fields.forEach(id => {

                    if (
                        data[id] !== undefined
                    ) {

                        document.getElementById(id).value =
                            data[id];

                    }

                });


                // Check the checkbox

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
    // COLLEGE
    // ======================================

    if (id === "college") {

        if (value === "") {

            message =
                "College / Institution is required.";

        }

        else if (value.length < 2) {

            message =
                "Enter a valid college name.";

        }

    }
    // ======================================
    // WORKSHOP
    // ======================================

    if (id === "workshop") {

        if (value === "") {

            message =
                "Please select a workshop.";

        }

    }
    // ======================================
    // TICKETS
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
            numberOfTickets > 5
        ) {

            message =
                "Tickets must be between 1 and 5.";

        }

    }
    // ======================================
    // DATE
    // ======================================

    if (id === "date") {


        if (value === "") {

            message =
                "Please select a workshop date.";

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
                    "Workshop date cannot be in the past.";

            }

        }

    }
    // ======================================
    // DISPLAY ERROR
    // ======================================

    error.textContent =
        message;


    // ======================================
    // RETURN RESULT
    // ======================================

    return message === "";

}


// ==========================================
// BLUR + CHANGE EVENTS
// ==========================================

fields.forEach(id => {


    const element =
        document.getElementById(id);
    // ======================================
    // BLUR EVENT
    // ======================================

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


        // Prevent normal submission

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
        // GET BOOKING DATA
        // ==================================

        const booking =
            getFormData();


        // ==================================
        // SAVE COMPLETED BOOKING
        // BASED ON USER'S CHOICE
        // ==================================

        if (saveDraft.checked) {


            // ==================================
            // LOCAL STORAGE
            // ==================================

            localStorage.setItem(
                "lastWorkshopBooking",
                JSON.stringify(booking)
            );


            updateLocalStatus(
                "✓ Booking saved to Local Storage"
            );


            // Remove temporary booking

            sessionStorage.removeItem(
                "currentWorkshopBooking"
            );


            updateSessionStatus(
                "No temporary booking"
            );

        }


        else {


            // ==================================
            // SESSION STORAGE
            // ==================================

            sessionStorage.setItem(
                "currentWorkshopBooking",
                JSON.stringify(booking)
            );


            updateSessionStatus(
                "✓ Booking saved to Session Storage"
            );


            // Remove permanent booking

            localStorage.removeItem(
                "lastWorkshopBooking"
            );


            updateLocalStatus(
                "No permanent booking"
            );

        }


        // ==================================
        // REMOVE DRAFT
        // ==================================

        sessionStorage.removeItem(
            "workshopDraft"
        );


        localStorage.removeItem(
            "workshopDraft"
        );


        // ==================================
        // SUCCESS MESSAGE
        // ==================================

        const success =
            document.getElementById(
                "successMessage"
            );


        success.textContent =
            "Ticket booked successfully! Your workshop registration has been saved.";


        success.style.display =
            "block";


        // ==================================
        // ALERT
        // ==================================

        alert(
            "Technical Workshop ticket booked successfully!"
        );

    }
);


// ==========================================
// CLEAR BUTTON EVENT
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
            // CLEAR LOCAL STORAGE
            // ==================================

            localStorage.removeItem(
                "workshopDraft"
            );


            localStorage.removeItem(
                "lastWorkshopBooking"
            );


            // ==================================
            // CLEAR SESSION STORAGE
            // ==================================

            sessionStorage.removeItem(
                "workshopDraft"
            );


            sessionStorage.removeItem(
                "currentWorkshopBooking"
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
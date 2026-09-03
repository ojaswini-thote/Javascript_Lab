function processText() {

    let text = document.getElementById("inputText").value.trim();

   
    // CHECK EMPTY INPUT

    if (text === "") {
        alert("Please enter some text.");
        return;
    }

    // REGULAR EXPRESSIONS

    // Email
    let emailRegex =
        /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;


    // PRN / Roll Number

    let rollRegex =
        /\b\d{11}\b/;


    // Labeled phone number
    let phoneLabelRegex =
        /(?:phone\s*(?:number|no)?|mobile\s*(?:number|no)?)\s*(?:is|:|-)?\s*(\d+)/i;


    // Labeled PRN / Roll Number
    let rollLabelRegex =
        /(?:roll\s*(?:number|no)?|prn)\s*(?:is|:|-)?\s*(\d+)/i;


    // EXTRACT EMAIL

    let emailMatch = text.match(emailRegex);

    let email = emailMatch
        ? emailMatch[0]
        : "Not Found";

    // EXTRACT PRN / ROLL NUMBER

    let rollMatch = text.match(rollLabelRegex);

    let rollNumber = "Not Found";

    if (rollMatch) {

        rollNumber = rollMatch[1];

    } else {

        let numberMatch = text.match(rollRegex);

        if (numberMatch) {
            rollNumber = numberMatch[0];
        }
    }
    // EXTRACT PHONE NUMBER


    let phoneMatch = text.match(phoneLabelRegex);

    let phone = "Not Found";

    if (phoneMatch) {

        phone = phoneMatch[1];

    } else {

        // If phone is not labelled,
        // find numbers other than PRN/Roll Number

        let numbers = text.match(/\b\d+\b/g) || [];

        for (let num of numbers) {

            if (num !== rollNumber) {

                phone = num;
                break;
            }
        }
    }


    // EXTRACT STUDENT NAME


    let studentName = "Not Found";

  

    let nameMatch = text.match(
        /(?:my\s+name\s+is|student\s+name\s*(?:is|:|-)?|name\s*(?:is|:|-))\s*([A-Za-z]+(?:\s+[A-Za-z]+)*?)(?=[.,;!?]|\s+(?:I|my|and|am|is|PRN|roll|phone|mobile|email|department)\b|$)/i
    );

    if (nameMatch) {

        studentName = nameMatch[1]
            .trim()
            .replace(/[.,;!?]+$/, "");
    }

    // EXTRACT DEPARTMENT

    let department = "Not Found";


    /*
        Handles:

        I am from Computer Science department.
        I am from Mechanical department.
        I am from Information Technology department.
        I am in Electronics and Communication department.
    */

    let deptMatch = text.match(
        /\b(?:from|in|of)\s+([A-Za-z]+(?:\s+[A-Za-z]+)*?)\s+department\b/i
    );

    if (deptMatch) {

        department = deptMatch[1].trim();

    } else {

        /*
            Handles:

            Department: Mechanical
            Department - Computer Science
        */

        let deptLabelMatch = text.match(
            /\bdepartment\s*[:\-]\s*([A-Za-z]+(?:\s+[A-Za-z]+)*?)(?=[.,;!?]|\s+(?:PRN|roll|phone|mobile|email|my|and|is|are)\b|$)/i
        );

        if (deptLabelMatch) {

            department = deptLabelMatch[1]
                .trim()
                .replace(/[.,;!?]+$/, "");
        }
    }


    // ==========================================
    // VALIDATE EMAIL
    // ==========================================

    let emailValid =
        email !== "Not Found" &&
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);


    // ==========================================
    // VALIDATE PHONE
    // ==========================================

    // Exactly 10 digits
    let phoneValid =
        phone !== "Not Found" &&
        /^\d{10}$/.test(phone);


    // ==========================================
    // PHONE WARNING
    // ==========================================

    let phoneWarning = "";

    if (phone === "Not Found") {

        phoneWarning =
            "WARNING: Phone number not found.";

    } else if (phone.length < 10) {

        phoneWarning =
            "WARNING: Phone number must contain exactly 10 digits. " +
            "You entered only " +
            phone.length +
            " digits.";

    } else if (phone.length > 10) {

        phoneWarning =
            "WARNING: Phone number must contain exactly 10 digits. " +
            "You entered " +
            phone.length +
            " digits.";
    }


    // ==========================================
    // COUNT WORDS
    // ==========================================

    let wordCount =
        text.split(/\s+/).filter(word => word !== "").length;


    // ==========================================
    // COUNT CHARACTERS
    // EXCLUDING SPACES
    // ==========================================

    let characterCount =
        text.replace(/\s/g, "").length;


    // ==========================================
    // CONVERT TEXT TO LOWERCASE
    // ==========================================

    let lowerText =
        text.toLowerCase();


    // ==========================================
    // REPLACE COMPUTER SCIENCE
    // WITH INFORMATION TECHNOLOGY
    // ==========================================

    /*
        IMPORTANT:
        This changes ONLY the Modified Text.
        The extracted Department remains
        "Computer Science".
    */

    let modifiedText =
        text.replace(
            /computer\s+science/gi,
            "Information Technology"
        );
document.getElementById("modifiedText").textContent =
    modifiedText;

    // ==========================================
    // DISPLAY EXTRACTED INFORMATION
    // ==========================================

    document.getElementById("studentName").textContent =
        studentName;

    document.getElementById("rollNumber").textContent =
        rollNumber;

    document.getElementById("email").textContent =
        email;

    document.getElementById("phone").textContent =
        phone;

    document.getElementById("department").textContent =
        department;


    // ==========================================
    // DISPLAY EMAIL VALIDATION
    // ==========================================

    let emailValidation =
        document.getElementById("emailValidation");

    emailValidation.textContent =
        emailValid ? "Valid" : "Invalid";

    emailValidation.className =
        emailValid ? "valid" : "invalid";


    // ==========================================
    // DISPLAY PHONE VALIDATION
    // ==========================================

    let phoneValidation =
        document.getElementById("phoneValidation");

    phoneValidation.textContent =
        phoneValid ? "Valid" : "Invalid";

    phoneValidation.className =
        phoneValid ? "valid" : "invalid";


    // ==========================================
    // DISPLAY PHONE WARNING
    // ==========================================

    let warningElement =
        document.getElementById("phoneWarning");

    if (phoneValid) {

        warningElement.textContent = "";
        warningElement.style.display = "none";

    } else {

        warningElement.textContent = phoneWarning;
        warningElement.style.display = "block";
    }


    // ==========================================
    // DISPLAY STATISTICS
    // ==========================================

    document.getElementById("wordCount").textContent =
        wordCount;

    document.getElementById("characterCount").textContent =
        characterCount;


    // ==========================================
    // DISPLAY LOWERCASE TEXT
    // ==========================================

    document.getElementById("lowerText").textContent =
        lowerText;


    // ==========================================
    // DISPLAY MODIFIED TEXT
    // ==========================================

    document.getElementById("modifiedText").textContent =
        modifiedText;


    // ==========================================
    // POPUP ONLY FOR INVALID PHONE
    // ==========================================

    if (!phoneValid) {

        alert(phoneWarning);
    }
}
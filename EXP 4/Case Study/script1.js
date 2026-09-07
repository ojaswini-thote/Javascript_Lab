function validateRegistration() {

    const regNumber = document.getElementById("regNumber").value.trim();
    const result = document.getElementById("result");

    try {
        if (regNumber === "") {
            throw new Error("Registration number cannot be empty.");
        }

        if (regNumber.length !== 10) {
            throw new Error("Registration number must be exactly 10 characters.");
        }

        if (!/^[A-Z]{2}$/.test(regNumber.substring(0, 2))) {
            throw new Error("First 2 characters must be uppercase alphabets.");
        }

        if (!/^[0-9]{2}$/.test(regNumber.substring(2, 4))) {
            throw new Error("Characters 3 and 4 must be digits.");
        }

        if (!/^[A-Z]{2}$/.test(regNumber.substring(4, 6))) {
            throw new Error("Characters 5 and 6 must be uppercase alphabets.");
        }

        if (!/^[0-9]{4}$/.test(regNumber.substring(6, 10))) {
            throw new Error("Last 4 characters must be digits.");
        }

        result.innerHTML = "Valid Registration Number";
result.className = "valid";

} catch (error) {

    result.innerHTML = "Invalid: " + error.message;
    result.className = "invalid";

}
}
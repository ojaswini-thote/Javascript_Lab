// Function Declaration
function reverseString(str) {
    return str.split("").reverse().join("");
}


// Closure Example
function message() {

    var msg = "Palindrome Checker";

    function display() {
        return msg;
    }

    return display;
}


// Palindrome Checker
function checkPalindrome() {

    try {

        // Get input
        var word = document.getElementById("word").value.trim();


        // Check empty input
        if (word === "") {
            throw "Please enter a word.";
        }


        // Check only alphabets
        if (!/^[a-zA-Z]+$/.test(word)) {
            throw "Only alphabets are allowed.";
        }


        // Minimum 3 characters
        if (word.length < 3) {
            throw "Word must contain at least 3 alphabets.";
        }


        // Maximum 20 characters
        if (word.length > 20) {
            throw "Word must contain maximum 20 alphabets.";
        }


        // Convert input to lowercase
        let input = word.toLowerCase();


        // Reverse the input
        var reversed = reverseString(input);


        // Check palindrome
        if (input === reversed) {

            document.getElementById("result").innerHTML =
                "✓ " + word + " is a Palindrome!";

        } else {

            document.getElementById("result").innerHTML =
                "✗ " + word + " is not a Palindrome!";
        }

    }

    catch (error) {

        // Show validation warning as popup
        alert(error);

    }
}
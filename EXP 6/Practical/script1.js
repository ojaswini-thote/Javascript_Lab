function processString() {

    let paragraph = document.getElementById("paragraph").value;
    let email = document.getElementById("email").value;

    // 1. split() - Split paragraph into words
    let words = paragraph.trim().split(/\s+/);

    // 2. match() - Find all the vowels
    let vowels = paragraph.match(/[aeiou]/gi);
    let vowelCount = vowels ? vowels.length : 0;

    // 3. Regular Expression - Email Validation
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let emailResult;

    if (emailRegex.test(email)) {
        emailResult = "Valid email address";
    } else {
        emailResult = "Invalid email address";
    }

    // 4. Reverse the paragraph
    let reversedParagraph = paragraph.split("").reverse().join("");

    // 5. Display results
    document.getElementById("result").innerHTML = `
        <p>
            <strong>1. Words:</strong><br>
            ${words.join(", ")}
        </p>

        <p>
            <strong>2. Vowels:</strong>
            ${vowels ? vowels.join(", ") : "No vowels found"}
            <br>
            <strong>Vowel Count:</strong> ${vowelCount}
        </p>

        <p>
            <strong>3. Email Validation:</strong>
            ${emailResult}
        </p>

        <p>
            <strong>4. Reversed Paragraph:</strong><br>
            ${reversedParagraph}
        </p>
    `;
}
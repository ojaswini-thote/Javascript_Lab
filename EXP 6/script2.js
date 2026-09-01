document.getElementById("processButton").addEventListener("click", processString);

function processString() {

    let paragraph = document.getElementById("paragraph").value.trim();

    // Check for empty input
    if (paragraph === "") {

        document.getElementById("result").innerHTML = `
            <div class="result-card">
                <strong>Please enter a string or paragraph.</strong>
            </div>
        `;

        return;
    }

    // 1. Reverse the string
    let reversedString = paragraph.split("").reverse().join("");

    // 2. Count words
    let words = paragraph.split(/\s+/);
    let wordCount = words.length;

    // 3. Find vowels
    let vowels = paragraph.match(/[aeiou]/gi);
    let vowelCount = vowels ? vowels.length : 0;

    // Display results
    document.getElementById("result").innerHTML = `

        <div class="result-card">
            <strong>1. Reversed String</strong>
            <div class="result-value">
                ${reversedString}
            </div>
        </div>

        <div class="result-card">
            <strong>2. Number of Words</strong>
            <div class="result-value">
                ${wordCount}
            </div>
        </div>

        <div class="result-card">
            <strong>3. Number of Vowels</strong>
            <div class="result-value">
                ${vowelCount}
            </div>
        </div>

        <div class="result-card">
            <strong>4. Vowels Found</strong>
            <div class="result-value">
                ${vowels ? vowels.join(", ") : "No vowels found"}
            </div>
        </div>
    `;
}
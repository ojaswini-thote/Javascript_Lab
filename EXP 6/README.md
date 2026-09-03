# Experiment No. 6

**Student Name:** Ojaswini Thote  
**PRN:** 24070521048  

---

## Experiment Title

**Use String Functions and Regular Expressions for Email Validation, Data Extraction, and Text Analysis**

---

## Software / Tools Required

1. Visual Studio Code
2. Google Chrome
3. HTML5
4. JavaScript (ES6)

---

# Practical — Email Validation, Data Extraction and Text Analysis

## Aim

To use JavaScript string functions and regular expressions for email validation, data extraction, and text analysis.

---

## File Path

`EXP 6/Practical/index.html`  
`EXP 6/Practical/script.js`

---

## Program Code

### `EXP 6/Practical/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>String Functions and Regex</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #ffe6f2;
            padding: 30px;
        }

        .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        h1 {
            text-align: center;
        }

        h2 {
            margin-top: 30px;
        }

        input, textarea {
            width: 100%;
            padding: 10px;
            margin-top: 8px;
            border: 1px solid #ccc;
            border-radius: 6px;
            box-sizing: border-box;
        }

        button {
            margin-top: 10px;
            padding: 10px 20px;
            background: #d63384;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }

        .result {
            margin-top: 15px;
            padding: 15px;
            background: #fff0f6;
            border-radius: 8px;
        }
    </style>
</head>

<body>

<div class="container">

    <h1>String Functions and Regex</h1>

    <h2>1. Email Validation</h2>

    <input type="text" id="email" placeholder="Enter your email">

    <button onclick="validateEmail()">
        Validate Email
    </button>

    <div class="result" id="emailResult"></div>


    <h2>2. Data Extraction</h2>

    <textarea
        id="data"
        rows="4"
        placeholder="Enter text containing numbers">
    </textarea>

    <button onclick="extractData()">
        Extract Numbers
    </button>

    <div class="result" id="dataResult"></div>


    <h2>3. Text Analysis</h2>

    <textarea
        id="text"
        rows="5"
        placeholder="Enter text for analysis">
    </textarea>

    <button onclick="analyzeText()">
        Analyze Text
    </button>

    <div class="result" id="textResult"></div>

</div>

<script src="script.js"></script>

</body>
</html>
```

---

### `EXP 6/Practical/script.js`

```javascript
// Email Validation using Regular Expression

function validateEmail() {

    let email = document.getElementById("email").value.trim();

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let result =
        document.getElementById("emailResult");

    if (emailPattern.test(email)) {

        result.innerHTML =
            "<b>Valid Email Address</b>";

    } else {

        result.innerHTML =
            "<b>Invalid Email Address</b>";
    }
}


// Data Extraction using Regular Expression

function extractData() {

    let data =
        document.getElementById("data").value;

    let numbers =
        data.match(/\d+/g);

    let result =
        document.getElementById("dataResult");

    if (numbers) {

        result.innerHTML =
            "<b>Extracted Numbers:</b> " +
            numbers.join(", ");

    } else {

        result.innerHTML =
            "No numbers found.";
    }
}


// Text Analysis using String Functions

function analyzeText() {

    let text =
        document.getElementById("text").value.trim();

    let result =
        document.getElementById("textResult");

    let characters =
        text.length;

    let words =
        text === ""
            ? 0
            : text.split(/\s+/).length;

    let uppercase =
        text.toUpperCase();

    let lowercase =
        text.toLowerCase();

    result.innerHTML = `
        <b>Number of Characters:</b> ${characters}<br>
        <b>Number of Words:</b> ${words}<br>
        <b>Uppercase:</b> ${uppercase}<br>
        <b>Lowercase:</b> ${lowercase}
    `;
}
```

---

## String Functions and Regex Used

| Function / Regex | Purpose |
|---|---|
| `trim()` | Removes extra spaces from the beginning and end |
| `length` | Finds the number of characters |
| `split()` | Splits text into words |
| `toUpperCase()` | Converts text to uppercase |
| `toLowerCase()` | Converts text to lowercase |
| `test()` | Tests whether an email matches the regex pattern |
| `match()` | Extracts matching data from text |
| `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | Validates email format |
| `/\d+/g` | Extracts numbers from text |

---

## Output

The program performs the following operations:

- Validates whether the entered email address is valid or invalid.
- Extracts numbers from the given text using regular expressions.
- Counts the number of characters and words.
- Converts the text into uppercase and lowercase.

---

## Screenshot


```markdown
![Practical Output](Practical/61.png)
```

---

# Case Study — Email Validation and Vowel Count

## Aim

To use JavaScript string functions and regular expressions for email validation and counting vowels in a given text.

---

## File Path

`EXP 6/Case Study/index.html`  
`EXP 6/Case Study/script.js`

---

## Program Code

### `EXP 6/Case Study/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Email Validation and Vowel Count</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f0f4ff;
            padding: 30px;
        }

        .container {
            max-width: 700px;
            margin: auto;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        h1 {
            text-align: center;
        }

        input, textarea {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 6px;
        }

        button {
            margin-top: 10px;
            padding: 10px 20px;
            background: #4f46e5;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }

        .result {
            margin-top: 15px;
            padding: 15px;
            background: #eef2ff;
            border-radius: 8px;
        }
    </style>
</head>

<body>

<div class="container">

    <h1>Email Validation and Vowel Count</h1>


    <h2>Email Validation</h2>

    <input
        type="text"
        id="email"
        placeholder="Enter your email address"
    >

    <button onclick="checkEmail()">
        Validate Email
    </button>

    <div class="result" id="emailResult"></div>


    <h2>Vowel Count</h2>

    <textarea
        id="text"
        rows="5"
        placeholder="Enter text here">
    </textarea>

    <button onclick="countVowels()">
        Count Vowels
    </button>

    <div class="result" id="vowelResult"></div>


    <hr>

    <p>
        <b>Name:</b> Ojaswini Thote
        &nbsp; | &nbsp;
        <b>PRN:</b> 24070521048
    </p>

</div>

<script src="script.js"></script>

</body>
</html>
```

---

### `EXP 6/Case Study/script.js`

```javascript
// Email Validation

function checkEmail() {

    let email =
        document.getElementById("email").value.trim();

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let result =
        document.getElementById("emailResult");


    if (emailPattern.test(email)) {

        result.innerHTML =
            "<b>Valid Email Address</b>";

    } else {

        result.innerHTML =
            "<b>Invalid Email Address</b>";
    }
}


// Vowel Count using Regular Expression

function countVowels() {

    let text =
        document.getElementById("text").value;

    let vowels =
        text.match(/[aeiou]/gi);

    let count =
        vowels ? vowels.length : 0;


    document.getElementById(
        "vowelResult"
    ).innerHTML =
        "<b>Total Number of Vowels:</b> " +
        count;
}
```

---

## String Functions and Regex Used

| Function / Regex | Purpose |
|---|---|
| `trim()` | Removes unnecessary spaces |
| `test()` | Checks whether the email matches the regex pattern |
| `match()` | Finds vowels in the entered text |
| `length` | Counts the number of matched vowels |
| `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | Validates email format |
| `/[aeiou]/gi` | Finds all vowels, ignoring case |

---

## Output

The Case Study performs the following operations:

1. Validates the email address entered by the user.
2. Displays whether the email is valid or invalid.
3. Accepts a text input from the user.
4. Counts the total number of vowels in the text.
5. Displays the vowel count dynamically.

---

## Screenshot


```markdown
![Case Study Output](Case%20Study/62.png)
```

---

# Result / Conclusion

The experiment was completed successfully.

The Practical demonstrated the use of JavaScript string functions and regular expressions for **email validation, data extraction, and text analysis**. Functions such as `trim()`, `split()`, `toUpperCase()`, `toLowerCase()`, `match()`, and `test()` were used.

The Case Study demonstrated the practical use of **regular expressions for email validation and vowel counting**. The program successfully validated user email addresses and counted vowels from the given text.

Thus, the experiment successfully demonstrated the use of **String Functions and Regular Expressions in JavaScript**.

---

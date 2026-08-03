# Experiment No. 3

**Student Name:** Ojaswini Thote
**PRN:** *24070521048*

**File Path:** `file:///Users/ojaswinithote/Desktop/Javascript/EXP%203/index.html` | `file:///Users/ojaswinithote/Desktop/Javascript/EXP%203/index1.html` | `file:///Users/ojaswinithote/Desktop/Javascript/EXP%203/index.html2` 

---

# Experiment Title

**Implementation of Control Structures and Form Validation; Development of a Student Grading System and Password Validation Web Application using JavaScript**

---

# Software / Tools Required

* Visual Studio Code
* Google Chrome
* HTML5
* CSS3
* JavaScript (ES6)

---

# Experiment Program Code

## Task 1 — Student Grading System (`index.html` + `script.js`)

#### `Task 1/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Grading System</title>

    <style>
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family: "Segoe UI", sans-serif;
        }

        body{
            min-height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            background:linear-gradient(135deg, #F5F1EA, #E8E2D8);
        }

        .container{
            width:450px;
            background:#fff;
            padding:35px;
            border-radius:20px;
            box-shadow:0 10px 25px rgba(0,0,0,0.1);
            border:1px solid #D6CEC2;
        }

        h2{
            text-align:center;
            color:#5C5248;
            margin-bottom:25px;
        }

        label{
            display:block;
            margin-bottom:8px;
            font-weight:600;
            color:#6B6258;
        }

        input[type="text"],
        input[type="number"]{
            width:100%;
            padding:12px;
            margin-bottom:18px;
            border:1px solid #D8D2C8;
            border-radius:10px;
            background:#FAF8F5;
            font-size:15px;
        }

        input:focus{
            outline:none;
            border-color:#A99985;
        }

        .radio-group{
            display:flex;
            gap:15px;
            margin-bottom:20px;
            flex-wrap:wrap;
        }

        .radio-group label{
            font-weight:normal;
            color:#4A423A;
        }

        input[type="button"]{
            width:100%;
            padding:13px;
            border:none;
            border-radius:10px;
            background:#8B7D6B;
            color:white;
            font-size:16px;
            cursor:pointer;
            transition:0.3s;
        }

        input[type="button"]:hover{
            background:#746658;
        }

        .result-box{
            margin-top:25px;
            background:#F7F4EF;
            padding:15px;
            border-radius:10px;
            border-left:5px solid #8B7D6B;
        }

        .result-box h3{
            color:#5C5248;
            margin-bottom:10px;
        }

        #result{
            line-height:1.8;
            color:#4A423A;
        }
    </style>
</head>
<body>

    <div class="container">

        <h2>🎓 Student Grading System</h2>

        <label>Student Name</label>
        <input type="text" id="name" placeholder="Enter your name">

        <label>Roll Number</label>
        <input type="text" id="roll" placeholder="Enter roll number">

        <label>Subject Name</label>
        <input type="text" id="subject" placeholder="Enter subject name">

        <label>Semester</label>

<div class="radio-group">

    <label>
        <input type="radio" name="semester" value="Semester 1">
        Semester 1
    </label>

    <label>
        <input type="radio" name="semester" value="Semester 2">
        Semester 2
    </label>

    <label>
        <input type="radio" name="semester" value="Semester 3">
        Semester 3
    </label>

    <label>
        <input type="radio" name="semester" value="Semester 4">
        Semester 4
    </label>

    <label>
        <input type="radio" name="semester" value="Semester 5">
        Semester 5
    </label>

    <label>
        <input type="radio" name="semester" value="Semester 6">
        Semester 6
    </label>

</div>

        <label>Marks</label>
        <input type="number" id="marks" placeholder="Enter marks (0-100)">

        <input type="button"
               value="Calculate Grade"
               onclick="gradeSystem()">

        <div class="result-box">
            <h3>Result</h3>
            <p id="result">Student details will appear here.</p>
        </div>

    </div>

    <script src="script.js"></script>

</body>
</html>
```

#### `Task 1/script.js`
```js
function gradeSystem() {

    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var subject = document.getElementById("subject").value;
    var marks = parseInt(document.getElementById("marks").value);

    var semester = document.querySelector(
        'input[name="semester"]:checked'
    );

    // Validation

    if (name == "") {
        alert("Please enter the student name!");
        return;
    }

    if (roll == "") {
        alert("Please enter the roll number!");
        return;
    }

    if (subject == "") {
        alert("Please enter the subject name!");
        return;
    }

    if (semester == null) {
        alert("Please select a semester!");
        return;
    }

    if (isNaN(marks)) {
        alert("Please enter the marks!");
        return;
    }

    if (marks < 0 || marks > 100) {
        alert("Marks should be between 0 and 100!");
        return;
    }

    // Grade Calculation

    var grade;

    if (marks >= 50 && marks <= 65) {
        grade = "C";
    }
    else if (marks >= 66 && marks <= 80) {
        grade = "B";
    }
    else if (marks > 80 && marks <= 90) {
        grade = "A";
    }
    else if (marks > 90) {
        grade = "A+";
    }
    else {
        grade = "Fail";
    }

    // Display Result

    document.getElementById("result").innerHTML =
        "<strong>Student Name:</strong> " + name +
        "<br><strong>Roll Number:</strong> " + roll +
        "<br><strong>Subject Name:</strong> " + subject +
        "<br><strong>Semester:</strong> " + semester.value +
        "<br><strong>Marks:</strong> " + marks +
        "<br><strong>Grade:</strong> " + grade;

    // Success Message

    alert("Result generated successfully!");
}
```
This application accepts student academic details and calculates the final grade based on the marks entered by the user.

**Features:**

* Student Name
* Roll Number
* Subject Name
* Semester Selection
* Marks Entry
* Grade Calculation
* Pass/Fail Result
* Input Validation using Control Structures

The application uses JavaScript `if-else-if` statements to assign grades and validate the entered marks before displaying the result.

---

## Task 2 — Password Validation System (`index1.html` + `script1.js`)

#### `Task 2/index1.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Login Portal</title>

    <style>

        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family:"Segoe UI",sans-serif;
        }

        body{
            min-height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            background:linear-gradient(135deg,#F5F1EA,#E8E2D8);
            padding:20px;
        }

        .box{
            width:500px;
            max-width:90%;
            background:#FFFFFF;
            padding:35px;
            border-radius:20px;
            border:1px solid #D6CEC2;
            box-shadow:0 10px 25px rgba(0,0,0,0.1);
        }

        h1{
            text-align:center;
            color:#5C5248;
            margin-bottom:5px;
        }

        h2{
            text-align:center;
            color:#8B7D6B;
            margin-bottom:25px;
            font-size:18px;
            font-weight:400;
        }

        label{
            display:block;
            margin-bottom:8px;
            color:#6B6258;
            font-weight:600;
        }

        input[type="text"],
        input[type="password"],
        input[type="number"]{
            width:100%;
            padding:12px;
            margin-bottom:15px;
            border:1px solid #D8D2C8;
            border-radius:10px;
            background:#FAF8F5;
            font-size:15px;
        }

        input:focus{
            outline:none;
            border-color:#A99985;
        }

        .radio-group{
            display:flex;
            gap:20px;
            margin-bottom:20px;
            flex-wrap:wrap;
        }

        .requirements{
            background:#F7F4EF;
            padding:15px;
            border-radius:10px;
            border-left:5px solid #8B7D6B;
            margin-bottom:20px;
            color:#4A423A;
        }

        .requirements ul{
            margin-left:20px;
            margin-top:8px;
        }

        .requirements li{
            margin-bottom:4px;
        }

        button{
            width:100%;
            padding:13px;
            border:none;
            border-radius:10px;
            background:#8B7D6B;
            color:white;
            font-size:16px;
            cursor:pointer;
            transition:0.3s;
        }

        button:hover{
            background:#746658;
        }

        #output{
            margin-top:20px;
            padding:15px;
            border-radius:10px;
            background:#F7F4EF;
            border-left:5px solid #8B7D6B;
            color:#4A423A;
        }

    </style>
</head>

<body>

<div class="box">

    <h1>🔐 User Login Portal</h1>
    <h2>Student Registration Form</h2>

    <label>Full Name</label>
    <input type="text"
           id="name"
           placeholder="Enter your full name">

    <label>Email Address</label>
    <input type="text"
           id="email"
           placeholder="Enter your email">

    <label>Phone Number</label>
    <input type="number"
           id="phone"
           placeholder="Enter 10-digit phone number">

    <label>City</label>
    <input type="text"
           id="city"
           placeholder="Enter your city">

    <label>Gender</label>

    <div class="radio-group">
        <label>
            <input type="radio"
                   name="gender"
                   value="Male">
            Male
        </label>

        <label>
            <input type="radio"
                   name="gender"
                   value="Female">
            Female
        </label>

        <label>
            <input type="radio"
                   name="gender"
                   value="Other">
            Other
        </label>
    </div>

    <label>Role</label>

    <div class="radio-group">
        <label>
            <input type="radio"
                   name="role"
                   value="Student"
                   checked>
            Student
        </label>

        <label>
            <input type="radio"
                   name="role"
                   value="Faculty">
            Faculty
        </label>

        <label>
            <input type="radio"
                   name="role"
                   value="Admin">
            Admin
        </label>
    </div>

    <label>Password</label>
    <input type="password"
           id="password"
           placeholder="Enter Password">

    <div class="requirements">
        <strong>Password Requirements:</strong>

        <ul>
            <li>Minimum 8 characters</li>
            <li>At least 1 uppercase letter</li>
            <li>At least 1 lowercase letter</li>
            <li>At least 1 number</li>
            <li>At least 1 special character</li>
        </ul>
    </div>

    <label>Confirm Password</label>
    <input type="password"
           id="confirmPassword"
           placeholder="Confirm Password">

    <button onclick="login()">
        Login
    </button>

    <div id="output">
        Login status will appear here.
    </div>

</div>

<script src="script1.js"></script>

</body>
</html>
```

#### `Task 2/script1.js`
```js
function login() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let city = document.getElementById("city").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    // Name Validation
    if (!/^[A-Za-z ]+$/.test(name)) {
        alert(
            "Name should contain only alphabets and spaces."
        );
        return;
    }

    // Email Validation
    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone Validation
    let phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phone)) {
        alert(
            "Phone number must contain exactly 10 digits."
        );
        return;
    }

    // City Validation
    if (city === "") {
        alert("Please enter your city.");
        return;
    }

    // Gender Validation
    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    // Password Validation
    // Minimum 8 characters
    // One uppercase letter
    // One lowercase letter
    // One number
    // One special character

    let passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordPattern.test(password)) {

        alert(
            "Password must contain:\n\n" +
            "• Minimum 8 characters\n" +
            "• One uppercase letter\n" +
            "• One lowercase letter\n" +
            "• One number\n" +
            "• One special character"
        );

        return;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Success Message
    document.getElementById("output").innerHTML = `
        <strong>Login Successful!</strong><br>
        Welcome, ${name}!<br>
        Redirecting to Student Grading System...
    `;

    // Redirect after 1.5 seconds
    setTimeout(function () {
        window.location.href = "index2.html";
    }, 1500);
}
```
This webpage demonstrates form validation by allowing users to register through a login portal.

**Features:**

* Full Name
* Email Address
* Phone Number
* City
* Gender Selection
* User Role Selection
* Password & Confirm Password
* Password Strength Validation
* Login Status Display

The password validation checks for:

* Minimum 8 characters
* Uppercase letter
* Lowercase letter
* Numeric digit
* Special character
* Password confirmation

---

## Task 3 — Student Grading Portal (`index2.html` + `script2.js`)

#### `Task 3/index2.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Grading Portal</title>

    <style>
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family:"Segoe UI",sans-serif;
        }

        body{
            min-height:100vh;
            background:linear-gradient(135deg,#F5F1EA,#E8E2D8);
            padding:30px;
        }

        .container{
            max-width:900px;
            margin:auto;
            background:white;
            border-radius:20px;
            padding:40px;
            box-shadow:0 10px 25px rgba(0,0,0,0.1);
        }

        h1{
            text-align:center;
            color:#5C5248;
            margin-bottom:30px;
        }

        h3{
            color:#8B7D6B;
            margin-bottom:15px;
            border-bottom:2px solid #E8E2D8;
            padding-bottom:5px;
        }

        .grid{
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:20px;
        }

        label{
            display:block;
            margin-bottom:8px;
            font-weight:600;
            color:#6B6258;
        }

        input,select{
            width:100%;
            padding:12px;
            border:1px solid #D8D2C8;
            border-radius:10px;
            background:#FAF8F5;
            margin-bottom:15px;
        }

        .semester{
            display:flex;
            gap:15px;
            flex-wrap:wrap;
            margin-bottom:20px;
        }

        button{
            width:100%;
            padding:15px;
            border:none;
            border-radius:10px;
            background:#8B7D6B;
            color:white;
            font-size:16px;
            cursor:pointer;
            margin-top:15px;
        }

        button:hover{
            background:#746658;
        }

        .result{
            margin-top:30px;
            padding:20px;
            background:#F7F4EF;
            border-left:5px solid #8B7D6B;
            border-radius:10px;
            line-height:2;
        }
    </style>
</head>
<body>

<div class="container">

    <h1>🎓 Student Grading Portal</h1>

    <h3>Student Information</h3>

    <div class="grid">

        <div>
            <label>Student Name</label>
            <input type="text" id="name">
        </div>

        <div>
            <label>Roll Number</label>
            <input type="text" id="roll">
        </div>

        <div>
            <label>Department</label>
            <select id="department">
                <option>Computer Science</option>
                <option>Information Technology</option>
                <option>Electronics</option>
            </select>
        </div>

        <div>
            <label>Academic Year</label>
            <select id="year">
                <option>2024-25</option>
                <option>2025-26</option>
                <option>2026-27</option>
            </select>
        </div>

    </div>

    <label>Semester</label>

    <div class="semester">
        <label>
    <input type="radio" name="semester" value="Semester 1">
    Semester 1
</label>

<label>
    <input type="radio" name="semester" value="Semester 2">
    Semester 2
</label>

<label>
    <input type="radio" name="semester" value="Semester 3">
    Semester 3
</label>

<label>
    <input type="radio" name="semester" value="Semester 4">
    Semester 4
</label>

<label>
    <input type="radio" name="semester" value="Semester 5">
    Semester 5
</label>

<label>
    <input type="radio" name="semester" value="Semester 6">
    Semester 6
</label>
    </div>

    <h3>Academic Details</h3>

    <div class="grid">

        <div>
            <label>Subject</label>
            <select id="subject">
                <option>JavaScript</option>
                <option>Computer Networks</option>
                <option>Compiler Construction</option>
                <option>Data Compression</option>
                <option>Data Mining</option>
            </select>
        </div>

        <div>
            <label>Maximum Marks</label>
            <input type="number" id="maxMarks">
        </div>

        <div>
            <label>Obtained Marks</label>
            <input type="number" id="marks">
        </div>

        <div>
            <label>Internal Marks</label>
            <input type="number" id="internal">
        </div>

        <div>
            <label>Practical Marks</label>
            <input type="number" id="practical">
        </div>

        <div>
            <label>Attendance (%)</label>
            <input type="number" id="attendance">
        </div>

    </div>

    <button onclick="gradeSystem()">
        Generate Result
    </button>

    <button onclick="window.print()">
        Print Result
    </button>

    <div class="result">
        <h3>Result</h3>
        <p id="result">Student result will appear here.</p>
    </div>

</div>

<script src="script2.js"></script>

</body>
</html>
```
#### `Task 3/script2.js`
```js
function gradeSystem() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let department =
        document.getElementById("department").value;
    let year =
        document.getElementById("year").value;
    let subject =
        document.getElementById("subject").value;

    let maxMarks =
        Number(document.getElementById("maxMarks").value);

    let marks =
        Number(document.getElementById("marks").value);

    let internal =
        Number(document.getElementById("internal").value);

    let practical =
        Number(document.getElementById("practical").value);

    let attendance =
        Number(document.getElementById("attendance").value);

    let semester = document.querySelector(
        'input[name="semester"]:checked'
    );

    if (
        name === "" ||
        roll === "" ||
        !semester
    ) {
        alert("Please fill all mandatory fields.");
        return;
    }

    if (marks > maxMarks) {
        alert("Obtained marks cannot exceed maximum marks.");
        return;
    }

    let percentage = (marks / maxMarks) * 100;

    let grade;

    if (percentage >= 90)
        grade = "A+";
    else if (percentage >= 80)
        grade = "A";
    else if (percentage >= 70)
        grade = "B";
    else if (percentage >= 60)
        grade = "C";
    else if (percentage >= 50)
        grade = "D";
    else
        grade = "F";

    let status =
        percentage >= 50 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Roll Number:</strong> ${roll}<br>
        <strong>Department:</strong> ${department}<br>
        <strong>Academic Year:</strong> ${year}<br>
        <strong>Semester:</strong> ${semester.value}<br>
        <strong>Subject:</strong> ${subject}<br>
        <strong>Maximum Marks:</strong> ${maxMarks}<br>
        <strong>Obtained Marks:</strong> ${marks}<br>
        <strong>Internal Marks:</strong> ${internal}<br>
        <strong>Practical Marks:</strong> ${practical}<br>
        <strong>Attendance:</strong> ${attendance}%<br>
        <strong>Percentage:</strong> ${percentage.toFixed(2)}%<br>
        <strong>Grade:</strong> ${grade}<br>
        <strong>Status:</strong> ${status}
    `;

    alert("Result Generated Successfully!");
}
```
This extended grading portal collects complete academic information and generates the student's result.

**Features:**

* Student Information
* Department Selection
* Academic Year
* Semester
* Subject Selection
* Maximum Marks
* Obtained Marks
* Internal Marks
* Practical Marks
* Attendance
* Grade Calculation
* Printable Result

The application uses JavaScript control structures and validation to calculate grades and display a detailed student result.

---

# Features Implemented

* Form Validation
* Control Structures (`if`, `if-else`, `if-else-if`)
* Nested Conditions
* JavaScript Functions
* DOM Manipulation
* Student Grading System
* Password Validation
* Grade Calculation
* Dynamic Result Generation
* Print Result Feature

---

# Output

### Task 1

* Student enters academic details.
* Grade and Pass/Fail status are displayed.

### Task 2

* User enters registration details.
* Password is validated.
* Login status is displayed.

### Task 3

* Student enters complete academic information.
* Final grade and result are generated.
* Result can be printed.

---

# Screenshot

<img width="1384" height="901" alt="2" src="https://github.com/user-attachments/assets/b3d6c45a-c48a-493e-be8a-dc0c3cb062a2" />
<img width="1384" height="901" alt="3" src="https://github.com/user-attachments/assets/e0be0014-8f51-42e8-b04d-1172b02d2f57" />
<img width="2282" height="1485" alt="Picture 1" src="https://github.com/user-attachments/assets/23d5b997-91cc-482c-8999-fd5ca82af089" />
<img width="1384" height="901" alt="4" src="https://github.com/user-attachments/assets/7d28fd8a-a5fa-45fe-a0f5-76334fcc19b9" />
<img width="1384" height="901" alt="5" src="https://github.com/user-attachments/assets/e742dc78-ecaf-4019-bdc2-79d98b816a23" />


---

# Case Study Title

**Student Grading System and Password Validation using JavaScript Control Structures and Form Validation**

---

# Case Study Program Code

The practical demonstrates various JavaScript control structures and form validation techniques.

| Concept                  | Usage                                  |
| ------------------------ | -------------------------------------- |
| **if Statement**         | Basic input validation                 |
| **if-else**              | Pass/Fail determination                |
| **if-else-if Ladder**    | Grade calculation based on marks       |
| **Nested Conditions**    | Password validation and grading logic  |
| **Logical Operators**    | Password and form validation           |
| **DOM Manipulation**     | Displaying dynamic results             |
| **JavaScript Functions** | Grade calculation and validation logic |

---

# Output Summary

### Task 1

* Student information is accepted.
* Grade is calculated automatically.
* Pass/Fail result is displayed.

### Task 2

* Registration form validates all inputs.
* Password requirements are checked.
* Login status is displayed after successful validation.

### Task 3

* Complete academic information is accepted.
* Student result is generated dynamically.
* Print option generates a printable result.

---

# Result / Conclusion

The experiment was completed successfully. JavaScript control structures including **if**, **if-else**, **if-else-if**, nested conditions, and logical operators were implemented effectively. Form validation techniques were applied to validate user inputs, calculate student grades, determine pass/fail status, and verify password strength. The practical demonstrates how JavaScript can be used to build interactive, user-friendly, and responsive web applications for academic grading and secure user registration.

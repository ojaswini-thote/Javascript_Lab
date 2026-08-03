# Experiment No. 1

**Student Name:** Ojaswini Thote
**PRN:** *24070521048*

**File Path:** `file:///Users/ojaswinithote/Desktop/Javascript/EXP%201/index1.html`

---

# Experiment Title

**Demonstration of Inline, Internal and External JavaScript, Console Methods and Student Information Webpage**

---

# Software / Tools Required

* Visual Studio Code
* Google Chrome
* HTML5
* CSS3
* JavaScript (ES6)

---

# Experiment Program Code

## index.html — Department Home Page (External JavaScript)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to SIT!</title>

    <style>
        body{
            font-family: Arial, sans-serif;
            background-color: lightpink;
        }

        .box{
            width: 450px;
            margin: 30px auto;
            padding: 20px;
            border: 2px solid black;
            border-radius: 10px;
            background-color: white;
        }

        h1, h2{
            text-align: center;
        }

        input[type="text"],
        input[type="number"],
        select{
            width: 100%;
            padding: 5px;
            margin-top: 5px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }

        button{
            padding: 8px 15px;
            background-color: blue;
            color: white;
            border: none;
            cursor: pointer;
        }

        button:hover{
            background-color: darkblue;
        }

        #output{
            margin-top: 20px;
            padding: 10px;
            border: 1px solid black;
            background-color: #f8f8f8;
        }
    </style>

    <!-- Internal JavaScript -->
    <script>
        function showWelcome() {

            let name = document.getElementById("name").value;
            let age = document.getElementById("age").value;
            let cgpa = document.getElementById("cgpa").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;

            // Get selected semester
            let semester = document.querySelector('input[name="semester"]:checked').value;

            // Get selected section
            let section = document.getElementById("section").value;

            document.getElementById("output").innerHTML =
                "<h2>Student Information</h2>" +
                "<p><b>Name:</b> " + name + "</p>" +
                "<p><b>Age:</b> " + age + "</p>" +
                "<p><b>CGPA:</b> " + cgpa + "</p>" +
                "<p><b>Semester:</b> " + semester + "</p>" +
                "<p><b>Section:</b> " + section + "</p>" +
                "<p><b>Email:</b> " + email + "</p>" +
                "<p><b>Phone Number:</b> " + phone + "</p>";

            console.log("Name: " + name);
            console.info("Age: " + age);
            console.log("CGPA: " + cgpa);
            console.log("Semester: " + semester);
            console.log("Section: " + section);
            console.log("Email: " + email);
            console.log("Phone: " + phone);

            console.warn("This is a warning message");
            console.error("This is an error message");
        }
    </script>
</head>

<body>

<div class="box">

    <h1>Welcome to SIT!</h1>
    <h2>Student Information</h2>

    <label>Enter Name:</label><br>
    <input type="text" id="name" placeholder="Enter Name"><br>

    <label>Enter Age:</label><br>
    <input type="number" id="age" placeholder="Enter Age"><br>

    <label>Enter CGPA:</label><br>
    <input type="text" id="cgpa" placeholder="Enter CGPA"><br>

    <label>Select Semester:</label><br>

    <input type="radio" name="semester" value="Semester 1" checked> Semester 1<br>
    <input type="radio" name="semester" value="Semester 2"> Semester 2<br>
    <input type="radio" name="semester" value="Semester 3"> Semester 3<br>
    <input type="radio" name="semester" value="Semester 4"> Semester 4<br>
    <input type="radio" name="semester" value="Semester 5"> Semester 5<br>
    <input type="radio" name="semester" value="Semester 6"> Semester 6<br>
    <input type="radio" name="semester" value="Semester 7"> Semester 7<br>
    <input type="radio" name="semester" value="Semester 8"> Semester 8<br><br>

    <label>Select Section:</label><br>

    <select id="section">
        <option value="Section A">Section A</option>
        <option value="Section B">Section B</option>
        <option value="Section C">Section C</option>
        <option value="Section D">Section D</option>
    </select>

    <label>Enter Email ID:</label><br>
    <input type="text" id="email" placeholder="Enter Email"><br>

    <label>Enter Phone Number:</label><br>
    <input type="number" id="phone" placeholder="Enter Phone Number"><br><br>

    <button onclick="showWelcome(); greet();">
        Submit
    </button>

    <hr>

    <div id="output"></div>

</div>

<script src="script.js"></script>

</body>
</html>
```

**Description:**

* Displays the department homepage.
* Contains navigation to the Student Information page.
* Uses an external JavaScript file (`script.js`) for alert messages and console methods.

---

## script.js — External JavaScript

```js
function greet() {

    alert("Welcome to SIT, Nagpur!");

    console.table([
        {
            Name: "Sample User",
            Course: "JavaScript"
        }
    ]);

    console.time("Execution");
    console.timeEnd("Execution");

}
```
**Description:**

* Defines the `greet()` function.
* Displays a welcome alert.
* Demonstrates JavaScript console methods:

  * `console.table()`
  * `console.time()`
  * `console.timeEnd()`

---

## website.html — Student Information Page (Internal + Inline JavaScript)

**Description:**

* Accepts student name and age.
* Validates user input.
* Generates a dynamic student details table.
* Uses:

  * **Internal JavaScript** for form validation and table generation.
  * **Inline JavaScript** through the button's `onclick` event.
  * **External JavaScript** by calling `greet()` from `script.js`.

---

# Output

* The department homepage loads successfully.
* Clicking **View Student Info Page** opens the student information form.
* After entering the student's name and age and clicking **Submit**:

  * A welcome alert is displayed.
  * Student information is shown in a formatted table.
  * Browser console displays:

    * `console.log()`
    * `console.info()`
    * `console.warn()`
    * `console.error()`
    * `console.table()`
    * `console.time()`
    * `console.timeEnd()`

---

# Screenshot

<img width="1470" height="956" alt="2" src="https://github.com/user-attachments/assets/0be80ecb-4168-4887-82a1-68cee40b6658" />
<img width="1470" height="956" alt="1" src="https://github.com/user-attachments/assets/4e3c37e1-b883-4268-8bf3-75ff1c1a8c02" />


---

# Case Study Title

**Student Information Webpage Connected to the Department Homepage using JavaScript**

---

# Case Study Description

This practical demonstrates the implementation of all three methods of including JavaScript within a single web application.

| JavaScript Type     | Where Used                             | Purpose                                                                 |
| ------------------- | -------------------------------------- | ----------------------------------------------------------------------- |
| Inline JavaScript   | `onclick="showWelcome(); greet();"`    | Calls JavaScript functions when the button is clicked                   |
| Internal JavaScript | `<script>` block inside `website.html` | Validates input and dynamically generates the student information table |
| External JavaScript | `script.js`                            | Displays a welcome alert and demonstrates console methods               |

---

# Output Summary

* Department homepage opens successfully.
* Navigation to the student information page works correctly.
* Student details are displayed dynamically after form submission.
* Alert message appears using external JavaScript.
* Console methods execute successfully.
* Input validation prevents empty submissions.

---

# Result / Conclusion

The experiment was completed successfully. The implementation demonstrated the use of **Inline**, **Internal**, and **External JavaScript** within a single web application. Various console methods including `console.log()`, `console.info()`, `console.warn()`, `console.error()`, `console.table()`, `console.time()`, and `console.timeEnd()` were successfully executed. The project effectively showcases JavaScript event handling, form validation, DOM manipulation, and dynamic content generation through a Student Information Webpage connected to the Department Homepage.

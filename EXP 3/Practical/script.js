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
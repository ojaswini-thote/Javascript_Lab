const studentId = document.getElementById("studentId");
const studentName = document.getElementById("studentName");
const department = document.getElementById("department");
const marks = document.getElementById("marks");

const addButton = document.getElementById("addButton");
const loadButton = document.getElementById("loadButton");

const tableBody = document.getElementById("studentTableBody");
const jsonData = document.getElementById("jsonData");
const message = document.getElementById("message");

let students = [];
let sessionStudents = [];

addButton.addEventListener("click", function () {

    if (
        studentId.value === "" ||
        studentName.value === "" ||
        department.value === "" ||
        marks.value === ""
    ) {
        alert("Please enter all student details.");
        return;
    }

    const student = {
        id: Number(studentId.value),
        name: studentName.value,
        department: department.value,
        marks: Number(marks.value)
    };

    sessionStudents.push(student);
    students.push(student);

    displayStudents();

    const studentJSON = JSON.stringify(students, null, 4);

    jsonData.textContent = studentJSON;

    message.textContent = "Student added successfully.";

    studentId.value = "";
    studentName.value = "";
    department.value = "";
    marks.value = "";
});

loadButton.addEventListener("click", function () {

    $.getJSON("student.json")
        .done(function (data) {

            students = data.concat(sessionStudents);

            displayStudents();

            const studentJSON = JSON.stringify(students, null, 4);

            jsonData.textContent = studentJSON;

            message.textContent =
                "Student records loaded successfully.";

        })
        .fail(function () {

            message.textContent =
                "Error loading student.json.";

        });
});

function displayStudents() {

    tableBody.innerHTML = "";

    students.forEach(function (student) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.department}</td>
            <td>${student.marks}</td>
        `;

        tableBody.appendChild(row);
    });
}
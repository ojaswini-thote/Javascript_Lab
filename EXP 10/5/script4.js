const employeeId = document.getElementById("employeeId");
const employeeName = document.getElementById("employeeName");
const department = document.getElementById("department");
const salary = document.getElementById("salary");

const addButton = document.getElementById("addButton");
const loadButton = document.getElementById("loadButton");

const tableBody = document.getElementById("employeeTableBody");
const jsonData = document.getElementById("jsonData");
const message = document.getElementById("message");

let employees = [];
let sessionEmployees = [];

addButton.addEventListener("click", function () {

    if (
        employeeId.value === "" ||
        employeeName.value === "" ||
        department.value === "" ||
        salary.value === ""
    ) {
        alert("Please enter all employee details.");
        return;
    }

    const employee = {
        id: Number(employeeId.value),
        name: employeeName.value,
        department: department.value,
        salary: Number(salary.value)
    };

    sessionEmployees.push(employee);
    employees.push(employee);

    displayEmployees();

    const employeeJSON = JSON.stringify(employees, null, 4);

    jsonData.textContent = employeeJSON;

    message.textContent = "Employee added successfully.";

    employeeId.value = "";
    employeeName.value = "";
    department.value = "";
    salary.value = "";
});

loadButton.addEventListener("click", function () {

    fetch("employees.json")
        .then(function (response) {

            if (!response.ok) {
                throw new Error("Unable to load employees.json");
            }

            return response.json();
        })
        .then(function (data) {

            employees = data.concat(sessionEmployees);

            displayEmployees();

            const employeeJSON = JSON.stringify(employees, null, 4);

            jsonData.textContent = employeeJSON;

            message.textContent =
                "Employee records loaded successfully.";
        })
        .catch(function (error) {

            console.log("Error:", error);

            message.textContent =
                "Error loading employee data.";
        });
});

function displayEmployees() {

    tableBody.innerHTML = "";

    employees.forEach(function (employee) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>₹${employee.salary}</td>
        `;

        tableBody.appendChild(row);
    });
}
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
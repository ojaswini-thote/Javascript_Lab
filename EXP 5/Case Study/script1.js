// ==========================================
// ARRAY OF STUDENT OBJECTS
// ==========================================

let students = [];


// ==========================================
// PUSH - ADD STUDENT
// ==========================================

function addStudent(){

    let name = document.getElementById("name").value.trim();
    let prn = document.getElementById("prn").value.trim();
    let marks = Number(document.getElementById("marks").value);

    let message = document.getElementById("message");


    if(name === "" || prn === "" || isNaN(marks)){

        message.textContent =
            "Please enter all student details.";

        return;
    }


    if(marks < 0 || marks > 100){

        message.textContent =
            "Marks must be between 0 and 100.";

        return;
    }


    // Create Student Object

    let student = {

        name: name,
        prn: prn,
        marks: marks

    };


    // PUSH
    students.push(student);


    console.log("PUSH() executed");
    console.log("Student added:", student);
    console.log("Current Array:", students);


    updateStudentCount();


    document.getElementById("name").value = "";
    document.getElementById("prn").value = "";
    document.getElementById("marks").value = "";

    message.textContent =
        "Student added successfully using push().";

}


// ==========================================
// POP - REMOVE LAST STUDENT
// ==========================================

function removeLastStudent(){

    if(students.length === 0){

        document.getElementById("message").textContent =
            "No students available.";

        return;
    }


    let removedStudent = students.pop();


    console.log("POP() executed");
    console.log("Removed Student:", removedStudent);
    console.log("Current Array:", students);


    updateStudentCount();


    document.getElementById("message").textContent =
        removedStudent.name +
        " removed using pop().";

}


// ==========================================
// UNSHIFT - ADD STUDENT AT BEGINNING
// ==========================================

function addFirstStudent(){

    let name = document.getElementById("name").value.trim();
    let prn = document.getElementById("prn").value.trim();
    let marks = Number(document.getElementById("marks").value);


    if(name === "" || prn === "" || isNaN(marks)){

        document.getElementById("message").textContent =
            "Enter student details first.";

        return;
    }


    if(marks < 0 || marks > 100){

        document.getElementById("message").textContent =
            "Marks must be between 0 and 100.";

        return;
    }


    let student = {

        name: name,
        prn: prn,
        marks: marks

    };


    // UNSHIFT

    students.unshift(student);


    console.log("UNSHIFT() executed");
    console.log("Student added at beginning:", student);
    console.log("Current Array:", students);


    updateStudentCount();


    document.getElementById("name").value = "";
    document.getElementById("prn").value = "";
    document.getElementById("marks").value = "";


    document.getElementById("message").textContent =
        "Student added at beginning using unshift().";

}


// ==========================================
// SHIFT - REMOVE FIRST STUDENT
// ==========================================

function removeFirstStudent(){

    if(students.length === 0){

        document.getElementById("message").textContent =
            "No students available.";

        return;
    }


    let removedStudent = students.shift();


    console.log("SHIFT() executed");
    console.log("Removed Student:", removedStudent);
    console.log("Current Array:", students);


    updateStudentCount();


    document.getElementById("message").textContent =
        removedStudent.name +
        " removed using shift().";

}


// ==========================================
// FOREACH
// ==========================================

function analyzeStudents(){

    if(students.length === 0){

        document.getElementById("message").textContent =
            "Please add students first.";

        return;
    }


    console.log("================================");
    console.log("ARRAY METHODS");
    console.log("================================");


    // ======================================
    // forEach()
    // ======================================

    console.log("forEach() executed:");

    students.forEach(function(student){

        console.log(
            student.name +
            " | " +
            student.prn +
            " | " +
            student.marks
        );

    });


    // ======================================
    // map()
    // ======================================

    let graceMarks = students.map(function(student){

        return {

            name: student.name,
            prn: student.prn,
            marks: student.marks + 5

        };

    });


    console.log("map() executed:");
    console.log("Grace Marks:", graceMarks);


    // ======================================
    // filter()
    // ======================================

    let passedStudents = students.filter(function(student){

        return student.marks >= 40;

    });


    console.log("filter() executed:");
    console.log("Passed Students:", passedStudents);


    // ======================================
    // reduce()
    // ======================================

    let totalMarks = students.reduce(function(total, student){

        return total + student.marks;

    }, 0);


    console.log("reduce() executed:");
    console.log("Total Marks:", totalMarks);


    // ======================================
    // AVERAGE
    // ======================================

    let average = totalMarks / students.length;


    console.log("Average Marks:", average);


    // ======================================
    // FIND HIGHEST MARKS
    // ======================================

    let highestMarks = Math.max(

        ...students.map(function(student){

            return student.marks;

        })

    );


    // ======================================
    // FIND LOWEST MARKS
    // ======================================

    let lowestMarks = Math.min(

        ...students.map(function(student){

            return student.marks;

        })

    );


    // ======================================
    // FIND TOPPER
    // ======================================

    let topper = students.find(function(student){

        return student.marks === highestMarks;

    });


    // ======================================
    // FIND LOWEST STUDENT
    // ======================================

    let lowestStudent = students.find(function(student){

        return student.marks === lowestMarks;

    });


    console.log("Topper:", topper);

    console.log("Lowest Marks Student:", lowestStudent);


    // ======================================
    // DISPLAY FINAL RESULTS
    // ======================================

    document.getElementById("topperName").textContent =
        topper.name;

    document.getElementById("topperPRN").textContent =
        "PRN: " + topper.prn;

    document.getElementById("topperMarks").textContent =
        topper.marks + " Marks";


    document.getElementById("lowestName").textContent =
        lowestStudent.name;

    document.getElementById("lowestPRN").textContent =
        "PRN: " + lowestStudent.prn;

    document.getElementById("lowestMarks").textContent =
        lowestStudent.marks + " Marks";


    document.getElementById("message").textContent =
        "Analysis completed successfully.";

}


// ==========================================
// DISPLAY ARRAY IN CONSOLE ONLY
// ==========================================

function showCurrentArray(){

    console.log("Current Student Array:");
    console.table(students);

    document.getElementById("message").textContent =
        "Current array displayed in browser console.";

}


// ==========================================
// UPDATE STUDENT COUNT
// ==========================================

function updateStudentCount(){

    document.getElementById("studentCount").textContent =
        students.length +
        " student(s) currently stored.";

}
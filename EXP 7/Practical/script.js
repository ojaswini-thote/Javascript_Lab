const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const taskCount = document.getElementById("taskCount");
const currentDate = document.getElementById("currentDate");

const today = new Date();

currentDate.textContent = today.toLocaleDateString(
    "en-US",
    {
        month: "short",
        day: "numeric",
        year: "numeric"
    }
);

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        taskInput.focus();
        return;
    }

    const li = document.createElement("li");

    const taskNumber = document.createElement("span");
    taskNumber.className = "task-number";

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = task;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    editBtn.addEventListener("click", function () {
        const newTask = prompt(
            "Edit your task:",
            taskText.textContent
        );

        if (newTask !== null && newTask.trim() !== "") {
            taskText.textContent = newTask.trim();
        }
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateTaskList();
    });

    li.appendChild(taskNumber);
    li.appendChild(taskText);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();

    updateTaskList();
}

function updateTaskList() {
    const tasks = taskList.querySelectorAll("li");

    tasks.forEach(function (task, index) {
        const numberElement =
            task.querySelector(".task-number");

        numberElement.textContent = index + 1;
    });

    const count = tasks.length;

    taskCount.textContent =
        count + (count === 1 ? " task" : " tasks");

    if (count === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}
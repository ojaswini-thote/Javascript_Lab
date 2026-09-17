const rows = document.querySelectorAll("tbody tr");

const saveTopicButton = document.getElementById("saveTopicButton");
const saveDayButton = document.getElementById("saveDayButton");
const clearButton = document.getElementById("clearButton");

const status = document.getElementById("status");
const localData = document.getElementById("localData");
const sessionData = document.getElementById("sessionData");

let selectedTopic = "";
let selectedDay = "";

const savedTopic = localStorage.getItem("selectedTopic");
const savedDay = sessionStorage.getItem("selectedDay");

if (savedTopic) {
    selectedTopic = savedTopic;
    localData.textContent = savedTopic;

    rows.forEach(function (row) {
        if (row.getAttribute("data-topic") === savedTopic) {
            row.classList.add("selected");
        }
    });

    status.textContent = "Saved Topic: " + savedTopic;
}

if (savedDay) {
    selectedDay = savedDay;
    sessionData.textContent = savedDay;
}

rows.forEach(function (row) {
    row.addEventListener("click", function () {
        selectedTopic = row.getAttribute("data-topic");
        selectedDay = row.getAttribute("data-day");

        const cells = row.querySelectorAll("td");

        let beginTime;
        let endTime;

        if (cells.length === 4) {
            beginTime = cells[1].textContent;
            endTime = cells[2].textContent;
        } else {
            beginTime = cells[0].textContent;
            endTime = cells[1].textContent;
        }

        rows.forEach(function (item) {
            item.classList.remove("selected");
        });

        row.classList.add("selected");

        alert(
            "Seminar Details\n\n" +
            "Topic: " + selectedTopic +
            "\nDay: " + selectedDay +
            "\nTime: " + beginTime + " - " + endTime
        );

        status.textContent =
            "Selected: " + selectedTopic + " (" + selectedDay + ")";
    });
});

saveTopicButton.addEventListener("click", function () {
    if (selectedTopic === "") {
        alert("Please select a seminar first.");
        return;
    }

    localStorage.setItem("selectedTopic", selectedTopic);

    localData.textContent =
        localStorage.getItem("selectedTopic");

    status.textContent =
        "Topic saved in localStorage: " + selectedTopic;

    alert("Topic saved in localStorage!");
});

saveDayButton.addEventListener("click", function () {
    if (selectedDay === "") {
        alert("Please select a seminar first.");
        return;
    }

    sessionStorage.setItem("selectedDay", selectedDay);

    sessionData.textContent =
        sessionStorage.getItem("selectedDay");

    status.textContent =
        "Day saved in sessionStorage: " + selectedDay;

    alert("Day saved in sessionStorage!");
});

clearButton.addEventListener("click", function () {
    localStorage.removeItem("selectedTopic");
    sessionStorage.removeItem("selectedDay");

    selectedTopic = "";
    selectedDay = "";

    rows.forEach(function (row) {
        row.classList.remove("selected");
    });

    localData.textContent = "Not saved";
    sessionData.textContent = "Not saved";

    status.textContent = "All saved preferences cleared.";

    alert("localStorage and sessionStorage cleared!");
});
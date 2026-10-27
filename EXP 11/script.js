
import {
    classSchedule,
    countdownDuration,
    formatTime,
    formatCountdown
} from "./timer.js";

const liveClock = document.getElementById("liveClock");
const headerClock = document.getElementById("headerClock");
const currentDate = document.getElementById("currentDate");
const headerDate = document.getElementById("headerDate");
const subjectName = document.getElementById("subjectName");
const classRoom = document.getElementById("classRoom");
const classTime = document.getElementById("classTime");
const classStatus = document.getElementById("classStatus");
const subjectIllustration = document.getElementById("subjectIllustration");
const countdownLabel = document.getElementById("countdownLabel");
const timerMessage = document.getElementById("timerMessage");
const progressBar = document.getElementById("progressBar");
const scheduleList = document.getElementById("scheduleList");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");
const nextButton = document.getElementById("nextButton");
const toast = document.getElementById("toast");

let selectedIndex = 0;
let remainingSeconds = countdownDuration;
let paused = false;
let classStarted = false;
let intervalId = null;
let toastTimeout = null;

function updateClock() {
    const now = new Date();
    const actualTime = formatTime(now);

    liveClock.textContent = actualTime;
    headerClock.textContent = actualTime;

    currentDate.textContent = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    headerDate.textContent = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}

function updateDisplay() {
    const time = formatCountdown(remainingSeconds);

    document.getElementById("hours").textContent = time.hours;
    document.getElementById("minutes").textContent = time.minutes;
    document.getElementById("seconds").textContent = time.seconds;

    const progress =
        (remainingSeconds / countdownDuration) * 100;

    progressBar.style.width = progress + "%";
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}

function renderSelectedClass() {
    const item = classSchedule[selectedIndex];

    subjectName.textContent = item.subject;
    classRoom.textContent = "📍 " + item.room;
    classTime.textContent = "◷ " + item.start + " – " + item.end;
    subjectIllustration.textContent = item.icon;

    classStatus.textContent = classStarted
        ? "CLASS IN SESSION"
        : "UPCOMING";

    classStatus.className = classStarted
        ? "status started"
        : "status upcoming";

    countdownLabel.textContent = classStarted
        ? "CLASS STATUS"
        : "CLASS STARTS IN";

    timerMessage.textContent = classStarted
        ? item.subject + " has begun. Happy learning!"
        : paused
            ? "Countdown paused. Resume when you're ready."
            : "Get ready! Your class will begin shortly.";

    pauseButton.disabled = classStarted;

    pauseButton.textContent = classStarted
        ? "Class Started"
        : paused
            ? "▶ Resume"
            : "Ⅱ Pause";

    renderSchedule();
}

function renderSchedule() {
    scheduleList.innerHTML = "";

    classSchedule.forEach(function (item, index) {
        const card = document.createElement("div");
        let statusText = "UPCOMING";

        if (index < selectedIndex) {
            statusText = "COMPLETED";
        } else if (index === selectedIndex && classStarted) {
            statusText = "IN SESSION";
        } else if (index === selectedIndex) {
            statusText = paused ? "PAUSED" : "SELECTED";
        }

        card.className = "schedule-item";

        if (index === selectedIndex) {
            card.classList.add("selected");
        }

        if (index < selectedIndex) {
            card.classList.add("finished");
        }

        card.innerHTML = `
            <div class="schedule-time">
                ${item.start}
                <br>
                ${item.end}
            </div>

            <div class="schedule-info">
                <h3>${item.subject}</h3>
                <p>📍 ${item.room}</p>
                <span class="mini-status">${statusText}</span>
            </div>
        `;

        card.addEventListener("click", function () {
            selectClass(index);
        });

        scheduleList.appendChild(card);
    });

    document.getElementById("classCount").textContent =
        classSchedule.length + " Classes";
}

function selectClass(index) {
    clearInterval(intervalId);
    clearTimeout(toastTimeout);

    selectedIndex = index;
    remainingSeconds = countdownDuration;
    paused = false;
    classStarted = false;

    toast.classList.remove("show");

    document.querySelector(".countdown-panel").style.borderColor =
        "transparent";

    updateDisplay();
    renderSelectedClass();
    startCountdown();

    showToast(classSchedule[index].subject + " selected");
}

function beginClass() {
    clearInterval(intervalId);

    remainingSeconds = 0;
    classStarted = true;
    paused = false;

    updateDisplay();

    classStatus.textContent = "CLASS IN SESSION";
    classStatus.className = "status started";
    countdownLabel.textContent = "CLASS STATUS";

    timerMessage.textContent =
        classSchedule[selectedIndex].subject +
        " has begun. Happy learning!";

    pauseButton.disabled = true;
    pauseButton.textContent = "Class Started";

    document.querySelector(".countdown-panel").style.borderColor =
        "#b7dfbf";

    renderSchedule();

    showToast(
        "🎉 " + classSchedule[selectedIndex].subject + " has begun!"
    );
}

function startCountdown() {
    clearInterval(intervalId);

    intervalId = setInterval(function () {
        if (paused || classStarted) {
            return;
        }

        if (remainingSeconds > 0) {
            remainingSeconds--;
            updateDisplay();
        }

        if (remainingSeconds <= 0) {
            beginClass();
        }
    }, 1000);
}

pauseButton.addEventListener("click", function () {
    if (classStarted) {
        return;
    }

    paused = !paused;

    pauseButton.textContent = paused
        ? "▶ Resume"
        : "Ⅱ Pause";

    timerMessage.textContent = paused
        ? "Countdown paused. Resume when you're ready."
        : "Get ready! Your class will begin shortly.";

    renderSchedule();
});

resetButton.addEventListener("click", function () {
    clearInterval(intervalId);
    clearTimeout(toastTimeout);

    remainingSeconds = countdownDuration;
    paused = false;
    classStarted = false;

    document.querySelector(".countdown-panel").style.borderColor =
        "transparent";

    toast.classList.remove("show");

    updateDisplay();
    renderSelectedClass();
    startCountdown();

    showToast("Countdown reset");
});

nextButton.addEventListener("click", function () {
    const nextIndex = (selectedIndex + 1) % classSchedule.length;

    selectClass(nextIndex);
});

updateClock();
updateDisplay();
renderSelectedClass();

setInterval(updateClock, 1000);
startCountdown();

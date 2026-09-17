const username = document.getElementById("username");
const theme = document.getElementById("theme");
const accent = document.getElementById("accent");
const saveButton = document.getElementById("saveButton");
const clearButton = document.getElementById("clearButton");
const message = document.getElementById("message");

function applyTheme(selectedTheme) {
    if (selectedTheme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

function applyAccent(selectedAccent) {
    if (selectedAccent === "blue") {
        document.documentElement.style.setProperty("--accent", "#3f6fa8");
    } else if (selectedAccent === "green") {
        document.documentElement.style.setProperty("--accent", "#4f805b");
    } else {
        document.documentElement.style.setProperty("--accent", "#76558f");
    }
}

const savedTheme = localStorage.getItem("theme");
const savedAccent = localStorage.getItem("accent");
const savedUsername = sessionStorage.getItem("username");

if (savedTheme) {
    theme.value = savedTheme;
    applyTheme(savedTheme);
}

if (savedAccent) {
    accent.value = savedAccent;
    applyAccent(savedAccent);
}

if (savedUsername) {
    username.value = savedUsername;
}

theme.addEventListener("change", function () {
    applyTheme(theme.value);
});

accent.addEventListener("change", function () {
    applyAccent(accent.value);
});

username.addEventListener("input", function () {
    message.textContent = "";
});

saveButton.addEventListener("click", function () {
    localStorage.setItem("theme", theme.value);
    localStorage.setItem("accent", accent.value);

    sessionStorage.setItem("username", username.value);

    applyTheme(theme.value);
    applyAccent(accent.value);

    message.textContent = "Preferences saved successfully!";
});

clearButton.addEventListener("click", function () {
    localStorage.removeItem("theme");
    localStorage.removeItem("accent");

    sessionStorage.removeItem("username");

    theme.value = "light";
    accent.value = "purple";
    username.value = "";

    applyTheme("light");
    applyAccent("purple");

    message.textContent = "Preferences cleared!";
});
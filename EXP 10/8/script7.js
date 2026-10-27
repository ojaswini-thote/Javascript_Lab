
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", function () {
    const open = nav.classList.toggle("open");

    menuButton.textContent = open ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", open);
});

nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    });
});

const searchInput = document.getElementById("searchProblems");
const filterButtons = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".problem-card");

let selectedCategory = "All";

function filterProjects() {
    const query = searchInput.value.toLowerCase().trim();

    cards.forEach(function (card) {
        const category = card.dataset.category;
        const text = card.textContent.toLowerCase();

        const categoryMatches =
            selectedCategory === "All" || category === selectedCategory;

        const searchMatches = text.includes(query);

        card.hidden = !(categoryMatches && searchMatches);
    });
}

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");
        selectedCategory = button.dataset.filter;

        filterProjects();
    });
});

searchInput.addEventListener("input", filterProjects);

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent =
        "Thank you, " + name +
        ". Your demo form was submitted successfully. No data was sent to a server.";

    contactForm.reset();
});

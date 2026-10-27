const cityTitle = document.getElementById("cityTitle");
const searchInput = document.getElementById("searchInput");
const landmarks = document.querySelectorAll(".landmark");
const showButton = document.getElementById("showButton");
const hideButton = document.getElementById("hideButton");
const message = document.getElementById("message");

landmarks.forEach(function (landmark) {

    landmark.addEventListener("click", function () {
        const name = landmark.getAttribute("data-name");

        alert(
            "You selected: " + name +
            "\n\nClick OK to continue exploring Nagpur."
        );
    });

    landmark.addEventListener("mouseover", function () {
        landmark.style.transform = "translateY(-8px)";
    });

    landmark.addEventListener("mouseout", function () {
        landmark.style.transform = "translateY(0)";
    });
});

cityTitle.addEventListener("dblclick", function () {
    cityTitle.textContent = "WELCOME TO NAGPUR";
    message.textContent = "You double-clicked the city heading!";
});

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();

    landmarks.forEach(function (landmark) {
        const name = landmark.getAttribute("data-name").toLowerCase();

        if (name.includes(searchValue)) {
            landmark.style.display = "block";
        } else {
            landmark.style.display = "none";
        }
    });
});

showButton.addEventListener("click", function () {
    landmarks.forEach(function (landmark) {
        landmark.style.display = "block";

        const description = landmark.querySelector("p");
        description.style.display = "block";
    });

    searchInput.value = "";
    message.textContent = "All landmarks are now visible.";
});

hideButton.addEventListener("click", function () {
    landmarks.forEach(function (landmark) {
        const description = landmark.querySelector("p");
        description.style.display = "none";
    });

    message.textContent = "Landmark descriptions are hidden.";
});
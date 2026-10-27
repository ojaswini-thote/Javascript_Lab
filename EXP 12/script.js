
$(document).ready(function () {

    let destinations = [];
    let destinationsLoaded = false;
    let itinerary = JSON.parse(localStorage.getItem("wanderlyItinerary")) || [];
    let selectedDay = 1;
    let toastTimer;

    let visitCount = Number(sessionStorage.getItem("wanderlyVisits")) || 0;
    visitCount++;
    sessionStorage.setItem("wanderlyVisits", visitCount);

    $("#sessionStatus").text("Tab visits: " + visitCount);

    function updateClock() {
        const now = new Date();

        $("#clock").text(now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        }));
    }

    updateClock();
    setInterval(updateClock, 1000);

    function showToast(message) {
        $("#toast").text(message).addClass("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(function () {
            $("#toast").removeClass("show");
        }, 2600);
    }

    function saveItinerary() {
        localStorage.setItem("wanderlyItinerary", JSON.stringify(itinerary));
        renderItinerary();
        updateSummary();

        $("#localStorageStatus").text("✓ Changes saved automatically");
    }

    function escapeHTML(value) {
        return $("<div>").text(String(value)).html();
    }

    function renderDestinations(list) {
        const grid = $("#destinationGrid");
        grid.empty();

        if (list.length === 0) {
            grid.html(
                '<div class="empty-itinerary"><span>🗺️</span>' +
                '<h3>No places found</h3>' +
                '<p>Try another search or category.</p></div>'
            );
            return;
        }

        $.each(list, function (index, place) {
            const alreadyAdded = itinerary.some(function (item) {
                return item.destinationId === place.id;
            });

            const card = $(`
                <article class="destination-card">
                    <div class="destination-art art-${place.art}">
                        <span class="art-sun"></span>
                        <span class="art-cloud">☁</span>
                        <span class="art-hills"></span>
                        <span class="art-emoji">${escapeHTML(place.emoji)}</span>
                    </div>

                    <div class="destination-body">
                        <div class="destination-meta">
                            <span class="category-pill">${escapeHTML(place.category)}</span>
                            <span class="destination-price">
                                From ₹${Number(place.cost).toLocaleString("en-IN")}
                            </span>
                        </div>

                        <h3>${escapeHTML(place.name)}</h3>
                        <p>${escapeHTML(place.description)}</p>

                        <div class="destination-footer">
                            <span>⌁ ${escapeHTML(place.duration)}</span>
                            <button class="add-destination" data-id="${place.id}"
                                ${alreadyAdded ? "disabled" : ""}>
                                ${alreadyAdded ? "✓ Added" : "+ Add to trip"}
                            </button>
                        </div>
                    </div>
                </article>
            `);

            grid.append(card);
        });
    }

    function loadDestinations() {
        const button = $("#loadButton");

        button.prop("disabled", true).text("Loading destinations...");
        $("#destinationMessage").text("Discovering places...");

        $.ajax({
            url: "destinations.json",
            method: "GET",
            dataType: "json",

            success: function (data) {
                destinations = data;
                destinationsLoaded = true;

                $("#destinationCount").text(destinations.length);
                $("#destinationMessage").text(
                    "Found " + destinations.length + " lovely places to explore."
                );

                filterDestinations();

                button.text("↻ Reload destinations");
                showToast("Destinations loaded successfully!");
            },

            error: function () {
                $("#destinationMessage").text(
                    "Couldn't load destinations.json. Check the file name and use Live Server."
                );

                showToast("Unable to load destinations.");
            },

            complete: function () {
                button.prop("disabled", false);

                if (!destinationsLoaded) {
                    button.text("↓ Load destinations");
                }
            }
        });
    }

    function filterDestinations() {
        if (!destinationsLoaded) {
            return;
        }

        const search = $("#searchInput").val().trim().toLowerCase();
        const category = $("#categoryFilter").val();

        const filtered = destinations.filter(function (place) {
            const matchesSearch =
                place.name.toLowerCase().includes(search) ||
                place.country.toLowerCase().includes(search) ||
                place.description.toLowerCase().includes(search);

            const matchesCategory =
                category === "All" || place.category === category;

            return matchesSearch && matchesCategory;
        });

        renderDestinations(filtered);
    }

    function renderItinerary() {
        const list = $("#itineraryList");
        list.empty();

        const dayItems = itinerary.filter(function (item) {
            return item.day === selectedDay;
        });

        $("#emptyItinerary").toggle(dayItems.length === 0);

        $.each(dayItems, function (index, item) {
            const activity = $(`
                <div class="itinerary-item ${item.completed ? "done" : ""}">
                    <input type="checkbox" class="activity-check"
                        data-id="${item.id}" ${item.completed ? "checked" : ""}>

                    <div class="activity-details">
                        <h4>${escapeHTML(item.title)}</h4>
                        <p>${escapeHTML(item.type)} · Day ${item.day}</p>
                    </div>

                    <button class="remove-activity" data-id="${item.id}"
                        aria-label="Remove activity">×</button>
                </div>
            `);

            list.append(activity);
        });

        $("#stopCountBadge").text(
            itinerary.filter(function (item) {
                return item.type === "Destination";
            }).length + " stops"
        );
    }

    function updateSummary() {
        const places = itinerary.filter(function (item) {
            return item.type === "Destination";
        });

        const totalCost = places.reduce(function (sum, item) {
            return sum + Number(item.cost || 0);
        }, 0);

        const completed = itinerary.filter(function (item) {
            return item.completed;
        }).length;

        const percentage = itinerary.length
            ? Math.round((completed / itinerary.length) * 100)
            : 0;

        $("#itineraryCount").text(places.length + " stops");
        $("#budgetTotal").text("₹" + totalCost.toLocaleString("en-IN"));
        $("#summaryPlaces").text(places.length);
        $("#summaryActivities").text(itinerary.length);
        $("#summaryCompleted").text(percentage + "%");
        $("#tripProgress").css("width", percentage + "%");
    }

    $("#loadButton").on("click", function () {
        loadDestinations();
    });

    $("#searchInput, #categoryFilter").on("input change", function () {
        filterDestinations();
    });

    $("#exploreButton").on("click", function () {
        $("html, body").animate({
            scrollTop: $("#destinationsSection").offset().top - 15
        }, 500);
    });

    $("#destinationGrid").on("click", ".add-destination", function () {
        const id = Number($(this).attr("data-id"));

        const place = destinations.find(function (item) {
            return item.id === id;
        });

        if (!place) {
            return;
        }

        const alreadyAdded = itinerary.some(function (item) {
            return item.destinationId === place.id;
        });

        if (alreadyAdded) {
            showToast("This destination is already in your trip.");
            return;
        }

        itinerary.push({
            id: Date.now() + Math.floor(Math.random() * 1000),
            destinationId: place.id,
            title: place.name + " — " + place.country,
            type: "Destination",
            cost: Number(place.cost),
            day: selectedDay,
            completed: false
        });

        saveItinerary();
        filterDestinations();
        showToast(place.name + " added to Day " + selectedDay + "!");
    });

    $(".day-tab").on("click", function () {
        selectedDay = Number($(this).attr("data-day"));

        $(".day-tab").removeClass("active");
        $(this).addClass("active");

        renderItinerary();
    });

    $("#activityForm").on("submit", function (event) {
        event.preventDefault();

        const title = $("#activityInput").val().trim();

        if (!title) {
            showToast("Please enter an activity.");
            return;
        }

        itinerary.push({
            id: Date.now() + Math.floor(Math.random() * 1000),
            destinationId: null,
            title: title,
            type: "Activity",
            cost: 0,
            day: selectedDay,
            completed: false
        });

        $("#activityInput").val("");

        saveItinerary();
        showToast("Activity added to Day " + selectedDay + "!");
    });

    $("#itineraryList").on("change", ".activity-check", function () {
        const id = Number($(this).attr("data-id"));

        const item = itinerary.find(function (entry) {
            return entry.id === id;
        });

        if (item) {
            item.completed = $(this).is(":checked");
            saveItinerary();
        }
    });

    $("#itineraryList").on("click", ".remove-activity", function () {
        const id = Number($(this).attr("data-id"));

        itinerary = itinerary.filter(function (item) {
            return item.id !== id;
        });

        saveItinerary();
        filterDestinations();
        showToast("Item removed from your trip.");
    });

    $("#clearCompletedButton").on("click", function () {
        const previousLength = itinerary.length;

        itinerary = itinerary.filter(function (item) {
            return !item.completed;
        });

        if (itinerary.length === previousLength) {
            showToast("No completed items to clear.");
            return;
        }

        saveItinerary();
        filterDestinations();
        showToast("Completed items cleared.");
    });

    $("#clearTripButton").on("click", function () {
        if (itinerary.length === 0) {
            showToast("Your trip is already empty.");
            return;
        }

        if (confirm("Are you sure you want to clear your entire trip?")) {
            itinerary = [];
            saveItinerary();
            filterDestinations();
            showToast("Your trip has been cleared.");
        }
    });

    $("#localStorageStatus").text("✓ Tasks are saved in this browser");

    renderItinerary();
    updateSummary();

});

// ==================================================
// PRODUCT DATA
// ==================================================

const products = [

    {
        name: "Laptop",
        category: "Electronics",
        price: 55000,
        image: "laptop.jpg"
    },

    {
        name: "Smartphone",
        category: "Electronics",
        price: 25000,
        image: "phone.jpg"
    },

    {
        name: "Headphones",
        category: "Electronics",
        price: 2500,
        image: "headphones.jpg"
    },

    {
        name: "T-Shirt",
        category: "Clothing",
        price: 799,
        image: "tshirt.jpg"
    },

    {
        name: "Jeans",
        category: "Clothing",
        price: 1499,
        image: "jeans.jpeg"
    },

    {
        name: "Shoes",
        category: "Clothing",
        price: 2999,
        image: "shoes.jpg"
    },

    {
        name: "JavaScript Book",
        category: "Books",
        price: 599,
        image: "javascript.jpg"
    },

    {
        name: "Python Book",
        category: "Books",
        price: 699,
        image: "python book.jpeg"
    },

    {
        name: "Programming Guide",
        category: "Books",
        price: 899,
        image: "programming guide.jpg"
    },

    {
        name: "Wrist Watch",
        category: "Accessories",
        price: 1999,
        image: "watch.jpg"
    },

    {
        name: "Backpack",
        category: "Accessories",
        price: 1299,
        image: "backpack.jpg"
    },

    {
        name: "Sunglasses",
        category: "Accessories",
        price: 999,
        image: "sunglasses.jpg"
    }

];


// ==================================================
// GET HTML ELEMENTS
// ==================================================

const searchBox =
    document.getElementById("searchBox");

const category =
    document.getElementById("category");

const sortBy =
    document.getElementById("sortBy");

const clearBtn =
    document.getElementById("clearBtn");

const productList =
    document.getElementById("productList");

const noProducts =
    document.getElementById("noProducts");

const errorMessage =
    document.getElementById("errorMessage");

const searchForm =
    document.getElementById("searchForm");

const productCount =
    document.getElementById("productCount");


// ==================================================
// DISPLAY PRODUCTS
// ==================================================

function displayProducts(items) {

    // Clear previous products

    productList.innerHTML = "";


    // Update product count dynamically

    productCount.textContent =
        `${items.length} Product${items.length !== 1 ? "s" : ""}`;


    // If there are no products

    if (items.length === 0) {

        noProducts.style.display = "block";

        return;
    }


    // Hide "No Products Found"

    noProducts.style.display = "none";


    // Create a card for every product

    items.forEach(function(product) {


        // Create card

        const card =
            document.createElement("div");

        card.className = "product";


        // Create image container

        const imageContainer =
            document.createElement("div");

        imageContainer.className =
            "product-image";


        // Create image

        const image =
            document.createElement("img");

        image.src =
            product.image;

        image.alt =
            product.name;


        // If image is missing

        image.onerror = function() {

            image.style.display = "none";

            imageContainer.innerHTML =
                `<span style="font-size:45px;">
                    ${getIcon(product.category)}
                </span>`;

        };


        imageContainer.appendChild(image);


        // Create product information

        const productInfo =
            document.createElement("div");

        productInfo.className =
            "product-info";


        productInfo.innerHTML = `

            <h3>
                ${product.name}
            </h3>

            <span class="category">
                ${product.category}
            </span>

            <p class="price">
                ₹${product.price.toLocaleString("en-IN")}
            </p>

        `;


        // Add image and information

        card.appendChild(imageContainer);

        card.appendChild(productInfo);


        // Add card to page

        productList.appendChild(card);

    });

}



// ==================================================
// PRODUCT ICON
// ==================================================

function getIcon(category) {

    if (category === "Electronics") {

        return "💻";

    }


    if (category === "Clothing") {

        return "👕";

    }


    if (category === "Books") {

        return "📚";

    }


    if (category === "Accessories") {

        return "⌚";

    }


    return "📦";

}



// ==================================================
// INPUT VALIDATION
// ==================================================

function validateSearch(value) {

    // Empty input is allowed

    if (value.trim() === "") {

        return true;

    }


    // Only letters and spaces are allowed

    return /^[A-Za-z ]+$/.test(value);

}



// ==================================================
// FILTER AND SORT PRODUCTS
// ==================================================

function filterProducts() {


    // Get search text

    const searchText =
        searchBox.value
            .trim()
            .toLowerCase();


    // Get selected category

    const selectedCategory =
        category.value;


    // Get selected sorting option

    const selectedSort =
        sortBy.value;



    // ==================================================
    // VALIDATION
    // ==================================================

    if (!validateSearch(searchBox.value)) {

        errorMessage.textContent =
            "⚠ Invalid input! Please enter letters and spaces only.";

        productList.innerHTML = "";

        productCount.textContent =
            "0 Products";

        noProducts.style.display =
            "none";

        return;

    }


    // Remove error message

    errorMessage.textContent = "";



    // ==================================================
    // FILTERING
    // ==================================================

    let filteredProducts =
        products.filter(function(product) {


            // Check product name

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchText);


            // Check category

            const matchesCategory =
                selectedCategory === "All" ||
                product.category === selectedCategory;


            // Product must satisfy both conditions

            return (
                matchesSearch &&
                matchesCategory
            );

        });



    // ==================================================
    // SORTING
    // ==================================================

    // A → Z

    if (selectedSort === "nameAsc") {

        filteredProducts.sort(function(a, b) {

            return a.name.localeCompare(b.name);

        });

    }


    // Z → A

    else if (selectedSort === "nameDesc") {

        filteredProducts.sort(function(a, b) {

            return b.name.localeCompare(a.name);

        });

    }


    // Price: Low → High

    else if (selectedSort === "priceLow") {

        filteredProducts.sort(function(a, b) {

            return a.price - b.price;

        });

    }


    // Price: High → Low

    else if (selectedSort === "priceHigh") {

        filteredProducts.sort(function(a, b) {

            return b.price - a.price;

        });

    }



    // ==================================================
    // DISPLAY RESULTS
    // ==================================================

    displayProducts(filteredProducts);

}



// ==================================================
// INPUT EVENT
// ==================================================

// Runs whenever the user types.

searchBox.addEventListener(
    "input",
    function() {

        filterProducts();

    }
);



// ==================================================
// CHANGE EVENT - CATEGORY
// ==================================================

// Runs when category is changed.

category.addEventListener(
    "change",
    function() {

        filterProducts();

    }
);



// ==================================================
// CHANGE EVENT - SORT
// ==================================================

// Runs when sorting option is changed.

sortBy.addEventListener(
    "change",
    function() {

        filterProducts();

    }
);



// ==================================================
// CLICK EVENT - CLEAR
// ==================================================

// Clears all filters.

clearBtn.addEventListener(
    "click",
    function() {


        // Clear search box

        searchBox.value = "";


        // Reset category

        category.value = "All";


        // Reset sorting

        sortBy.value = "default";


        // Remove error

        errorMessage.textContent = "";


        // Display all products

        displayProducts(products);

    }
);



// ==================================================
// SUBMIT EVENT
// ==================================================

// Runs when the form is submitted.

searchForm.addEventListener(
    "submit",
    function(event) {

        // Prevent page refresh

        event.preventDefault();


        // Perform search

        filterProducts();

    }
);



// ==================================================
// INITIAL DISPLAY
// ==================================================

// Display all products when page opens.

displayProducts(products);
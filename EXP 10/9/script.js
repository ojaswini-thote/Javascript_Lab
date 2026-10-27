let cart = [];


/* ================= LOAD CART ================= */

const savedCart =
    localStorage.getItem("rakhiCart");


if (savedCart) {

    cart =
        JSON.parse(savedCart);

}


/* ================= ELEMENTS ================= */

const cartButton =
    document.getElementById("cartButton");

const cartPanel =
    document.getElementById("cartPanel");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutTotal =
    document.getElementById("checkoutTotal");

const checkoutButton =
    document.getElementById("checkoutButton");

const checkoutModal =
    document.getElementById("checkoutModal");

const closeCheckout =
    document.getElementById("closeCheckout");

const checkoutForm =
    document.getElementById("checkoutForm");

const searchInput =
    document.getElementById("searchInput");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const productCards =
    document.querySelectorAll(".product-card");

const quickViewModal =
    document.getElementById("quickViewModal");

const closeQuickView =
    document.getElementById("closeQuickView");

const quickImage =
    document.getElementById("quickImage");

const quickName =
    document.getElementById("quickName");

const quickPrice =
    document.getElementById("quickPrice");



/* ================= ADD TO CART ================= */

document
    .querySelectorAll(".add-cart")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const name =
                    button.dataset.product;

                const price =
                    Number(
                        button.dataset.price
                    );


                const existingProduct =
                    cart.find(function(item) {

                        return item.name === name;

                    });


                if (existingProduct) {

                    existingProduct.quantity++;

                }

                else {

                    cart.push({

                        name: name,

                        price: price,

                        quantity: 1

                    });

                }


                saveCart();

                updateCart();


                alert(
                    name +
                    " added to your cart!"
                );

            }
        );

    });



/* ================= SAVE CART ================= */

function saveCart() {

    localStorage.setItem(

        "rakhiCart",

        JSON.stringify(cart)

    );

}



/* ================= UPDATE CART ================= */

function updateCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

    }

    else {

        cart.forEach(
            function(item, index) {


                const itemElement =
                    document.createElement("div");

                itemElement.className =
                    "cart-item";


                itemElement.innerHTML =

                    `

                    <div class="cart-item-top">

                        <div>

                            <div class="cart-item-name">

                                ${item.name}

                            </div>


                            <div class="cart-item-price">

                                ₹${item.price}

                            </div>

                        </div>


                        <button
                            class="remove-btn"
                            onclick="removeItem(${index})"
                        >
                            Remove
                        </button>

                    </div>


                    <div class="quantity-controls">

                        <button
                            class="quantity-btn"
                            onclick="changeQuantity(${index}, -1)"
                        >
                            −
                        </button>


                        <strong>

                            ${item.quantity}

                        </strong>


                        <button
                            class="quantity-btn"
                            onclick="changeQuantity(${index}, 1)"
                        >
                            +

                        </button>

                    </div>

                    `;


                cartItems.appendChild(
                    itemElement
                );

            }
        );

    }


    const total =
        calculateTotal();


    cartTotal.textContent =
        total;


    checkoutTotal.textContent =
        total;


    const totalItems =
        cart.reduce(

            function(sum, item) {

                return (
                    sum +
                    item.quantity
                );

            },

            0

        );


    cartButton.innerHTML =

        "🛒 Cart (" +
        totalItems +
        ")";

}



/* ================= CALCULATE TOTAL ================= */

function calculateTotal() {

    return cart.reduce(

        function(sum, item) {

            return (

                sum +

                item.price *

                item.quantity

            );

        },

        0

    );

}



/* ================= CHANGE QUANTITY ================= */

function changeQuantity(

    index,

    amount

) {

    cart[index].quantity +=
        amount;


    if (

        cart[index].quantity <= 0

    ) {

        cart.splice(

            index,

            1

        );

    }


    saveCart();

    updateCart();

}



/* ================= REMOVE ITEM ================= */

function removeItem(index) {

    cart.splice(

        index,

        1

    );


    saveCart();

    updateCart();

}



/* ================= OPEN CART ================= */

cartButton.addEventListener(

    "click",

    function() {

        cartPanel.classList.add(

            "active"

        );

    }

);



/* ================= CLOSE CART ================= */

closeCart.addEventListener(

    "click",

    function() {

        cartPanel.classList.remove(

            "active"

        );

    }

);



/* ================= CHECKOUT ================= */

checkoutButton.addEventListener(

    "click",

    function() {


        if (

            cart.length === 0

        ) {

            alert(

                "Your cart is empty! Add a Rakhi first."

            );

            return;

        }


        checkoutTotal.textContent =
            calculateTotal();


        checkoutModal.classList.add(

            "active"

        );

    }

);



/* ================= CLOSE CHECKOUT ================= */

closeCheckout.addEventListener(

    "click",

    function() {

        checkoutModal.classList.remove(

            "active"

        );

    }

);



/* ================= PLACE ORDER ================= */

checkoutForm.addEventListener(

    "submit",

    function(event) {

        event.preventDefault();


        const customerName =

            document.getElementById(

                "customerName"

            ).value;


        const total =
            calculateTotal();


        alert(

            "🎉 Order Placed Successfully!\n\n" +

            "Thank you, " +

            customerName +

            "!\n\n" +

            "Order Total: ₹" +

            total +

            "\n\n" +

            "Your Rakhi order will be processed soon! 💖"

        );


        cart = [];


        saveCart();


        updateCart();


        checkoutForm.reset();


        checkoutModal.classList.remove(

            "active"

        );


        cartPanel.classList.remove(

            "active"

        );

    }

);



/* ================= SEARCH ================= */

searchInput.addEventListener(

    "input",

    function() {


        const searchValue =

            searchInput.value

            .toLowerCase();


        productCards.forEach(

            function(card) {


                const productName =

                    card.querySelector("h3")

                    .textContent

                    .toLowerCase();


                if (

                    productName.includes(

                        searchValue

                    )

                ) {

                    card.style.display =

                        "block";

                }

                else {

                    card.style.display =

                        "none";

                }

            }

        );

    }

);



/* ================= FILTER ================= */

filterButtons.forEach(

    function(button) {


        button.addEventListener(

            "click",

            function() {


                filterButtons.forEach(

                    function(btn) {

                        btn.classList.remove(

                            "active"

                        );

                    }

                );


                button.classList.add(

                    "active"

                );


                const category =

                    button.dataset.filter;


                productCards.forEach(

                    function(card) {


                        if (

                            category === "all" ||

                            card.dataset.category === category

                        ) {

                            card.style.display =

                                "block";

                        }

                        else {

                            card.style.display =

                                "none";

                        }

                    }

                );

            }

        );

    }

);



/* ================= WISHLIST ================= */

document

    .querySelectorAll(".wishlist")

    .forEach(

        function(button) {


            button.addEventListener(

                "click",

                function() {


                    button.classList.toggle(

                        "active"

                    );


                    if (

                        button.classList.contains(

                            "active"

                        )

                    ) {

                        button.innerHTML =

                            "♥";

                    }

                    else {

                        button.innerHTML =

                            "♡";

                    }

                }

            );

        }

    );



/* ================= QUICK VIEW ================= */

document

    .querySelectorAll(".view-btn")

    .forEach(

        function(button) {


            button.addEventListener(

                "click",

                function() {


                    quickImage.src =

                        button.dataset.image;


                    quickName.textContent =

                        button.dataset.name;


                    quickPrice.textContent =

                        "₹" +

                        button.dataset.price;


                    quickViewModal.classList.add(

                        "active"

                    );

                }

            );

        }

    );



/* ================= CLOSE QUICK VIEW ================= */

closeQuickView.addEventListener(

    "click",

    function() {

        quickViewModal.classList.remove(

            "active"

        );

    }

);



/* ================= OFFER ================= */

document

    .getElementById(

        "offerButton"

    )

    .addEventListener(

        "click",

        function() {


            alert(

                "🎉 SPECIAL OFFER!\n\n" +

                "Use code: RAKHI20\n\n" +

                "Get 20% OFF on selected products!"

            );

        }

    );



/* ================= INITIAL LOAD ================= */

updateCart();
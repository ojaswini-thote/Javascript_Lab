function generateBill() {

    // String
    let customerName = document.getElementById("name").value.trim();

    // String
    let phone = document.getElementById("phone").value.trim();

    // Boolean
    let isPrime = document.getElementById("member").value === "true";

    // String
    let payment = document.getElementById("payment").value;

    // Validation
    if (customerName === "" || phone === "") {
        alert("Please enter customer details.");
        return;
    }

    // Array
    let purchasedItems = [];

    // Number
    let subtotal = 0;

    // Get all quantity inputs
    let qtyInputs = document.querySelectorAll(".qty");

    qtyInputs.forEach(item => {

        let quantity = Number(item.value);

        if (quantity > 0) {

            let product = item.dataset.product;
            let price = Number(item.dataset.price);

            let amount = price * quantity;

            subtotal += amount;

            purchasedItems.push({
                product: product,
                price: price,
                quantity: quantity,
                amount: amount
            });

        }

    });

    if (purchasedItems.length === 0) {
        alert("Please select at least one product.");
        return;
    }

    // Number
    let gst = subtotal * 0.18;

    let grandTotal = subtotal + gst;

    // Prime Member Discount
    if (isPrime) {
        grandTotal -= 500;
    }

    // Object
    let customer = {
        name: customerName,
        phone: phone,
        paymentMethod: payment,
        primeMember: isPrime
    };

    // Console Output (Data Types)
    console.clear();

    console.log("===== JavaScript Data Types =====");
    console.log("String :", customerName);
    console.log("Number :", grandTotal);
    console.log("Boolean :", isPrime);
    console.log("Array :", purchasedItems);
    console.log("Object :", customer);

    // Display Bill
    document.getElementById("bill").style.display = "block";

    document.getElementById("customer").textContent = customerName;
    document.getElementById("mobile").textContent = phone;
    document.getElementById("prime").textContent = isPrime ? "Yes" : "No";
    document.getElementById("paymentMethod").textContent = payment;

    let billTable = document.getElementById("billItems");
    billTable.innerHTML = "";

    purchasedItems.forEach(item => {

        billTable.innerHTML += `
            <tr>
                <td>${item.product}</td>
                <td>₹${item.price}</td>
                <td>${item.quantity}</td>
                <td>₹${item.amount}</td>
            </tr>
        `;

    });

    document.getElementById("subtotal").innerHTML =
        "Subtotal : ₹" + subtotal.toFixed(2);

    document.getElementById("gst").innerHTML =
        "GST (18%) : ₹" + gst.toFixed(2);

    document.getElementById("grandTotal").innerHTML =
        "Grand Total : ₹" + grandTotal.toFixed(2);

    alert("🛒 Bill Generated Successfully!");
}
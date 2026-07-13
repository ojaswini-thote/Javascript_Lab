function calculateBill() {

    // Using var
    var customerName = document.getElementById("name").value;

    // Using let
    let phone = document.getElementById("phone").value;
    let productName = document.getElementById("product").value;
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);
    let payment = document.getElementById("payment").value;

    

    // Using const
    const gstRate = 0.18;

    // Generate Bill Number
    const billNumber = Math.floor(100000 + Math.random() * 900000);

    // Current Date
    const date = new Date().toLocaleDateString();

    // Object
    const product = {
        name: productName,
        cost: price,
        qty: quantity
    };

    // Destructuring
    const { name, cost, qty } = product;

    // Calculations
    let subtotal = cost * qty;
    let gst = subtotal * gstRate;
    let total = subtotal + gst;

    // Popup
    alert("Bill Generated Successfully!");

    // Display Bill
    document.getElementById("output").innerHTML = `
        <h2 style="text-align:center;">🧾 BILL RECEIPT</h2>
        <hr>

        <p><strong>Bill No:</strong> ${billNumber}</p>
        <p><strong>Date:</strong> ${date}</p>

        <p><strong>Customer:</strong> ${customerName}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <hr>

        <p><strong>Product:</strong> ${name}</p>
        <p><strong>Price per Item:</strong> ₹${cost.toFixed(2)}</p>
        <p><strong>Quantity:</strong> ${qty}</p>

        <hr>

        <p><strong>Subtotal:</strong> ₹${subtotal.toFixed(2)}</p>
        <p><strong>GST (18%):</strong> ₹${gst.toFixed(2)}</p>

        <hr>

        <h3>Total Amount: ₹${total.toFixed(2)}</h3>

        <p><strong>Payment Method:</strong> ${payment}</p>

        <hr>

        <h3 style="text-align:center;color:green;">
            Thank You! Visit Again.
        </h3>
    `;
}
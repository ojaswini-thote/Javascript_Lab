# Experiment No. 2

**Student Name:** Ojaswini Thote
**PRN:** *Your PRN Number*

**File Path:** `file:///Users/ojaswinithote/Desktop/Javascript/EXP%202/index2.html`

---

# Experiment Title

**Demonstration of var, let, const, Template Literals, Destructuring and Billing Calculator using JavaScript**

---

# Software / Tools Required

* Visual Studio Code
* Google Chrome
* HTML5
* CSS3
* JavaScript (ES6)

---

# Experiment Program Code

## index.html — ShopEasy Online Shopping Website
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ShopEasy - Online Shopping</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    background:#eef3f8;
}

header{
    background:linear-gradient(90deg,#1565C0,#42A5F5);
    color:white;
    text-align:center;
    padding:30px;
    box-shadow:0 4px 10px rgba(0,0,0,.2);
}

header h1{
    font-size:38px;
}

header p{
    margin-top:10px;
    font-size:18px;
}

.container{
    width:90%;
    max-width:1200px;
    margin:30px auto;
}

.section{
    background:white;
    padding:25px;
    margin-bottom:30px;
    border-radius:12px;
    box-shadow:0 5px 15px rgba(0,0,0,.15);
}

.section h2{
    color:#1565C0;
    margin-bottom:20px;
}

.form-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
}

label{
    display:block;
    margin-bottom:8px;
    font-weight:bold;
}

input,
select{
    width:100%;
    padding:12px;
    border:1px solid #ccc;
    border-radius:8px;
    font-size:16px;
}

.products{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:20px;
}

.card{
    background:#fafafa;
    border-radius:10px;
    padding:20px;
    text-align:center;
    box-shadow:0 3px 12px rgba(0,0,0,.12);
    transition:.3s;
}

.card:hover{
    transform:translateY(-5px);
}

.card h3{
    color:#1565C0;
}

.price{
    font-size:22px;
    color:#2E7D32;
    margin:15px 0;
    font-weight:bold;
}

.qty{
    width:80px;
    text-align:center;
}

button{
    width:100%;
    padding:15px;
    margin-top:30px;
    background:#2E7D32;
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;
    font-size:18px;
}

button:hover{
    background:#1B5E20;
}

#bill{
    display:none;
    background:#F1F8E9;
    padding:20px;
    border-radius:10px;
}

table{
    width:100%;
    border-collapse:collapse;
    margin-top:20px;
}

th{
    background:#1565C0;
    color:white;
}

th,td{
    border:1px solid #ddd;
    padding:12px;
    text-align:center;
}

footer{
    background:#1565C0;
    color:white;
    text-align:center;
    padding:20px;
    margin-top:30px;
}

@media(max-width:768px){

.form-grid{
grid-template-columns:1fr;
}

.products{
grid-template-columns:1fr;
}

}

</style>

</head>

<body>

<header>

<h1>🛒 ShopEasy Online Shopping</h1>



</header>

<div class="container">

<div class="section">

<h2>Customer Details</h2>

<div class="form-grid">

<div>

<label>Name</label>

<input type="text"
id="name"
placeholder="Enter Customer Name">

</div>

<div>

<label>Phone Number</label>

<input type="text"
id="phone"
placeholder="Enter Phone Number">

</div>

<div>

<label>Prime Member</label>

<select id="member">

<option value="true">Yes</option>
<option value="false">No</option>

</select>

</div>

<div>

<label>Payment Method</label>

<select id="payment">

<option>Cash on Delivery</option>
<option>UPI</option>
<option>Credit Card</option>
<option>Debit Card</option>
<option>Net Banking</option>

</select>

</div>

</div>

</div>

<div class="section">

<h2>Products</h2>

<div class="products">

<div class="card">

<h3>Laptop</h3>

<p class="price">₹50,000</p>

<label>Quantity</label>

<input
type="number"
class="qty"
data-product="Laptop"
data-price="50000"
value="0"
min="0">

</div>

<div class="card">

<h3>Smartphone</h3>

<p class="price">₹25,000</p>

<label>Quantity</label>

<input
type="number"
class="qty"
data-product="Smartphone"
data-price="25000"
value="0"
min="0">

</div>

<div class="card">

<h3>Tablet</h3>

<p class="price">₹18,000</p>

<label>Quantity</label>

<input
type="number"
class="qty"
data-product="Tablet"
data-price="18000"
value="0"
min="0">

</div>

<div class="card">

<h3>Smart Watch</h3>

<p class="price">₹5,000</p>

<label>Quantity</label>

<input
type="number"
class="qty"
data-product="Smart Watch"
data-price="5000"
value="0"
min="0">

</div>

<div class="card">

<h3>Headphones</h3>

<p class="price">₹2,000</p>

<label>Quantity</label>

<input
type="number"
class="qty"
data-product="Headphones"
data-price="2000"
value="0"
min="0">

</div>

<div class="card">

<h3>Keyboard</h3>

<p class="price">₹1,500</p>

<label>Quantity</label>

<input
type="number"
class="qty"
data-product="Keyboard"
data-price="1500"
value="0"
min="0">

</div>

<div class="card">

<h3>Mouse</h3>

<p class="price">₹700</p>

<label>Quantity</label>

<input
type="number"
class="qty"
data-product="Mouse"
data-price="700"
value="0"
min="0">

</div>

<div class="card">

<h3>Bluetooth Speaker</h3>

<p class="price">₹3,500</p>

<label>Quantity</label>

<input
type="number"
class="qty"
data-product="Bluetooth Speaker"
data-price="3500"
value="0"
min="0">

</div>

<div class="card">

<h3>Power Bank</h3>

<p class="price">₹1,200</p>

<label>Quantity</label>

<input
type="number"
class="qty"
data-product="Power Bank"
data-price="1200"
value="0"
min="0">

</div>

<div class="card">

<h3>USB Drive</h3>

<p class="price">₹800</p>

<label>Quantity</label>

<input
type="number"
class="qty"
data-product="USB Drive"
data-price="800"
value="0"
min="0">

</div>

</div>

<button onclick="generateBill()">
🧾 Generate Bill
</button>

</div>

<div class="section">

<div id="bill">

<h2>Bill Receipt</h2>

<p><strong>Customer Name:</strong>
<span id="customer"></span></p>

<p><strong>Phone Number:</strong>
<span id="mobile"></span></p>

<p><strong>Prime Member:</strong>
<span id="prime"></span></p>

<p><strong>Payment Method:</strong>
<span id="paymentMethod"></span></p>

<table>

<thead>

<tr>

<th>Product</th>
<th>Price (₹)</th>
<th>Quantity</th>
<th>Total (₹)</th>

</tr>

</thead>

<tbody id="billItems">

</tbody>

</table>

<h3 id="subtotal"></h3>

<h3 id="gst"></h3>

<h2 id="grandTotal"></h2>

</div>

</div>

</div>



<script src="script2.js"></script>

</body>
</html>
```
The `index.html` file creates an online shopping webpage where customers can:

* Enter customer details (Name, Phone Number, Prime Membership, Payment Method).
* Select quantities for different electronic products.
* Generate a detailed bill with GST calculation.
* View a responsive shopping interface designed using HTML and CSS.

The webpage uses an external JavaScript file (`script2.js`) to perform billing calculations and display the final invoice.

---

## script2.js — JavaScript (var, let, const, Template Literals and Destructuring)

```js
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
```
The JavaScript file demonstrates modern ES6 concepts including:

* **var** for variables and loop counters.
* **let** for block-scoped variables.
* **const** for fixed values such as GST rate and calculated totals.
* **Template Literals** for generating the bill dynamically.
* **Destructuring** for extracting product details while generating the invoice.

It also performs:

* Product selection
* Quantity calculation
* GST (18%) calculation
* Grand Total calculation
* Dynamic bill generation
* Console logging of billing details

---

# Features Implemented

* Online Shopping Interface
* Customer Details Form
* Product Quantity Selection
* Billing Calculator
* GST Calculation (18%)
* Grand Total Calculation
* Dynamic Invoice Generation
* JavaScript ES6 Features
* Console Output

---

# Output

The application displays an online shopping page containing multiple electronic products.

After entering customer details and selecting product quantities, clicking **Generate Bill** displays:

* Customer Information
* Selected Products
* Quantity Purchased
* Product-wise Total
* Subtotal
* GST (18%)
* Grand Total

The browser console displays billing information for verification.

---

# Screenshot

<img width="1470" height="956" alt="3" src="https://github.com/user-attachments/assets/edab2c54-11f7-4a91-92ac-da2f56b34e72" />
<img width="1470" height="956" alt="4" src="https://github.com/user-attachments/assets/eb47c401-99ab-479b-ad5c-406032245d45" />


---

# Case Study Title

**Billing Calculator Web Application Using JavaScript, HTML and CSS**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ShopEasy - Online Shopping</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:#f4f4f4;
}

header{
    background:#0077cc;
    color:white;
    text-align:center;
    padding:20px;
}

.container{
    width:90%;
    max-width:1100px;
    margin:30px auto;
}

.section{
    background:white;
    padding:20px;
    margin-bottom:20px;
    border-radius:10px;
    box-shadow:0 2px 10px rgba(0,0,0,.2);
}

.section h2{
    color:#0077cc;
    margin-bottom:15px;
}

label{
    display:block;
    margin-top:12px;
    font-weight:bold;
}

input,select{
    width:100%;
    padding:10px;
    margin-top:5px;
    border:1px solid #ccc;
    border-radius:5px;
}

table{
    width:100%;
    border-collapse:collapse;
    margin-top:15px;
}

th{
    background:#0077cc;
    color:white;
}

th,td{
    border:1px solid #ddd;
    padding:10px;
    text-align:center;
}

.qty{
    width:70px;
    text-align:center;
}

button{
    width:100%;
    margin-top:20px;
    padding:15px;
    background:#28a745;
    color:white;
    border:none;
    border-radius:5px;
    font-size:18px;
    cursor:pointer;
}

button:hover{
    background:#1e7e34;
}

#bill{
    display:none;
    background:#eef8ee;
    padding:20px;
    border-radius:10px;
}

#bill table{
    margin-top:15px;
}

footer{
    background:#222;
    color:white;
    text-align:center;
    padding:15px;
    margin-top:40px;
}

</style>

</head>

<body>

<header>
<h1>🛒 Online Shopping</h1>

</header>

<div class="container">

<div class="section">

<h2>Customer Details</h2>

<label>Name</label>
<input type="text" id="name" placeholder="Enter Customer Name">

<label>Phone Number</label>
<input type="text" id="phone" placeholder="Enter Phone Number">

<label>Prime Member</label>

<select id="member">
<option value="true">Yes</option>
<option value="false">No</option>
</select>

</div>

<div class="section">

<h2>Products</h2>

<table>

<tr>
<th>Product</th>
<th>Price (₹)</th>
<th>Quantity</th>
</tr>

<tr>
<td>Laptop</td>
<td>50000</td>
<td><input type="number" class="qty" data-product="Laptop" data-price="50000" value="0" min="0"></td>
</tr>

<tr>
<td>Smartphone</td>
<td>25000</td>
<td><input type="number" class="qty" data-product="Smartphone" data-price="25000" value="0" min="0"></td>
</tr>

<tr>
<td>Tablet</td>
<td>18000</td>
<td><input type="number" class="qty" data-product="Tablet" data-price="18000" value="0" min="0"></td>
</tr>

<tr>
<td>Smart Watch</td>
<td>5000</td>
<td><input type="number" class="qty" data-product="Smart Watch" data-price="5000" value="0" min="0"></td>
</tr>

<tr>
<td>Headphones</td>
<td>2000</td>
<td><input type="number" class="qty" data-product="Headphones" data-price="2000" value="0" min="0"></td>
</tr>

<tr>
<td>Bluetooth Speaker</td>
<td>3500</td>
<td><input type="number" class="qty" data-product="Bluetooth Speaker" data-price="3500" value="0" min="0"></td>
</tr>

<tr>
<td>Keyboard</td>
<td>1500</td>
<td><input type="number" class="qty" data-product="Keyboard" data-price="1500" value="0" min="0"></td>
</tr>

<tr>
<td>Mouse</td>
<td>700</td>
<td><input type="number" class="qty" data-product="Mouse" data-price="700" value="0" min="0"></td>
</tr>

<tr>
<td>USB Drive</td>
<td>800</td>
<td><input type="number" class="qty" data-product="USB Drive" data-price="800" value="0" min="0"></td>
</tr>

<tr>
<td>Power Bank</td>
<td>1200</td>
<td><input type="number" class="qty" data-product="Power Bank" data-price="1200" value="0" min="0"></td>
</tr>

</table>

<button onclick="generateBill()">
🧾 Generate Bill
</button>

</div>

<div class="section">

<div id="bill">

<h2>Bill Receipt</h2>

<p><strong>Customer:</strong> <span id="customer"></span></p>
<p><strong>Phone:</strong> <span id="mobile"></span></p>
<p><strong>Prime Member:</strong> <span id="prime"></span></p>

<table>

<thead>

<tr>
<th>Product</th>
<th>Price</th>
<th>Qty</th>
<th>Total</th>
</tr>

</thead>

<tbody id="billItems">

</tbody>

</table>

<h3 id="subtotal"></h3>
<h3 id="gst"></h3>
<h2 id="grandTotal"></h2>

</div>

</div>

</div>



<script src="script2.js"></script>

</body>
</html>
```
---
<img width="1470" height="956" alt="12" src="https://github.com/user-attachments/assets/5b7e5552-cb28-48a7-9f02-295643d24049" />

# Case Study Program Code

The billing application demonstrates the implementation of JavaScript ES6 concepts.

| Concept               | Usage                                                                          |
| --------------------- | ------------------------------------------------------------------------------ |
| **var**               | Used for cart data, loop variables and subtotal calculations                   |
| **let**               | Used for block-scoped variables during calculations                            |
| **const**             | Used for GST amount, Grand Total and constant values                           |
| **Template Literals** | Used to dynamically generate the invoice using backticks and `${}` expressions |
| **Destructuring**     | Used to extract product information while preparing the bill                   |

---

# Output Summary

* Customer details are accepted successfully.
* Multiple products can be selected with different quantities.
* GST is calculated automatically.
* Grand Total is displayed in a formatted invoice.
* Billing information is logged in the browser console.

---

# Result / Conclusion

The experiment was performed successfully. The concepts of **var**, **let**, **const**, **template literals**, and **destructuring** were implemented effectively using JavaScript. An online shopping billing calculator was developed that accepts customer details, calculates product totals, applies GST, generates a professional invoice, and dynamically displays the final bill. This experiment demonstrates the practical application of modern JavaScript (ES6) features in developing an interactive web application.

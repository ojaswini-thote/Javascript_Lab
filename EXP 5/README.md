# Experiment No. 5

**Student Name:** Ojaswini Thote
**PRN:** 24070521048

---

## Experiment Title

**Apply array methods and object handling; create a cart total calculator with discount logic. **

---

## Software / Tools Required

1. Visual Studio Code
2. Google Chrome
3. HTML5
4. JavaScript (ES6)

---

# Task 5.1 — Shopping Cart Calculator

## Aim

Demonstrate JavaScript array methods — `forEach`, `map`, `filter`, and `reduce` — using a Shopping Cart Calculator with product objects.

## File Path

`file:///Users/ojaswinithote/Desktop/Javascript/EXP%205/Practical/index.html`

## Program Code

### `Task5/5.1/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shopping Cart Total Calculator</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#ffe6f2;
    padding:30px;
}

.container{
    width:95%;
    max-width:1400px;
    margin:auto;
    background:white;
    border-radius:15px;
    box-shadow:0 5px 15px rgba(0,0,0,0.2);
    padding:30px;
}

h1{
    text-align:center;
    color:#d63384;
    margin-bottom:30px;
}

.main{
    display:flex;
    gap:30px;
    align-items:flex-start;
}

.left{
    flex:1;
}

.right{
    flex:1;
}

label{
    display:block;
    margin-top:15px;
    margin-bottom:5px;
    font-weight:bold;
}

input{
    width:100%;
    padding:10px;
    border:1px solid #ccc;
    border-radius:8px;
    font-size:16px;
}

button{
    width:100%;
    padding:12px;
    margin-top:15px;
    background:#ff4d94;
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;
    font-size:16px;
}

button:hover{
    background:#e60073;
}

.right h2{
    color:#d63384;
    margin-bottom:15px;
}

.product{
    background:#fff0f6;
    border-left:5px solid #ff4d94;
    padding:12px;
    margin-bottom:12px;
    border-radius:8px;
    line-height:1.7;
}

#result{
    margin-top:30px;
    background:#ffeaf3;
    padding:20px;
    border-radius:10px;
    font-size:18px;
    line-height:1.8;
    font-weight:bold;
}

hr{
    margin:12px 0;
}

@media(max-width:900px){

.main{
    flex-direction:column;
}

}

</style>

</head>
<body>

<div class="container">

<h1>🛒 Shopping Cart Total Calculator</h1>

<div class="main">

<div class="left">

<label>Product Name</label>
<input type="text" id="productName" placeholder="Enter Product Name">

<label>Price (₹)</label>
<input type="number" id="price" placeholder="Enter Price">

<label>Quantity</label>
<input type="number" id="quantity" placeholder="Enter Quantity">

<button onclick="addProduct()">Add Product</button>

<button onclick="calculateBill()">Calculate Total</button>

</div>

<div class="right">

<h2>Products Added</h2>

<div id="productList">
<p>No products added.</p>
</div>

</div>

</div>

<div id="result"></div>

</div>

<script src="script.js"></script>

</body>
</html>
```

---

### `Task5/5.1/script.js`

```js
// Array to store product objects
const cart = [];

// Add Product
function addProduct(){

    const name = document.getElementById("productName").value.trim();
    const price = Number(document.getElementById("price").value);
    const quantity = Number(document.getElementById("quantity").value);

    if(name==="" || price<=0 || quantity<=0){
        alert("Please enter valid product details.");
        return;
    }

    // Object
    const product={
        name:name,
        price:price,
        quantity:quantity,
        total:price*quantity
    };

    // Array Method
    cart.push(product);

    displayProducts();

    document.getElementById("productName").value="";
    document.getElementById("price").value="";
    document.getElementById("quantity").value="";
}

// Display Products
function displayProducts(){

    const productList=document.getElementById("productList");

    productList.innerHTML="";

    cart.forEach(function(item,index){

        productList.innerHTML+=`
        <div class="product">
            <strong>${index+1}. ${item.name}</strong><br>
            Price : ₹${item.price}<br>
            Quantity : ${item.quantity}<br>
            Total : ₹${item.total}
        </div>
        `;

    });

}

// Calculate Bill
function calculateBill(){

    if(cart.length===0){
        alert("Cart is empty.");
        return;
    }

    // Array Method - reduce()
    const cartTotal=cart.reduce(function(sum,item){
        return sum+item.total;
    },0);

    let discount=0;

    if(cartTotal>=5000){
        discount=cartTotal*0.20;
    }
    else if(cartTotal>=3000){
        discount=cartTotal*0.15;
    }
    else if(cartTotal>=1000){
        discount=cartTotal*0.10;
    }

    const finalAmount=cartTotal-discount;

    document.getElementById("result").innerHTML=`
        <h2 style="color:#d63384;">Bill Summary</h2>
        Total Products : ${cart.length}<br>
        Cart Total : ₹${cartTotal.toFixed(2)}<br>
        Discount : ₹${discount.toFixed(2)}
        <hr>
        Final Amount : ₹${finalAmount.toFixed(2)}
    `;

}
```

---
## Array Methods Used

| Method      | Purpose                                                       |
| ----------- | ------------------------------------------------------------- |
| `forEach()` | Renders each cart item as a table row                         |
| `map()`     | Builds the Item Summary list with product name and item total |
| `filter()`  | Extracts products where `price > 1000`                        |
| `reduce()`  | Calculates the grand total: `sum + (price × quantity)`        |

---

## Output

* User enters **Product Name, Price, and Quantity** and clicks **Add Product**.
* The table displays **ID, Name, Price, Quantity, and Total** for each product.
* Discount is applied automatically:

  * **≥ ₹50,000 → 20% discount**
  * **≥ ₹20,000 → 10% discount**
  * **≥ ₹5,000 → 5% discount**
* **Final Amount = Total − Discount**
* Item Summary and Expensive Products lists are updated whenever a new product is added.

## Screenshot
![Task 5.1 Output](Practical/41.png)


---

# Task 5.2 — Max & Min Finder (Array of Objects)

## Aim

Create an array of objects from user input and find the Maximum and Minimum values using array methods — `map()`, `Math.max()`, `Math.min()`, and `some()`.

## File Path

`Task5/5.2/index.html`
`Task5/5.2/script.js`

## Program Code

### `Task5/5.2/index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <title>Task 5.2 – Max & Min</title>

    <style>

        body {
            font-family: Arial, sans-serif;
            background: #f0f4f8;
            display: flex;
            justify-content: center;
            padding: 40px;
        }

        .box {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            width: 400px;
        }

        h2 {
            margin-bottom: 20px;
            color: #333;
        }

        input {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 6px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }

        button {
            width: 100%;
            padding: 10px;
            background: #4f46e5;
            color: white;
            font-size: 16px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }

        button:hover {
            background: #4338ca;
        }

        .result {
            margin-top: 20px;
            display: none;
        }

        .result p {
            font-size: 16px;
            margin: 8px 0;
            color: #333;
        }

        .result span {
            font-weight: bold;
            color: #4f46e5;
        }

        .error {
            color: red;
            font-size: 14px;
            margin-top: 8px;
        }

    </style>

</head>

<body>

    <div class="box">

        <h2>Task 5.2 – Max & Min Finder</h2>

        <label>Enter numbers separated by commas:</label>

        <input
            type="text"
            id="inputNumbers"
            placeholder="e.g. 10, 25, 3, 47, 8"
        >

        <div class="error" id="errorMsg"></div>

        <button onclick="findMaxMin()">
            Find Max & Min
        </button>


        <div class="result" id="result">

            <p>
                Numbers Array:
                <span id="arrDisplay"></span>
            </p>

            <p>
                Maximum Value:
                <span id="maxVal"></span>
            </p>

            <p>
                Minimum Value:
                <span id="minVal"></span>
            </p>

        </div>


        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">

        <p style="margin-top: 12px; font-size: 14px; color: #555;">

            <strong>Name:</strong> Ojaswini Thote
            &nbsp;|&nbsp;
            <strong>PRN:</strong> 24070521048

        </p>

    </div>

    <script src="script.js"></script>

</body>

</html>
```

---

### `Task5/5.2/script.js`

```javascript
// Task 5.2 – Find Max & Min from Array of Objects

function findMaxMin() {

    const input =
        document.getElementById("inputNumbers").value.trim();

    const errorMsg =
        document.getElementById("errorMsg");

    const resultDiv =
        document.getElementById("result");


    errorMsg.textContent = "";
    resultDiv.style.display = "none";


    if (input === "") {

        errorMsg.textContent =
            "Please enter at least one number.";

        return;
    }


    // Convert input string into an array of objects using map()

    const rawValues = input.split(",");

    const numbersArray = rawValues.map((item, index) => ({

        id: index + 1,

        value: Number(item.trim())

    }));


    // Validate using some()

    const hasInvalid =
        numbersArray.some(obj => isNaN(obj.value));


    if (hasInvalid) {

        errorMsg.textContent =
            "Invalid input! Please enter numbers only, separated by commas.";

        return;
    }


    // Extract numeric values using map()

    const values =
        numbersArray.map(obj => obj.value);


    // Find maximum and minimum values

    const maxVal =
        Math.max(...values);

    const minVal =
        Math.min(...values);


    // Display results

    document.getElementById("arrDisplay").textContent =
        "[" + values.join(", ") + "]";

    document.getElementById("maxVal").textContent =
        maxVal;

    document.getElementById("minVal").textContent =
        minVal;


    resultDiv.style.display = "block";
}
```

---

## Array Methods Used

| Method       | Purpose                                                |
| ------------ | ------------------------------------------------------ |
| `map()`      | Converts input strings into an array of number objects |
| `map()`      | Extracts `value` from each object into a plain array   |
| `some()`     | Validates that no entry is `NaN`                       |
| `Math.max()` | Finds the largest number using the spread operator     |
| `Math.min()` | Finds the smallest number using the spread operator    |

---

## Output

* User enters comma-separated numbers.

**Example:**

```text
10, 25, 3, 47, 8
```

* Clicking **Find Max & Min** displays:

```text
Numbers Array: [10, 25, 3, 47, 8]
Maximum Value: 47
Minimum Value: 3
```

* Invalid input displays an error message in red.

## Screenshot

![Task 5.2 Output](Case%20Study/48.png)

---

# Result / Conclusion

Both tasks were completed successfully.

* **Task 5.1** demonstrated `forEach()`, `map()`, `filter()`, and `reduce()` through a Shopping Cart Calculator that dynamically adds products, computes totals, applies discounts, and lists expensive products.

* **Task 5.2** demonstrated `map()`, `some()`, `Math.max()`, and `Math.min()` by converting user-entered comma-separated numbers into an array of objects and finding the maximum and minimum values.

Thus, the experiment successfully demonstrated the practical use of **JavaScript Array Methods and Object Handling** in web applications.

---

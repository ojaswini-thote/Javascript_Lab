# Experiment No. 5

**Student Name:** Ojaswini Thote
**PRN:** 24070521048

---

## Experiment Title

**Apply Array Methods and Object Handling in JavaScript**

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

`Task5/5.1/index.html`

## Program Code

### `Task5/5.1/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Shopping Cart</title>

    <style>
        body {
            font-family: Arial;
            background: #f2f2f2;
        }

        .container {
            width: 800px;
            margin: 30px auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
        }

        input {
            padding: 8px;
            width: 150px;
            margin: 5px;
        }

        button {
            padding: 10px;
            cursor: pointer;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table, th, td {
            border: 1px solid black;
        }

        th {
            background: #007bff;
            color: white;
        }

        th, td {
            padding: 10px;
            text-align: center;
        }

        .result {
            margin-top: 20px;
            font-size: 18px;
        }
    </style>
</head>

<body>

    <div class="container">

        <h2>Shopping Cart Calculator</h2>

        <input type="text" id="name" placeholder="Product Name">
        <input type="number" id="price" placeholder="Price">
        <input type="number" id="qty" placeholder="Quantity">

        <button onclick="addProduct()">Add Product</button>

        <table id="cartTable">
            <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
        </table>

        <div class="result" id="result">
            <h3>Item Summary</h3>
            <ul id="summary"></ul>

            <h3>Expensive Products (Price > 1000)</h3>
            <ul id="expensive"></ul>
        </div>

    </div>

    <script>

        let cart = [];

        function addProduct() {

            let name = document.getElementById("name").value;
            let price = parseFloat(document.getElementById("price").value);
            let qty = parseInt(document.getElementById("qty").value);

            if (name == "" || isNaN(price) || isNaN(qty)) {
                alert("Please enter all fields");
                return;
            }

            let product = {
                id: cart.length + 1,
                name: name,
                price: price,
                quantity: qty
            };

            cart.push(product);

            displayCart();

            document.getElementById("name").value = "";
            document.getElementById("price").value = "";
            document.getElementById("qty").value = "";
        }


        function displayCart() {

            let table = document.getElementById("cartTable");

            table.innerHTML = `
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            `;


            // forEach — renders each cart item row
            cart.forEach(function (item) {

                table.innerHTML += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>${item.quantity}</td>
                        <td>${item.price * item.quantity}</td>
                    </tr>
                `;
            });


            // reduce — calculates grand total
            let total = cart.reduce(function (sum, item) {
                return sum + (item.price * item.quantity);
            }, 0);


            let discount = 0;

            if (total >= 50000)
                discount = total * 0.20;

            else if (total >= 20000)
                discount = total * 0.10;

            else if (total >= 5000)
                discount = total * 0.05;


            let finalAmount = total - discount;


            document.getElementById("result").innerHTML = `
                <b>Total Amount :</b> ${total}<br>
                <b>Discount :</b> ${discount.toFixed(2)}<br>
                <b>Final Amount :</b> ${finalAmount.toFixed(2)}

                <h3>Item Summary</h3>
                <ul id="summary"></ul>

                <h3>Expensive Products (Price > 1000)</h3>
                <ul id="expensive"></ul>
            `;


            // map — builds item summary list
            let summary = document.getElementById("summary");

            summary.innerHTML = "";

            cart.map(function (item) {
                summary.innerHTML += `
                    <li>${item.name} : ${item.price * item.quantity}</li>
                `;
            });


            // filter — finds products with price > 1000
            let expensive = document.getElementById("expensive");

            expensive.innerHTML = "";

            let exp = cart.filter(function (item) {
                return item.price > 1000;
            });


            exp.forEach(function (item) {
                expensive.innerHTML += `
                    <li>${item.name}</li>
                `;
            });
        }

    </script>

</body>
</html>
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

> **Add your screenshot here showing your Name, PRN, and File Path.**

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

> **Add your screenshot here showing your Name, PRN, and File Path.**

---

# Result / Conclusion

Both tasks were completed successfully.

* **Task 5.1** demonstrated `forEach()`, `map()`, `filter()`, and `reduce()` through a Shopping Cart Calculator that dynamically adds products, computes totals, applies discounts, and lists expensive products.

* **Task 5.2** demonstrated `map()`, `some()`, `Math.max()`, and `Math.min()` by converting user-entered comma-separated numbers into an array of objects and finding the maximum and minimum values.

Thus, the experiment successfully demonstrated the practical use of **JavaScript Array Methods and Object Handling** in web applications.

---

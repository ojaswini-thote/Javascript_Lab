let orders = [];
let newOrders = [];
let nextOrderId = 1001;


function loadOrders(callback) {

    $.getJSON("order.json")
        .done(function (data) {

            orders = data;

            let highestId = 0;

            $.each(orders, function (index, order) {

                if (Number(order.orderId) > highestId) {
                    highestId = Number(order.orderId);
                }

            });

            nextOrderId = highestId + 1;

            if (callback) {
                callback();
            }

        })
        .fail(function () {

            $("#message").text(
                "Unable to load order.json. Please check the file."
            );

        });
}


$("#placeOrder").click(function () {

    let customerName = $("#customerName").val();
    let foodItem = $("#foodItem").val();
    let quantity = $("#quantity").val();
    let totalAmount = $("#totalAmount").val();

    if (
        customerName === "" ||
        foodItem === "" ||
        quantity === "" ||
        totalAmount === ""
    ) {
        $("#message").text("Please enter all order details.");
        return;
    }

    if (orders.length === 0) {

        loadOrders(function () {
            placeNewOrder(
                customerName,
                foodItem,
                quantity,
                totalAmount
            );
        });

    } else {

        placeNewOrder(
            customerName,
            foodItem,
            quantity,
            totalAmount
        );

    }

});


function placeNewOrder(
    customerName,
    foodItem,
    quantity,
    totalAmount
) {

    let newOrder = {
        orderId: nextOrderId,
        customerName: customerName,
        foodItem: foodItem,
        quantity: Number(quantity),
        totalAmount: Number(totalAmount),
        orderStatus: "Preparing"
    };

    nextOrderId++;

    newOrders.push(newOrder);

    orders.push(newOrder);

    displayOrders();

    $("#message").text("Order placed successfully!");

    $("#customerName").val("");
    $("#foodItem").val("");
    $("#quantity").val("");
    $("#totalAmount").val("");
}


$("#viewOrders").click(function () {

    loadOrders(function () {

        orders = orders.concat(newOrders);

        displayOrders();

        $("#message").text(
            "Orders loaded successfully."
        );

    });

});


function displayOrders() {

    $("#orderTableBody").empty();

    let totalSales = 0;
    let totalOrders = 0;

    $.each(orders, function (index, order) {

        let statusClass = "";

        if (order.orderStatus === "Preparing") {
            statusClass = "preparing";
        }
        else if (order.orderStatus === "Ready") {
            statusClass = "ready";
        }
        else if (order.orderStatus === "Delivered") {
            statusClass = "delivered";
        }

        let row = `
            <tr>
                <td>${order.orderId}</td>
                <td>${order.customerName}</td>
                <td>${order.foodItem}</td>
                <td>${order.quantity}</td>
                <td>₹${order.totalAmount}</td>
                <td>
                    <span class="status ${statusClass}">
                        ${order.orderStatus}
                    </span>
                </td>
            </tr>
        `;

        $("#orderTableBody").append(row);

        totalSales += Number(order.totalAmount);
        totalOrders++;
    });

    $("#totalOrders").text(totalOrders);
    $("#totalSales").text("₹" + totalSales);
}
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
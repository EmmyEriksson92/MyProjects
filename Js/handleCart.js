//Display cart.
function displayCart() {
    if (getData() !== null) {
        let cart = getData();
        showCart(cart);
    }

}


//Creates a table for cart and shows the cart items if items exist in localstorage for cart.
function showCart(cart) {
    if (cart.length == 0) {
        document.getElementById("cart").classList.add("hide"); // hide table that shows cart if no items.
        document.getElementById("empty").classList.add("show");
        return;
    }
    document.getElementById("cart").classList.add("show.cart");
    document.getElementById("empty").classList.add("hide");
    let totalp = 0;
    $("#cartBody").empty(); // empty tbody of table 
    for (var i = 0; i < cart.length; i++) {
        var td = document.createElement("td");
        let item = cart[i];
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var tr = document.createElement("tr");

        var text = document.createTextNode(item.item);
        td.appendChild(text);
        var text1 = document.createTextNode(item.price + " kr");
        td1.appendChild(text1);
        var text2 = document.createTextNode(item.qty);
        td2.appendChild(text2);
        var text3 = document.createTextNode(item.qty * item.price + " kr");

        var button = document.createElement("button");

        button.setAttribute("type", "button");
        button.textContent = "Ta bort";
        button.id = "delete";

        td3.appendChild(text3);
        td4.appendChild(button);

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        $("#cartBody").append(tr);
        totalp += (item.qty * item.price);
    }

    document.getElementById("total").innerHTML = "TOTALT: " + totalp + " kr";

}

//Delete selected item from list and table row.
$("table").on("click", ("tr button"), function(event) {
    let id = $(this).closest('td').parent()[0].sectionRowIndex;
    let cart = getData();
    item = cart.find(el => el.id === id);
    cart.splice(id, 1);
    setData(cart);

    let td = event.target.parentNode;
    let tr = td.parentNode;
    if (tr.parentNode != null) {
        tr.parentNode.removeChild(tr);
        location.reload();
    }
});

//When clickling oon hamburger icon toggle class responsive.
document.getElementById("hamburg").onclick = function(event) {
    document.getElementsByClassName("top-menu")[0].classList.toggle("responsive");
}

//Get data from localstorage for shopping cart
function getData() {
    let localStor = localStorage.getItem(("shopping-cart"));
    if (typeof localStor !== "undefined") {
        return JSON.parse(localStorage.getItem(("shopping-cart")));
    }
}

//Set localstorage data for shopping cart.
function setData(data) {
    return localStorage.setItem("shopping-cart", JSON.stringify(data));
}

// Declare the init function.
function init() {
    displayCart();
}

// Register it as a listener to the onload event.
window.onload = init();
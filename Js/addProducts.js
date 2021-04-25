//Array for cart items.
var cartArr = [];

//Array for products.
var products = [
    { id: "1", name: "Body cream", image: "images/cream.jpg", price: "90" },
    { id: "2", name: "Body cream deluxe", image: "images/cream2.jpg", price: "120" },
    { id: "3", name: "Body cream night", image: "images/cream3.jpg", price: "99" }
];


//Create new element for product from array and append to document.
function addProduct() {
    for (var i = 0; i < products.length; i++) {

        // Create new elements img, p and button.
        const newImg = document.createElement("img");
        const newTxt = document.createElement("p");
        const button = document.createElement("button");

        newImg.src = products[i].image;
        newImg.id = products[i].id
        newImg.alt = products[i].name;
        newTxt.innerText = products[i].name;
        button.innerHTML = "KÖP NU";
        newImg.price = products[i].price;

        // add the newly created element and its content into the DOM
        let el = document.getElementById("images").appendChild(newImg);
        document.getElementById("images").appendChild(newTxt);
        let btn = document.getElementById("images").appendChild(button);

        btn.onclick = function() {
            addToCart(newTxt.innerText, newImg.id, newImg.src, newImg.price);
        }

        el.onclick = function() {
            addToCart(newTxt.innerText, newImg.id, newImg.src, newImg.price);
        }

    }
}


//Add clicked item to cart.
function addToCart(itemClicked, id, img, price) {
    if (getData() === null) {
        cartArr.push({ item: itemClicked, id: id, image: img, price: price, qty: 1 });
        setData(cartArr);
        showStatus("Produkten har lagts in i din kundvagn!");
        return;

    } else if (localStorage.getItem("shopping-cart")) {
        cartArr = getData();
        let item = cartArr.find(el => el.id === id);
        console.log(cartArr);
        if (!item) {
            cartArr.push({ item: itemClicked, id: id, image: img, price: price, qty: 1 });
            showStatus("Produkten har lagts in i din kundvagn!");
            setData(cartArr);
            return;

        } else {
            for (var i in cartArr) {
                if (cartArr[i].item == item.item) {
                    cartArr[i].qty++;
                    setData(cartArr);
                    showStatus("En till vara av denna produkt har adderats till kundvagnen!");

                }
            }

        }
    }
    console.log(getData());

}

//When clickling oon hamburger icon toggle class responsive.
document.getElementById("hamburg").onclick = function(event) {
    document.getElementsByClassName("top-menu")[0].classList.toggle("responsive");
    event.preventDefault();

}

//Show message status when adding item to cart.
function showStatus(text) {
    return document.getElementById("showMessage").innerText = text;
}

//Set data for localstorage skopping cart.
function setData(data) {
    return localStorage.setItem("shopping-cart", JSON.stringify(data));
}

//Get data from localstorage for shopping cart
function getData() {
    return JSON.parse(localStorage.getItem(("shopping-cart")));
}

// Declare the init function.
function init() {
    addProduct();
}
// Register it as a listener to the onload event.
window.onload = init();
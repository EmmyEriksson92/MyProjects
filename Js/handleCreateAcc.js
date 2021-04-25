let username;

//When form submitted validate form input.
function pushData() {
    let inputText = document.getElementById("submit");
    //initiate this function when the ID is clicked
    inputText.onclick = function() {
        validateForm();
    }

}
//Validate input from form.
function validateForm() {
    let password_1 = document.getElementById("password_1").value;
    let password_2 = document.getElementById("password_2").value;
    username = document.getElementById("username").value;
    const form = document.getElementById("accountForm");
    let inputs = form.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            alert("Vänligen fyll i alla nödvändiga fält.");
            return false;
        }
    }

    if (password_1 !== password_2) {
        alert("Lösenorden måste matcha. Försök igen.");
        return false;
    }

    if (!validatePassword(password_1) || !validateEmail()) {
        return false;
    }

    sendData();
    setData(username);
    return (true);
}

//Set username data in localstorage.
function setData(data) {
    return localStorage.setItem("username", JSON.stringify(data));
}

//Validate password to match expression of at least 1 lowercase &  1 uppercase alphabetical character & atleast 1 numeric character.
function validatePassword(inputTxt) {
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (inputTxt.match(passw)) {
        return true;
    } else {
        alert("Lösenordet måste bestå av minst 8 tecken, innehålla minst en stor bokstav & en liten bokstav samt ett nummer.");
        return false;
    }
}

//Validate email to match a correct e-mailadress.
function validateEmail() {
    let email = document.getElementById("email").value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Vänligen skriv in en korrekt e-postadress");
        return false;
    }
    return (true);
}


//Send username data to file which echo the name with message.
function sendData() {
    encodeUsername = encodeURIComponent(username);
    let xhr = new XMLHttpRequest();
    var url = "../PHP/index.php?username=" + encodeUsername;
    xhr.open("GET", url, true);
    xhr.onload = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
        } else {
            console.log("Error", xhr.statusText);

        }
    }
    xhr.send();


}

//When clickling oon hamburger icon toggle class responsive.
document.getElementById("hamburg").onclick = function() {
        document.getElementsByClassName("top-menu")[0].classList.toggle("responsive");

    }
    // Declare the init function
function init() {
    pushData();
}

// Register it as a listener to the onload event
window.onload = init();
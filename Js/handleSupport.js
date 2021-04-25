var firstname, lastname;

//When form submitted validate form input & show confirm.
function validateForm() {
    let inputText = document.getElementById("submit");
    //initiate this function when the ID is clicked
    inputText.onclick = function() {
        validate();


    }
}


//Show confirm message.
function showConfirmMessage() {
    firstname = normalization(firstname);
    lastname = normalization(lastname);
    textToDisplay = "Tack " + firstname + " " + lastname + " för ditt meddelande till kundsupport. Vi kommer att svara så fort vi kan.";
    showMessage($("#displayMessage"), textToDisplay);
}


//Validate the form input.
function validate() {
    const form = document.getElementById("supportForm");
    let inputs = form.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            alert("Vänligen fyll i alla nödvändiga fält.");
            return false;
        }
    }

    firstname = document.getElementById("fname").value;
    lastname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!validateEmail(email) || !checkString(firstname) || !checkString(lastname) || !phonenumber(phone)) {
        return false;
    }
    showConfirmMessage();
    showMessage($("#showMessage"), message);
    return (true);

}

//Show message from input.
function showMessage(html, message) {
    return $(html).html(message).delay(4000).show().fadeOut(300);
}

//Checks if input contains any number & return false if true.
function checkString(input) {
    let matches = input.match(/\d+/g);
    if (matches !== null) {
        alert("Input måste bestå av en sträng. Försök igen.");
        return false;
    }
    return (true);
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


//Check if input consist of a number with 10 digits.
function phonenumber(inputtxt) {
    let phoneno = /^\d{10}$/;
    if ((inputtxt.match(phoneno))) {
        return true;
    } else {
        alert("Du måste skriva in ett tiosiffrigt telefonnummer utan mellanslag eller bindestreck.");
        return false;
    }
}

//Method for setting first substring to uppbercase & rest to lowercase.
function normalization(input) {
    let normalized = "";
    input = input.toLowerCase();
    if (input.length > 0) {
        input = input.substring(0, 1).toUpperCase() + input.substring(1);

        normalized = input;

        return normalized;
    }
}

//When clickling oon hamburger icon toggle class responsive.
document.getElementById("hamburg").onclick = function(event) {
    document.getElementsByClassName("top-menu")[0].classList.toggle("responsive");
}

// Declare the init function.
function init() {
    validateForm();
}

// Register it as a listener to the onload event.
window.onload = init();
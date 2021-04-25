//Replace string with username set from localStorage.
function replaceString() {
    let strUsername = localStorage.getItem("username");
    let str = "Hej användare och välkommen till din profil!";
    if (strUsername !== null) {
        let newStr = str.replace("användare", strUsername);
        document.getElementById("h2-profile").innerHTML = newStr;
    } else {
        document.getElementById("h2-profile").innerHTML = str;
    }

}

//When clickling oon hamburger icon toggle class responsive.
document.getElementById("hamburg").onclick = function() {
    document.getElementsByClassName("top-menu")[0].classList.toggle("responsive");

}

// Declare the init function
function init() {
    replaceString();
}

// Register it as a listener to the onload event.
window.onload = init();
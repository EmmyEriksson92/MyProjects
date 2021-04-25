//If dropdown is showing on click of page hide dropdown.
const handleClick = (e) => {
    e.stopPropagation();
    $("#myDropdown").toggleClass("show");
    if ($("#myDropdown").hasClass("show")) {
        $(document).on("click", offClick);
    }
}


const offClick = () => {
    $("#myDropdown").toggleClass("show");
    $(document).off("click", offClick);
    handleClick();
}

//Show dropdown menu on click & hide on click of button.
function handleMenu() {
    $("#dropDown").on("click", handleClick);
}

//When clickling oon hamburger icon toggle class responsive.
document.getElementById("hamburg").onclick = function() {
    document.getElementsByClassName("top-menu")[0].classList.toggle("responsive");

}

// Declare the init function.
function init() {
    handleMenu();
}

// Register it as a listener to the onload event.
window.onload = init();
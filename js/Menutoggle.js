let menuToggle = document.getElementById("menutoggle__span");
let menu = document.getElementById("Palette__hiddendiv");
let menuElements = document.getElementsByClassName("toolsdiv__spanelement")


//Try to understand alterations
document.addEventListener("click", function(event) {
    // Checking if the event target matches menuToggle or any of the elements in menuElements
    if ((event.target === menuToggle || containsElement(menuElements, event.target)) && (menu.style.display === "none" || menu.style.display === "")) {
        menu.style.display = "block";
    } else if(!menu.contains(event.target)){
        menu.style.display = "none";
    }
});

function containsElement(collection, target) {
    // Converting the HTMLCollection to an array and checking if it contains the target element
    let array = Array.from(collection);
    return array.includes(target);
}



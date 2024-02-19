//I want to press space and it should generate 1 diffenret color in each palette div.

function getRandomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function applyColor(){
    let colorBox = document.getElementsByClassName("Palette__colorbox"); 
    let colorBoxArray = Array.from(colorBox);
    colorBoxArray.forEach(function(colorBox){
    colorBox.style.backgroundColor = getRandomColor();
    });
}


    document.addEventListener("keydown", function(event) {
        if (event.key === " ") {
            applyColor();
        }
    });



import { padLock, actionDivs, click, lock } from "./colorBoxTools.js";
//I want to press space and it should generate 1 diffenret color in each palette div.

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function applyColor() {
  let colorBox = document.getElementsByClassName("Palette__colorbox");
  let colorBoxArray = Array.from(colorBox);
  colorBoxArray.forEach(function (colorBox) {
    //this
    let existingSpan = colorBox.querySelector(".Palette__colorboxSpan");
    while (existingSpan) {
      colorBox.removeChild(existingSpan);
      existingSpan = colorBox.querySelector(".Palette__colorboxSpan");
    }
    //
    let divColor = getRandomColor();
    colorBox.style.backgroundColor = divColor;
    let colorBoxSpan = document.createElement("span");
    colorBoxSpan.textContent = divColor;
    colorBoxSpan.className = "Palette__colorboxSpan";
    colorBox.appendChild(colorBoxSpan);
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    applyColor();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  applyColor();
});

//To put the fontcolor when brightness is > || < 40.//

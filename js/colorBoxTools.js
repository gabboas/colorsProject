
//coppy to clipboard

//I want to click on the copyIcon(Palettes__colorcopy) to copy the innerText of the span(.Palette__colorboxSpan) in the same div.

document.addEventListener("click", function (event) {
  let copyButton = event.target.closest(".Palettes__colorcopy");
  if (copyButton) {
    copy(copyButton);
  }
});

function copy(copyButton) {
  let colorBox = copyButton.closest(".Palette__colorbox");
  let colorBoxSpan = colorBox.querySelector(".Palette__colorboxSpan");
  if (colorBoxSpan) {
    let colorCopy = colorBoxSpan.innerText;

    navigator.clipboard.writeText(colorCopy).then(
      function () {
        console.log("Text copied to clipboard");
      },
      function (err) {
        console.error("Unable to copy text to clipboard: ", err);
      }
    );
  } else {
    console.error(
      "No span with class .Palette__colorboxSpan found in the clicked element's hierarchy."
    );
  }
}

// I want to save the div background-colors and stop it to be changed by the function change color.

//If I click on the padlock it will change to a locked padlock and stop the function applyColor() / for this, Change class palette__colorbox to new class.

export let actionDivs = document.querySelectorAll(".Palettes__lockDiv");
Array.from(actionDivs).forEach(click);
export function click(actionDiv) {
  actionDiv.addEventListener("click", function (event) {
    padLock(actionDiv);
  });
}
export let lock = actionDivs[1].getAttribute("data-locked");
export function padLock(actionDiv) {
  let lock = actionDiv.getAttribute("data-locked");
  let unlocked = actionDiv.querySelector(".open_lock");
  let locked = actionDiv.querySelector(".locked");
  if (lock === "0") {
    unlocked.style.display = "none";
    locked.style.display = "block";
    actionDiv.setAttribute("data-locked", "1");
  } else if (lock === "1") {
    locked.style.display = "none";
    unlocked.style.display = "block";
    actionDiv.setAttribute("data-locked", "0");
  }
}

  

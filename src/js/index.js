import Slot from "./Slot.js";

const config = {
  inverted: false, // true: reels spin from top to bottom; false: reels spin from bottom to top
};

const slot = new Slot(document.getElementById("slot"), config);

let closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
  modal.style.display = "none";
};

let modal = document.getElementById("uselessFacts");
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

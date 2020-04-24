import Reel from "./Reel.js";
import Symbol from "./Symbol.js";

export default class Slot {
  constructor(domElement, config = {}) {
    Symbol.preload();

    this.isWinSpin = false;
    this.maxNextWin = 3;
    this.currentSpin = 0;
    this.winSpin = this.random(this.maxNextWin);
    this.playSound = new Audio("spin.mp3");
    this.winSound = new Audio("win.mp3");

    this.currentSymbols = [
      ["death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star"],
    ];

    this.nextSymbols = [
      ["death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star"],
      ["death_star", "death_star", "death_star"],
    ];

    this.modalContent = document.getElementById("modal-content");
    this.container = domElement;

    this.reels = Array.from(this.container.getElementsByClassName("reel")).map(
      (reelContainer, idx) =>
        new Reel(reelContainer, idx, this.currentSymbols[idx])
    );

    this.spinButton = document.getElementById("slot-trigger");
    this.spinButton.addEventListener("click", () => this.spin());
    this.modal = document.getElementById("uselessFacts");

    if (config.inverted) {
      this.container.classList.add("inverted");
    }

    this.facts = [
      "Average screen time 6 hour per day",
      "At NFQ/HTG I worked 5 months",
      "At NFQ/HTG I worked 99 days",
      "At NFQ/HTG I worked 789 hours",
      "At NFQ/HTG I have celebrated Christmas and Easter during my work",
      "I did 400 push up by loosing table tennis matches",
      "I have driven around 782 km to work",
      "I have have spent 96 Eur on fuel by driving to work",
      "I have drank 297 cups of coffee, average cup size 250ml, that's around 74.25 litre's of coffee",
      "I have drank 148 litre's of water",
      "I have attended 7 All Hands Meetings",
      "I have attended 3 Beer fridays Events",
      "I mage 134 commits, 5579 new lines and 4162 removed lines",
    ];

    this.modalContent.innerHTML = this.facts[
      Math.floor(Math.random() * this.facts.length)
    ];
  }

  debug() {
    console.log(this.currentSpin, this.winSpin, this.maxNextWin);
  }

  random(end) {
    return Math.floor(Math.random() * end);
  }

  resetNextWin() {
    this.currentSpin = 0;
    this.winSpin = this.random(this.maxNextWin);
    this.debug();
  }

  spin() {
    if (this.spinButton.disabled) {
      return false;
    }

    this.onSpinStart();

    return Promise.all(
      this.reels.map((reel) => {
        reel.renderSymbols(this.nextSymbols[reel.idx]);
        return reel.spin();
      })
    ).then(() => this.onSpinEnd());
  }

  onSpinStart() {
    this.modal.style.display = "none";
    this.spinButton.disabled = true;
    this.playSound.play();

    this.knobAnimation();
    this.checkOverSpin();

    this.currentSymbols = this.nextSymbols;
    this.isWinSpin = this.currentSpin === this.winSpin;

    this.checkWin();
  }

  onSpinEnd() {
    this.spinButton.disabled = false;
    this.setWin();
    this.currentSpin++;

    $("#slot-trigger").removeClass("slot-triggerDisabled");
  }

  knobAnimation() {
    $(".arm").animate({ top: "45px", height: "2%" });
    $(".arm .knob").animate({ top: "-40px", height: "60px" });
    $(".arm-shadow").animate({ top: "40px" }, 380);
    $(".ring1 .shadow, .ring2 .shadow").animate({ top: "50%", opacity: 1 });

    $("#slot-trigger").addClass("slot-triggerDisabled");

    $("img.slotSpinAnimation").show();

    setTimeout(function () {
      $(".arm").animate({ top: "-25px", height: "50%", overflow: "visible" });
      $(".arm .knob").animate({ top: "-40px", height: "60px" });
      $(".arm-shadow").animate({ top: "39px" });
      $(".ring1 .shadow, .ring2 .shadow").animate({ top: "auto", opacity: 0 });
    }, 500);
  }

  generateWinningTiles() {
    var winSymbol = Symbol.random();
    var combinations = [
      [
        [Symbol.random(), winSymbol, Symbol.random()],
        [Symbol.random(), winSymbol, Symbol.random()],
        [Symbol.random(), winSymbol, Symbol.random()],
        [Symbol.random(), winSymbol, Symbol.random()],
        [Symbol.random(), winSymbol, Symbol.random()],
      ],
    ];

    this.nextSymbols =
      combinations[Math.floor(Math.random() * combinations.length)];
  }

  checkWin() {
    if (this.isWinSpin) {
      this.generateWinningTiles();
    } else {
      this.nextSymbols = [
        [Symbol.random(), Symbol.random(), Symbol.random()],
        [Symbol.random(), Symbol.random(), Symbol.random()],
        [Symbol.random(), Symbol.random(), Symbol.random()],
        [Symbol.random(), Symbol.random(), Symbol.random()],
        [Symbol.random(), Symbol.random(), Symbol.random()],
      ];
    }
  }

  setWin() {
    var y1 = this.nextSymbols[0][1];
    var y2 = this.nextSymbols[1][1];
    var y3 = this.nextSymbols[2][1];
    var y4 = this.nextSymbols[3][1];
    var y5 = this.nextSymbols[4][1];

    // middle line
    if (y1 === y2 && y1 === y3 && y1 === y4 && y1 === y5) {
      for (var i = 0; i < 5; i++) {
        this.reels[i].reelContainer.children[0].children[0].classList.add(
          "blur"
        );
        this.reels[i].reelContainer.children[0].children[2].classList.add(
          "blur"
        );
      }

      this.resetNextWin();
      this.displayWin();
    }
  }

  checkOverSpin() {
    if (this.currentSpin > this.winSpin) {
      this.currentSpin = 0;
    }
  }

  displayWin() {
    this.modalContent.innerHTML = this.facts[
      Math.floor(Math.random() * this.facts.length)
    ];

    this.winSound.play();

    console.log("WIN");
    this.modal.style.display = "block";
  }
}

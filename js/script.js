let cardNumbers = [];
let randomNumber;
let turn = 2;
let countClickedCards = 0;

function reloadGame() {
  const resetButton = document.querySelector("#reset-btn");

  const reset = () => {
    window.location.reload();
  };
  resetButton.addEventListener("click", reset);
}

function Turn() {
  while (turn < 2) {
    turn -= 1;

    if (turn === 0) {
    console.log("The game is over");
    }
  }
}

function RandomCardValue() {
  window.addEventListener("load", function () {
    const targetCardValues = document.querySelectorAll(".card__face--back");
    let cardNumbers = [1, 1, 2, 2];
    let pair = [];
    let winningCombo1 = [1, 1];
    let winningCombo2 = [2, 2];
    for (let targetCardValue of targetCardValues) {
      let h2 = document.createElement("h2");
      targetCardValue.append(h2);
      for (let i = cardNumbers.length; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * i);
        h2.append(cardNumbers[randomNumber]);
      }
    }
  });
}

function checkCard() {
  let countClickedCards = 0;
  let cards = document.querySelectorAll(".card__inner");
  for (let card of cards) {
    card.addEventListener("click", function () {
      card.classList.toggle("is-flipped");
      countClickedCards += 1;

      if (countClickedCards === 2) {
        turn();
      }
    });
  }
}



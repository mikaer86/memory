function reloadGame() {
  const resetButton = document.querySelector("#reset-btn");

  const reset = () => {
    window.location.reload();
  };
  resetButton.addEventListener("click", reset);
}

function displayValue() {
  window.addEventListener("load", function () {
    let targetCardValues = document.querySelectorAll(".card__face--back");

    let cardNumbers = [1, 1, 2, 2];

    for (let targetCardValue of targetCardValues) {
      let h2 = document.createElement("h2");
      targetCardValue.append(h2);
      for (let i = cardNumbers.length; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * i);
        h2.append(randomNumber);
      }
    }
  });
}

function checkCard() {
  let cards = document.querySelectorAll(".card__inner");

  for (let card of cards) {
    card.addEventListener("click", function () {
      card.classList.toggle("is-flipped");
    });
  }
}

function pairCards() {}

displayValue();
checkCard();

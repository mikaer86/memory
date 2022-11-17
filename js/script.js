
let randomNumber;
let cardNumbers = ["1", "1", "2", "2"];

const statusBoardTurn = document.getElementById("turnStats");
const statusBoardWin = document.getElementById("winStats");
const statusBoardLosses = document.getElementById("lossesStats");
const flippedCards = document.querySelectorAll("is-flipped");


function reloadGame() {
  const resetButton = document.querySelector("#reset-btn");

  const reset = () => {
    window.location.reload();
  };
  resetButton.addEventListener('click', reset);
}

function RandomCardValue() {

  window.addEventListener("load", function () {

    const targetCardValues = document.querySelectorAll(".card__face--back");

    for (let targetCardValue of targetCardValues) {
      let h2 = document.createElement("h2");

      targetCardValue.append(h2);

      for (let i = cardNumbers.length; i < 5; i++) {

        let randomNumber = Math.floor(Math.random() * i);
        h2.setAttribute("value", `${cardNumbers[randomNumber]}`);
        h2.append(cardNumbers[randomNumber]);

      }
    }
  });
}

function compareCards() {

  for (let flippedCard of flippedCards) {

    flippedCard.addEventListener("click", () => {

      if (this.flippedCard === cardNumbers[0] || this.flippedCard.value === cardNumbers[1]) {


        console.log("You Won!");


      } else if (this.flippedCard.value === cardNumbers[2] || flippedCard.value === cardNumbers[3]) {


        this.flippedCard.body.style.backgroundColor = green;

        console.log("You Won!");

      } else {

        this.flippedCard.body.style.backgroundColor = red;

        console.log("You Lost");
      }
    });


  }



}


function clickCard(flippedCard, compareCards) {

  let cards = document.querySelectorAll(".card__inner");
  for (let card of cards) {
    let cardCount;
    card.addEventListener("click", function (cardCount) {

      while (card.classList.toggle("is-flipped")) {

        cardCount += 1;

        statusBoardTurn.innerHTML -= 1;

        if (cardCount === 2 || cardCount >= 0) {

          //compareCards(flippedCard);
          statusBoardTurn.innerHTML += 0;
          card.removeEventlistener("click", cardCount, false);

        }

        break;

      }

    });
  }
}

clickCard();
RandomCardValue();




let randomNumber;
let cardNumbers = ["1", "1", "2", "2"];

const statusBoardTurn = document.getElementById("turnStats");
const statusBoardWin = document.getElementById("winStats");
const statusBoardLosses = document.getElementById("lossesStats");



function reloadGame() {
  const resetButton = document.querySelector("#reset-btn");

  const reset = () => {
    window.location.reload();
  };
  resetButton.addEventListener('click', reset);
}

function RandomCard() {

  window.addEventListener("load", function () {

    const targetCardFaces = document.querySelectorAll(".card__face--back");

    for (let targetCardFace of targetCardFaces) {
      let h2 = document.createElement("h2");

      targetCardFace.append(h2);

      for (let i = cardNumbers.length; i < 5; i++) {

        let randomNumber = Math.floor(Math.random() * i);
        h2.setAttribute("value", `${cardNumbers[randomNumber]}`);
        h2.append(cardNumbers[randomNumber]);

      }
    }
  });
}

function compareCards(flippedCards) {

  flippedCards = document.querySelectorAll("is-flipped");

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


  let cardCount = 0;

  for (let card of cards) {

    card.addEventListener("click", function (cardCount) {

      while (card.classList.toggle("is-flipped")) {

        if (flippedCard) {

          cardCount += 1;

          statusBoardTurn.innerHTML -= 1;

        } if (cardCount === 2 || cardCount >= 0) {

          compareCards(flippedCard);
          statusBoardTurn.innerHTML += 0;
          card.removeEventlistener("click", cardCount, false);

        }

      }

    });
  }
}

clickCard();
RandomCard();



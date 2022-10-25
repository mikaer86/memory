let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");
let card4 = document.querySelector("#card4");
let cards = [card1, card2, card3, card4];
let pair = [];

function reloadGame() {
  const resetButton = document.querySelector("#reset-btn");

  const reset = () => {
    window.location.reload();
  };
  resetButton.addEventListener("click", reset);
}

function createCard() {
  let cardAmount = 6;
  let createDiv = document.createElement("div");
  let createCardInner = (createDiv.className = "card__inner");
  let createFaceFront = (createCardInner.className =
    "card__face card__face--front");
  let createFaceBack = (createFaceFront.className =
    "card__face card__face--back");
}
function shuffle() {
  let cardGenerator = createCard();
  let randomCard = Math.floor(Math.random() * cards.length);

  for (let i = 0; i <= randomCard.length; i++) {
    return i.append();
  }
}

function clickCard() {
  {
    card1.addEventListener("click", function (e) {
      card1.classList.toggle("is-flipped");

      e.stopPropagation();
    });

    card2.addEventListener("click", function (e) {
      card2.classList.toggle("is-flipped");

      e.stopPropagation();
    });

    card3.addEventListener("click", function (e) {
      card3.classList.toggle("is-flipped");

      e.stopPropagation();
    });

    card4.addEventListener("click", function (e) {
      card4.classList.toggle("is-flipped");

      e.stopPropagation();
    });
  }
}

shuffle();
clickCard();

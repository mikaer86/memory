let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");
let card4 = document.querySelector("#card4");
function compareCard() {
  let cards = [card1, card2, card3, card4];
  let pair = [];
  cards.forEach(function (card) {
    if (card === card1) {
      pair.push[card];
      card1.addEventListener("click", function (e) {
        card1.classList.toggle("is-flipped");

        e.stopPropagation();
      });
    } else if (card === card2) {
      card2.addEventListener("click", function (e) {
        card2.classList.toggle("is-flipped");

        e.stopPropagation();
      });
    } else if (card === card3) {
      card3.addEventListener("click", function (e) {
        card3.classList.toggle("is-flipped");

        e.stopPropagation();
      });
    } else if (card === card4) {
      card4.addEventListener("click", function (e) {
        card4.classList.toggle("is-flipped");

        e.stopPropagation();
      });
    }
  });
}

compareCard();

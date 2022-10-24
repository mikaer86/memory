"use strict";

let guess = Number(
  prompt(
    "welcome to the game Memory. choose a card between 1-4 (give input of 1 to 4)"
  )
);

let inputAnswer = guess.value;
let firstCard = 1;
let secondCard = 1;
let thirdCard = 2;
let fourthCard = 2;
let playerTurn = 2;
let choosenCards = [];

function gameTurn () {

  while(inputAnswer > 2){

    playerTurn -=  -1;

    break;

  }

}

function selectedCard() {

  if (inputAnswer === firstCard) {
    choosenCards.push(firstCard);

    guess =  Number(prompt("Good! Choose a second Card"));

  } else if (inputAnswer === secondCard) {
    choosenCards.push(SecondCard);
  
  } else{

    console.log('test');
  }
}

function 

selectedCard();

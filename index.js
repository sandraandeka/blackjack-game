let player = {
  name : "sandra",
  chips : 145
}
let cards = []
let sum = 0
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let buttonClick = document.querySelector("#buttonclick");
let playerEl = document.querySelector("#player-info");
playerEl.textContent = player.name + " : $ " + player.chips

 function getRandomCard () {
   let randomCard = Math.floor(Math.random()*13)+1;

   if(randomCard > 10) {
     return 10;
   }
   else if (randomCard === 1) {
     return 11;
   }
   else {
     return randomCard;
   }
 }

buttonClick.addEventListener("click", startGame);

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
   cards = [firstCard , secondCard];
   sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards :"

  for (let i = 0; i < cards.length; i++) {

    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "Do you want to draw another card !";
  } else if (sum === 21) {
    message = "  You have won";
    hasBlackjack = true
  } else {
    message = "your out of the game";
    isAlive = false
  }
  messageEl.textContent = message;
}
let newCardsEl = document.querySelector("#newcard-el").addEventListener("click", newCard);

function newCard() {

  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards)
    renderGame();
  }
}

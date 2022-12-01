let player = {
 Name: "Bonny",
 Chips: 200

}


let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false
let message = ""
let mesageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let card = getRandomCard();
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.Name + ": £" + player.Chips // Object Rendering 


function getRandomCard() {
let randomNumber = Math.floor( Math.random() * 13 ) + 1;
if (randomNumber > 10) {
return 10;

}else if (randomNumber === 1) {
    return 11;
    
} else {
    return randomNumber;
}



    }
   
    
function startGame() {

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]; //array 
    sum = firstCard + secondCard;
    isAlive = true;

    renderGame()

}


function renderGame() {

    cardsEl.textContent = "Cards: ";

    // Create a for loop that renders out all the cards instead of just two
    for ( let i = 0; i < cards.length; i++) {

        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum:" + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
        

    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true

    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
        mesageEl.textContent = message;
      ;


}


function newCard()  {
if ( isAlive === true && hasBlackJack === false) {
renderGame()   
sum += getRandomCard();
cards.push(card)
console.log("Drawing a new card from the deck!")


}

}
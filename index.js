
// Player 1
var randomDiceImage = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var randomNumber1 = Math.floor(Math.random() * randomDiceImage.length);
var player1 = randomDiceImage[randomNumber1];

document.querySelectorAll("img")[0].setAttribute("src", player1);


// Player 2
var randomDiceImage = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var randomNumber2 = Math.floor(Math.random() * randomDiceImage.length);
var player2 = randomDiceImage[randomNumber2];

document.querySelectorAll("img")[1].setAttribute("src", player2);


// Title Display
  if(randomNumber1 > randomNumber2){
     document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  } else if(randomNumber1 < randomNumber2){
     document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  } else {
     document.querySelector("h1").innerHTML = "Draw!";
      }

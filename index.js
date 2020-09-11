var dices = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];


var player1 = document.querySelector('img.img1');
var player2 = document.querySelector('img.img2');

x = Math.floor(Math.random() * dices.length);
y = Math.floor(Math.random() * dices.length);

console.log(x);
console.log(y);
player1.setAttribute('src', dices[x]);

player2.setAttribute('src', dices[y]);


function hasWon(x, y){
  if(x > y){
    return document.querySelector('h1').innerHTML = "Player1 Wins!"
  }
  else if(y > x){
    return document.querySelector('h1').innerHTML = "Player2 Wins!"
  }
  else if (x == y){
    return document.querySelector('h1').innerHTML = "Draw!"
  }
}

hasWon(x, y);

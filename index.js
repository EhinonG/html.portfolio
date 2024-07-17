
var randomNumber1 = Math.floor(6*Math.random()) + 1
var randomNumber2 = Math.floor(6*Math.random()) + 1
var randomDiceImage = "./images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";


//var image1 = document.querySelectorAll("img")[0];
//image1.setAttribute("src", randomDiceImage);

document.querySelector(".img1").setAttribute("src", randomDiceImage);

document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) { document.querySelector("h1").innerHTML =  "Player1 wins";}
else if ( randomNumber1 < randomNumber2) {document.querySelector("h1").innerHTML = "Player2 wins";}
else {document.querySelector("h1").innerHTML = "Draw"};

if (randomNumber1 > randomNumber2){document.querySelector("h3").innerHTML = "congrats winner"}
else if (randomNumber1 < randomNumber2) {document.querySelector("h3").innerHTML = "congrats winner"}
else {document.querySelector("h3").innerHTML = "ooops"};
var randomNumber1= Math.floor((Math.random()*6)+1);
var randomimage= "images/dice" + randomNumber1 + ".png";
var img = document.firstElementChild.lastElementChild.querySelector(".img1");
img.src = randomimage;

var randomNumber2= Math.floor((Math.random()*6)+1);
var randomimage= "images/dice" + randomNumber2 + ".png";
var img = document.firstElementChild.lastElementChild.querySelector(".img2");
img.src = randomimage;

if(randomNumber1 > randomNumber2){
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumber1 < randomNumber2){
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML = "draw";
}

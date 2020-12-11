
var random1=Math.floor(Math.random()*6)+1;
var randomDiceImg="images/dice"+random1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomDiceImg);


var random2=Math.floor(Math.random()*6)+1;
var randomDiceImg2="images/dice"+random2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomDiceImg2);

if(random1>random2)
{

  document.querySelector("h1").innerHTML="Player1 Wins The Game..!";
}
else if(random1===random2){
  document.querySelector("h1").innerHTML="match drawn..!";
}
else
{
  document.querySelector("h1").innerHTML="Player2 Wins The Game..!";
}

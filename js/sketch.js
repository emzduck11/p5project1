


let cart1;
let avocado;
let bread;
let bananas;
let burritos;
let chips;
let eggs;
let icecream;
let kombucha;
let milk;
let oats;
let sourworms;
let strawberries;


function preload(){
cart1= loadImage("images/cart1.png");
avocado= loadImage("images/avocado.png");
bread= loadImage("images/bread.png");
bananas= loadImage("images/bananas.png");
burritos= loadImage("images/burritos.png");
chips= loadImage("images/chips.png");
eggs= loadImage("images/eggs.png");
icecream= loadImage("images/icecream.png");
kombucha= loadImage("images/kombucha.png");
milk= loadImage("images/milk.png");
oats= loadImage("images/oats.png");
sourworms= loadImage("images/sourworms.png");
strawberries= loadImage("images/strawberries.png");


}
function setup() {

  createCanvas(windowWidth,windowHeight);

  rectMode(CENTER);
  imageMode(CENTER);



}

function draw() {
background(300,50,120);

image(cart1, windowWidth/2,windowHeight/2,400,400)
image (avocado,windowWidth/5,windowHeight/2,300,400)
image(bread, windowWidth/2,windowHeight/5,400,400)
image(bananas, windowWidth/4,windowHeight/2,400,400)
image(burritos, windowWidth/6,windowHeight/2,400,400)
image(chips, windowWidth/2,windowHeight/6,400,400)
image(eggs, windowWidth/4,windowHeight/2,400,400)
image(icecream, windowWidth/2,windowHeight/2,400,400)
image(kombucha, windowWidth/2,windowHeight/2,400,400)
image(milk, windowWidth/2,windowHeight/2,400,400)
image(oats, windowWidth/2,windowHeight/2,400,400)
image(sourworms, windowWidth/2,windowHeight/2,400,400)
image(strawberries, windowWidth/2,windowHeight/2,400,400)
}

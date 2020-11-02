
let mouseX = 0
let mouseY= 0
let ellipseX= 300
let ellipsY= 200

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

if(dist(image (avocado,windowWidth/5,windowHeight/2,300,400))<50){
text(" healthy",200,300);
}
if (dist(image(bread, windowWidth/2,windowHeight/5,400,400))<50){
  text ("unhealthy",500,400);

}
if (dist(image(bananas, windowWidth/4,windowHeight/2,400,400))<50){
  text("healthy",600,600);
}
if (dist(image(burritos, windowWidth/6,windowHeight/2,400,400))<50){
  text("unhealthy",700,700);
}
if (dist(image(chips, windowWidth/2,windowHeight/6,400,400))<50){
  text("unhealthy",100,100);
}
if (dist(image(eggs, windowWidth/4,windowHeight/2,400,400))<50){
  text("healthy",50,50)
}







function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

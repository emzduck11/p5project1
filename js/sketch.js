
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
let alfedo;
let beans;
let broccoli;
let butter;
let carrots;
let cashews;
let chicken;
let cinnamonbread;
let coffee;
let coke;
let cucumber;
let granola;
let honey;
let hummus;
let ketchup;
let pasta;
let peanutbutter;
let scooby;




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
alfedo= loadImage("images/alfedo.png");
beans= loadImage("images/beans.png");
broccoli= loadImage("images/broccoli.png");
butter= loadImage("images/butter.png");
carrots= loadImage("images/carrots.png");
cashews= loadImage("images/cashews.png");
chicken= loadImage("images/chicken.png");
cinnamonbread= loadImage("images/cinnamonbread.png");
coffee= loadImage("images/coffee.png");
coke= loadImage("images/coke.png");
cucumber= loadImage("images/cucumber.png");
granola= loadImage("images/granola.png");
honey= loadImage("images/honey.png");
hummus= loadImage("images/hummus.png");
ketchup= loadImage("images/ketchup.png");
pasta= loadImage("images/pasta.png");
peanutbutter= loadImage("images/peanutbutter.png");
scooby= loadImage("images/scooby.png");

}
function setup() {

  createCanvas(windowWidth,windowHeight);

  rectMode(CENTER);
  imageMode(CENTER);

button = createButton(img alt)

}

function draw() {
background(300,50,120);

image(cart1, windowWidth/2,windowHeight/2,300,300)
image (avocado,windowWidth/8,windowHeight/8,120,120)
image(bread, windowWidth/8,windowHeight/2.99,160,170)
image(bananas, windowWidth/3.25,windowHeight/8,100,100)
image(burritos, windowWidth/8,windowHeight/1.9,90,90)
image(chips, windowWidth/2,windowHeight/8,90,100)
image(eggs, windowWidth/3.25,windowHeight/2,140,100)
image(icecream, windowWidth/3.25,windowHeight/2.99,90,110)
image(kombucha, windowWidth/8,windowHeight/1.4,110,140)
image(milk, windowWidth/8,windowHeight/1.1,110,110)
image(oats, windowWidth/3.25,windowHeight/1.1,60,130)
image(sourworms, windowWidth/3.25,windowHeight/1.4,80,110)
image(alfedo, windowWidth/2,windowHeight/3.25,125,100)
image(beans, windowWidth/2,windowHeight/2,110,100)
image(broccoli, windowWidth/2,windowHeight/1.4,125,100)
image(butter, windowWidth/2,windowHeight/2.99,125,100)
image(carrots, windowWidth/2,windowHeight/1.1,125,100)
image(cashews, windowWidth/1.4,windowHeight/8,125,100)
image(chicken, windowWidth/1.4,windowHeight/2.99,125,110)
image(cinnamonbread, windowWidth/1.4,windowHeight/1.9,125,100)
image(coffee, windowWidth/1.4,windowHeight/1.4,100,120)
image(coke, windowWidth/1.4,windowHeight/1.1,125,100)
image(cucumber, windowWidth/1.1,windowHeight/8,125,50)
image(granola, windowWidth/1.1,windowHeight/2.99,100,125)
image(honey, windowWidth/1.1,windowHeight/1.9,100,100)
image(hummus, windowWidth/1.1,windowHeight/1.4,100,100)
image(ketchup, windowWidth/1.1,windowHeight/1.1,70,130)
image(strawberries, windowWidth/2,windowHeight/2.99,125,100)
}


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

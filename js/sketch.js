let ellipseX=0;
let ellipsY=0;

let pointX= 100;
let pointY= 200;

let cart;
let sourworms;
let kombucha;
let icecream;
let chips;
let avocado;
let bananas;
let bread;
let burritos;
let eggs;
let milk;
let oats;
let strawberries;


function preload(){
  cart = loadImage("../images/cart.png" );
  sourworms = loadImage("../images/sourworms.png" );
  kombucha = loadImage ( "images/kombucha.png" );
  icecream = loadImage ("images/icecream.png"  );
  chips= loadImage ("images/chips.png"  ) ;
  avocado= loadImage("images/avocado.png" );
  bananas= loadImage("images/bananas.png" );
  bread= loadImage("images/bread.png" );
  burritos= loadImage("images/burritos.png" );
  eggs=loadImage("images/eggs.png" );
  milk=loadImage("images/milk.png" );
  oats=loadImage("images/oats.png" );
  strawberries=loadImage("images/strawberries.png" );


}

function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
imageMode(CENTER);
rectMode(CENTER);

ellipseX = random( ellipseX,windowWidth);
ellipseY= random(ellipsY,windowHeight);


}

function draw() {
background(180,40,130)

}
image(cart, windowWidth/2, windowHeight/2,300,300);
image(sourworms,windowWidth/5,windowHeight/5,75,100);
image(kombucha,windowWidth/2,windowHeight/2,75,100);





  smooth();
  //style for ellipse
  noStroke();
  // put drawing code here to run in loop
  fill(30,100,50)
  ellipse(ellipseX,ellipseY,150,150);

  //style for ellipse
  noStroke();
  // put drawing code here to run in loop
  fill(255,186,255)
  ellipse(800,200,150,150);

  //style for ellipse
  noStroke();
  // put drawing code here to run in loop
  fill(255,186,255)
  ellipse(100,100,150,150);

  //style for ellipse
  noStroke();
  // put drawing code here to run in loop
  fill(255,186,255)
  ellipse(1200,500,150,150);

  //style for ellipse
  noStroke();
  // put drawing code here to run in loop
  fill(255,186,255)
  ellipse(800,600,150,150);

  //style for ellipse
  noStroke();
  // put drawing code here to run in loop
  fill(255,186,255)
  ellipse(1300,200,50,50);

  //style for ellipse
  noStroke();
  // put drawing code here to run in loop
  fill(255,186,255)
  ellipse(350,350,50,50);

  //style for ellipse
  noStroke();
  // put drawing code here to run in loop
  fill(255,186,255)
  ellipse(500,200,50,50);

  //style for ellipse
  noStroke();
  // put drawing code here to run in loop
  fill(255,186,255)
  ellipse(550,650,50,50);

  //style for ellipse
  noStroke();
  // put drawing code here to run in loop
  fill(255,186,255)
  ellipse(600,450,50,50);

  //style for ellipse
  noStroke();
  // put drawing code here to run in loop
  fill(255,186,255)
  ellipse(1000,50,50,50);


  //style for rectangle
//strokeWeight(20);
//  fill(50,200,120);
//  rect(800,300,200,300);

//style for triangle
//  stroke(40,200,100);
//  strokeWeight(20);
//   fill(50,30,120);
//  triangle(1200,50,1300,600,950,400);


  //style for point
  fill(186,255,198);
  stroke(186,255,198);
  strokeWeight(50);
  point(mouseX,mouseY);



  //line(30,200,800,600);


function windowResized( ){
  resizeCanvas(windowWidth,windowHeight);
}

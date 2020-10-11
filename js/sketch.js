function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);

background(180,60,220)

rectMode(CENTER);


}

function draw() {
  fill(120);
  point(500,300);
  // put drawing code here to run in loop
  ellipse(300,500,150,150);

  fill(50,200,120);
  rect(800,300,200,300);

  fill(50,30,120);
  triangle(1200,50,1300,600,950,400);


}

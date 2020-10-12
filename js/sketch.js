function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);

background(180,60,220);

rectMode(CENTER);


}

function draw() {
  smooth();

  //style for point
  fill(120);
  stroke(40,200,100);
  strokeWeight(10);
  point(mouseX,mouseY);


  //style for ellipse
  noStroke();
  // put drawing code here to run in loop
  ellipse(300,500,150,150);


  //style for rectangle
stroke(100,255,80);
strokeWeight(20);
  fill(50,200,120);
  rect(800,300,200,300);

//style for triangle
  stroke(40,200,100);
  strokeWeight(20);
   fill(50,30,120);
  triangle(1200,50,1300,600,950,400);

  print(mouse);


}

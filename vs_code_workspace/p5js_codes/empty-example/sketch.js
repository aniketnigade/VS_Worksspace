function setup() 
{
  // put setup code here
  createCanvas(480, 270);
}

function draw()
{
  // background
  background(200, 200, 0);
  ellipseMode(CENTER);
  rectMode(CENTER);

  // body
  fill(255, 0, 0);
  rect(240, 145, 20, 100);

  // head
  fill(0, 0, 255, 100);
  ellipse(240, 140, 50, 50);

  // eyes
  fill(0, 255, 0);
  ellipse(230, 130, 10, 10);
  ellipse(250, 130, 10, 10);


  //legs
  line(230, 195, 220, 205);
  line(250, 195, 260, 205);
}
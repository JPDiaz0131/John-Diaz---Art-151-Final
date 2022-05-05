function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(191, 191, 191);
  
  fill(230, 225, 225)
  rect(0, 300, width, 300);
  noStroke();
  
  fill(35, 36, 35);
  ellipse(230, 410, 200, 50);
  
  fill(194, 194, 194);
  ellipse(350, 430, 275, 100);
  
  fill(179, 179, 179);
  ellipse(350, 420, 265, 100);
  
  fill(194, 194, 194);
  ellipse(350, 420, 200, 50);
  
  fill(179, 179, 179);
  ellipse(350, 415, 200, 50);
  
  fill(59, 64, 60);
  arc(350, 415, 175, 175, radians(180), radians(0));
  arc(350, 415, 175, 35, radians(0), radians(180));

  fill(111, 115, 111);
  circle(380, 360, 25);
  
  fill(199, 199, 199)
  ellipse(450, 525, 75, 50);
  ellipse(525, 500, 60, 40);
  ellipse(100, 520, 100, 70);

}
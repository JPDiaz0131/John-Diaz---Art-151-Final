let points = [];

function setup() {
  createCanvas(600, 600);
  
  for (let i = 0; i < 6; i++){
    points[i] = [];

    for(let j = 0; j < 5; j++) {
      points[i][j] = random(350, 450);
    }
 
  } 
}


function draw() {
  background(68, 179, 242);
  
  noStroke();
  fill(8, 74, 17);
  beginShape();
  vertex(0, height);
  for (let i = 0; i < 6; i++) {
    let x = i * 200
    vertex(x + 0, 350);
    vertex(x + 20, points[i][0]);
    vertex(x + 40, points[i][1]);
    vertex(x + 60, points[i][2]);
    vertex(x + 80, points[i][3]);
    vertex(x + 100, points[i][4]);
    vertex(x + 120, 350);
  }
  vertex( width, height);
  endShape(CLOSE);
  noLoop();
  
  stroke(3)
  fill(77, 191, 42);
  arc(0, 600, 200, 250, radians(180), radians(0));
  arc(250, 600, 550, 325, radians(180), radians(0));
  arc(475, 600, 500, 300, radians(180), radians(0));
  arc(150, 600, 500, 150, radians(180), radians(0));
  
  
  noStroke();
  
  fill(250, 250, 250, 225);
  circle(100, 100, 50);
  circle(125, 125, 75);
  circle(85, 125, 60);
  circle(135, 115, 65);
  circle(150, 120, 70);
  
  circle(400, 225, 50);
  circle(425, 215, 65);
  circle(385, 210, 60);
  circle(435, 230, 75);
  circle(445, 215, 65);
  
  circle(485, 115, 80);
  circle(470, 85, 50);
  circle(450, 100, 75);
  circle(495, 80, 60);
  
}
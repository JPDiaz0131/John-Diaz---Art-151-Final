let points = [];

function setup() {
  createCanvas(600, 600);
  
  for (let i = 0; i < 6; i++){
    points[i] = [];

    for(let j = 0; j < 5; j++) {
      points[i][j] = random(200, 300);
    }
 
  } 
 
}

function draw() {
  background(160, 230, 250);
  
  noStroke();
  fill(98, 129, 138);
  
  beginShape();
  vertex(0, height);
  for (let i = 0; i < 6; i++) {
    let x = i * 140
    vertex(x + 0, 200);
    vertex(x + 20, points[i][0]);
    vertex(x + 40, points[i][1]);
    vertex(x + 60, points[i][2]);
    vertex(x + 80, points[i][3]);
    vertex(x + 100, points[i][4]);
    vertex(x + 120, 200);
  }
  vertex( width, height);
  endShape(CLOSE);
  
  noLoop();
  
 fill(107, 160, 181);
 quad(25, 450, 150, 300, 250, 350, 300, 435);
  
 fill(107, 160, 181);
 quad(175, 400, 310, 315, 400, 325, 575, 400);
  
 fill(233, 238, 240)
 arc(400, 500, 800, 250, radians(180), radians(0));
  
 fill(233, 238, 240)
 arc(225, 550, 800, 300, radians(180), radians(0));
  
 fill(233, 238, 240)
 rect(0, 500, width, 200);
  
 fill(250, 250, 250);
 circle(500, 75, 75);
  

  
  
  
}
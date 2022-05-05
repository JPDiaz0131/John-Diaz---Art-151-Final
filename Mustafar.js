let points = [];

const Y_AXIS = 1;
const X_AXIS = 2;

function setup() {
  createCanvas(600, 600);
  
  for (let i = 0; i < 6; i++){
    points[i] = [];

    for(let j = 0; j < 5; j++) {
      points[i][j] = random(300, 400);
    }
 
  } 
}

function draw() {
  let c1 = color(242, 55, 27)
  let c2 = color(245, 96, 10);
  setGradient(0, 0, width, height, c1, c2,     X_AXIS);
  setGradient(0, 0, width, height, c1, c2,     Y_AXIS);
  noStroke();
  
  fill(59, 44, 36);
  
  beginShape();
  vertex(0, height);
  for (let i = 0; i < 6; i++) {
    let x = i * 200
    vertex(x + 0, 300);
    vertex(x + 20, points[i][0]);
    vertex(x + 40, points[i][1]);
    vertex(x + 60, points[i][2]);
    vertex(x + 80, points[i][3]);
    vertex(x + 100, points[i][4]);
    vertex(x + 120, 300);
  }
  vertex( width, height);
  endShape(CLOSE);
  noLoop();
  
  fill(59, 44, 36);
  rect(250, 300, 150, 100);
  
  fill(255, 133, 3);
  quad(310, 300, 285, 600, 335, 600, 315, 300);
  
  fill(255, 133, 3);
  rect(0, 475, width, 150);
  
  fill(0, 0, 0);
  quad(275, 300, 300, 200, 325, 200, 350, 300);
  
  fill(56, 56, 56);
  quad(265, 300, 300, 175, 305, 175, 305, 300);
  quad(360, 300, 325, 175, 320, 175, 320, 300);
  
  fill(36, 26, 21);
  arc(100, 550, 150, 100, radians(180), radians(0));
  arc(125, 550, 100, 250, radians(180), radians(0));
  arc(500, 575, 125, 225, radians(180), radians(0));
  
  
  
  
  
  
  
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

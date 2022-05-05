let points = [];

const Y_AXIS = 1;
const X_AXIS = 2;

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
  let c1 = color(171, 56, 10)
  let c2 = color(247, 101, 42);
  setGradient(0, 0, width, height, c1, c2,     X_AXIS);
  setGradient(0, 0, width, height, c1, c2,     Y_AXIS);
  noStroke();
  
  fill(255, 188, 102);
  circle(400, 350, 160, 160);
  
  fill(250, 152, 25);
  circle(400, 350, 150, 150);
  
  fill(89, 36, 14);
  
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
  
  fill(166, 94, 65);
  rect(0, 500, width, 200);
  
  fill(48, 25, 16);
  arc(100, 600, 200, 50, radians(180), radians(0));
  quad(50, 600, 80, 350, 95, 370, 125, 600);
  quad(95, 600, 105, 380, 120, 400, 150, 600);
  quad(0, 550, 0, 550, 100, 600, 0, 600);
  quad(400, 600, 450, 300, 460, 400, 480, 600);
  quad(450, 600, 490, 275, 500, 385, 570, 600);
  
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

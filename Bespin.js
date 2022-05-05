const Y_AXIS = 1;
const X_AXIS = 2;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  let c1 = color(227, 133, 18)
  let c2 = color(235, 115, 203);
  setGradient(0, 0, width, height, c1, c2,     X_AXIS);
  setGradient(0, 0, width, height, c1, c2,     Y_AXIS);
  noStroke();
  
  fill(107, 66, 99);
  rect(0, 500, width, 200);
  arc(50, 525, 200, 200, radians(180), radians(0));
  arc(150, 525, 150, 130, radians(180), radians(0));
  arc(275, 525, 100, 130, radians(180), radians(0));
  arc(290, 525, 150, 100, radians(180), radians(0));
  arc(425, 525, 200, 175, radians(180), radians(0));
  arc(525, 525, 175, 100, radians(180), radians(0));
  
  
  fill(94, 79, 91);
  quad(175, 150, 200, 125, 400, 125, 425, 150);
  quad(200, 120, 240, 105, 360, 105, 400, 120);
  quad(250, 100, 275, 90, 325, 90, 350, 100);
 
  fill(61, 51, 58);
  quad(175, 150, 187.5, 137.5, 412.5, 137.5, 425, 150);
  quad(175, 155, 275, 180, 325, 180, 425, 155);
  arc(300, 180, 50, 75, radians(0), radians(180));
  rect(295, 180, 10, 200);
  ellipse(300, 380, 25, 50);
  
  
  
  
  
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
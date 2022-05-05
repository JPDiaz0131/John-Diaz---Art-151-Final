const Y_AXIS = 1;
const X_AXIS = 2;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  let c1 = color(59, 142, 245)
  let c2 = color(200, 222, 250);
  setGradient(0, 0, width, height, c1, c2,     X_AXIS);
  setGradient(0, 0, width, height, c1, c2,     Y_AXIS);
  noStroke();
  
  fill(245, 104, 69);
  circle(300, 300, 500, 500);
  
  fill(245, 49, 49);
  circle(300, 300, 480, 480);
  
  fill(82, 82, 82);
  rect(100, 400, 400, 50);
  rect(115, 380, 375, 15);
  rect(130, 360, 350, 15);
  rect(145, 340, 325, 15);
  rect(160, 320, 300, 15);
  rect(175, 300, 275, 15);
  rect(190, 280, 250, 15);
  rect(215, 260, 200, 15);
  rect(215, 240, 200, 15);
  rect(215, 220, 200, 15);
  rect(275, 200, 75, 15);
  rect(275, 180, 75, 15);
  
  fill(36, 110, 50);
  rect(0, 450, width, 200);
  arc(50, 470, 150, 200, radians(180), radians(0));
  arc(100, 470, 150, 225, radians(180), radians(0));
  arc(160, 460, 150, 75, radians(180), radians(0));
  arc(325, 450, 150, 50, radians(180), radians(0));
  arc(225, 460, 125, 100, radians(180), radians(0));
  arc(425, 460, 135, 175, radians(180), radians(0));
  arc(475, 480, 200, 190, radians(180), radians(0));
  arc(550, 480, 200, 275, radians(180), radians(0));
  
  fill(19, 51, 5);
  arc(50, 600, 400, 200, radians(180), radians(0));
  arc(250, 600, 375, 300, radians(180), radians(0));
  arc(550, 600, 325, 250, radians(180), radians(0));
  
  
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
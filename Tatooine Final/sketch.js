const Y_AXIS = 1;
const X_AXIS = 2;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  let c1 = color(98, 157, 191)
  let c2 = color(212, 131, 177);
  setGradient(0, 0, width, height, c1, c2,     X_AXIS);
  setGradient(0, 0, width, height, c1, c2,     Y_AXIS);
  noStroke();
  
  fill(156, 120, 75);
  beginShape();
  vertex(0, 450);
  vertex(20, 475);
  vertex(35, 460);
  vertex(100, 450);
  vertex(200, 455);
  vertex(350, 452);
  vertex(450, 460);
  vertex(500, 462);
  vertex(555, 453);
  endShape();
  
  fill(61, 44, 23);
  quad(295, 400, 320, 390, 315, 410, 295, 410);

  fill(173, 142, 102);
  arc(100, 460, 400, 150, radians(180), radians(0));
  
  fill(173, 142, 102);
  arc(200, 455, 400, 100, radians(180), radians(0));
  
  fill(173, 142, 102);
  arc(275, 460, 400, 100, radians(180), radians(0));
  
  fill(173, 142, 102);
  arc(475, 480, 400, 150, radians(180), radians(0));
  
  fill(102, 80, 52);
  arc(100, 500, 400, 150, radians(180), radians(0));
  
  fill(102, 80, 52);
  arc(175, 490, 375, 160, radians(180), radians(0));
  
  fill(102, 80, 52);
  arc(325, 490, 375, 125, radians(180), radians(0));
  
  fill(102, 80, 52);
  arc(455, 495, 355, 115, radians(180), radians(0));
  
  fill(102, 80, 52);
  arc(555, 495, 355, 115, radians(180), radians(0));
  
  fill(230, 214, 151);
  circle(325, 280, 85);
  
  fill(252, 250, 187);
  circle(325, 280, 80);
  
  fill(242, 194, 104);
  circle(450, 350, 95);
  
  fill(237, 182, 78);
  circle(450, 350, 87.5);
  
  fill(156, 120, 75)
  rect(0, 453, 600, 250);
  
  fill(128, 103, 71)
  arc(300, 483, 25, 75, radians(270), radians(90));
  
  fill(128, 103, 71)
  rect(200, 445, 100, 75);
  
  fill(61, 44, 23)
  rect(200, 465, 100, 50);
  
  fill(61, 44, 23)
  arc(300, 490, 25, 50, radians(270), radians(90));

  fill(128, 103, 71)
  arc(150, 520, 250, 300, radians(180), radians(0));
  
  fill(61, 44, 23)
  arc(155, 520, 225, 285, radians(180), radians(0));
  
  fill(128, 103, 71)
  arc(165, 520, 100, 100, radians(180), radians(0));
  
  fill(61, 44, 23)
  arc(168, 520, 90, 95, radians(180), radians(0));
  
  fill(128, 103, 71);
  rect(10, 510, 325, 50);
  
  fill(61, 44, 23);
  rect(20, 512.5, 310, 40);
  
  
  
  
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

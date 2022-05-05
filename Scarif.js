const Y_AXIS = 1;
const X_AXIS = 2;


function setup() {
  createCanvas(600, 600);
}

function draw() {
   let c1 = color(14, 195, 199)
  let c2 = color(120, 240, 152);
  setGradient(0, 0, width, height, c1, c2,     X_AXIS);
  setGradient(0, 0, width, height, c1, c2,     Y_AXIS);
  noStroke();
  
  fill(151, 202, 204);
  arc(300, 250, 450, 450, radians(180), radians(0));
  arc(300, 260, 450, 450, radians(0), radians(180));
  
  fill(175, 223, 224);
  arc(305, 250, 425, 425, radians(180), radians(0));
  arc(305, 260, 425, 425, radians(0), radians(180));
  
  fill(113, 151, 153);
  circle(375, 150, 100);
  
  fill(143, 179, 181);
  circle(380, 150, 80);

  
  fill(34, 97, 179);
  rect(0, 300, width, 50);
  
  fill(41, 107, 194);
  quad(0, 400, 0, 350, 600, 350, 600, 600);
  
  fill(9, 43, 42);
  arc(475, 305, 100, 75, radians(180), radians(0));
  
  fill(250, 250, 250);
  quad(0, 390, 0, 390, 600, 590, 0, 600);
  
  fill(250, 250, 250);
  rect(550, 590, 50, 10);
  
   fill(209, 174, 105);
  quad(0, 400, 0, 400, 600, 600, 0, 600);
  
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

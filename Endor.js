const Y_AXIS = 1;
const X_AXIS = 2;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  let c1 = color(68, 173, 119)
  let c2 = color(120, 245, 132);
  setGradient(0, 0, width, height, c1, c2,     X_AXIS);
  setGradient(0, 0, width, height, c1, c2,     Y_AXIS);
  noStroke();
  
  fill(108, 189, 146);
  arc(100, 550, 500, 300, radians(180), radians(0));
  arc(450, 550, 575, 260, radians(180), radians(0));
  
  
  for (let i = 0; i <=width; i+=50) {
   let t = 70;
   let s = 120;
   fill(65, 138, 100);
   triangle(i, 550, i + t, 450, i + s, 550);
 }
  
  fill(65, 138, 100);
  rect(0, 550, width, 50);
  
  fill(17, 56, 36)
  rect(400, 425, 25, 150);
  arc(315, 325, 300, 300, 0, HALF_PI, CHORD);
  
 for (let i = 0; i <=width; i+=50) {
   let t = 50;
   let s = 100;
   fill(17, 56, 36);
   triangle(i, 600, i + t, 500, i + s, 600);
 }
  
  fill(9, 36, 22);
  rect(80, 300, 40, 300);
  triangle(0, 550, 100, 450, 200, 550);
  triangle(15, 500, 100, 400, 185, 500);
  triangle(30, 450, 100, 350, 170, 450);
  triangle(45, 400, 100, 300, 155, 400);
  triangle(60, 350, 100, 250, 140, 350);
  
  fill(159, 212, 184);
  arc(100, 100, 100, 100, radians(180), radians(0));
  arc(100, 105, 100, 100, radians(0), radians(180));
  
  fill(122, 161, 140);
  circle(120, 80, 25);
  
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

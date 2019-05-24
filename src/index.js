import Boundary from "./boundary";
import Particle from "./particle";

let objs = [];
let walls = [];

let particles;

window.preload = function() {};

window.setup = function() {
  createCanvas(400, 400);

  walls.push(new Boundary(-1, -1, -1, 401));
  walls.push(new Boundary(-1, -1, 401, -1));
  walls.push(new Boundary(-1, 401, 401, 401));
  walls.push(new Boundary(401, -1, 401, 401));

  for (var i = 0; i < 5; i++) {
    var x1 = random(width);
    var y1 = random(height);
    var x2 = random(width);
    var y2 = random(height);
    var b = new Boundary(x1, y1, x2, y2);
    objs.push(b);
    walls.push(b);
  }
  objs.push((particles = new Particle(createVector(100, 200))));
};

window.draw = function() {
  blendMode(BLEND);

  background(0);
  // particles.lookAt(mouseX, mouseY);
  particles.pos.x = mouseX;
  particles.pos.y = mouseY;
  particles.look(walls);
  objs.forEach(x => x.show());

  blendMode(MULTIPLY);
  fill(255, 0, 0);

  circle(30, 30, 20);

  fill(255);
  // var pt = particles.cast(objs[0]);
  // if (pt) {
  //   fill(255);
  //   ellipse(pt.x, pt.y, 8, 8);
  // }
};

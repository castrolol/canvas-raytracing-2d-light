import Ray from "./ray";

class Particle {
  constructor(pos) {
    this.pos = pos;
    this.rays = [];
    for (let i = 0; i < 360; i += 0.5) {
      this.rays.push(new Ray(pos, radians(i)));
    }
  }

  look(targets) {
    var vertexs = [];

    for (var i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i];
      let closest = null;
      let record = Infinity;
      for (var j = 0; j < targets.length; j++) {
        const target = targets[j];
        var pt = ray.cast(target);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }

      if (closest) {
        // line(this.pos.x, this.pos.y, closest.x, closest.y);
        // stroke(255, 100);
        vertexs.push(closest);
      }
    }

    if (vertex.length > 2) {
      beginShape();
      vertexs.forEach(v => vertex(v.x, v.y));
      endShape(CLOSE);
    }
  }

  show() {
    ellipse(this.pos.x, this.pos.y, 10);
  }
}

export default Particle;

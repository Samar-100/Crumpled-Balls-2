class DustBin {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      restitution: 0.3,
      friction: 1.0,
      density: 1.0,
    };
    this.body = Bodies.rectangle(x, y, width, height - 180, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/dustbingreen.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}

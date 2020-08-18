class Paper {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2,
    };
    this.body = Bodies.circle(x, y, (radius - 20) / 2, options);
    this.width = radius;
    this.height = radius;
    this.image = loadImage("images/paper.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
  }
}

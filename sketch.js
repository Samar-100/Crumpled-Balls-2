const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var paper;
var dustBin1, dustBin2, dustBin3;
var ground;

function preload() {}

function setup() {
  createCanvas(1250, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  dustBin1 = new DustBin(995, 550, 20, 200);
  dustBin2 = new DustBin(1115, 550, 280, 200);
  dustBin3 = new DustBin(1105, 550, 20, 200);
  ground = new Ground(800, height, 1600, 100);
  paper = new Paper(150, 200, 70);

  Engine.run(engine);
  keyPressed();
}

function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  paper.display();
  dustBin3.display();
  dustBin1.display();
  dustBin2.display();
  ground.display();

  drawSprites();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 135,
      y: -145,
    });
  }
}

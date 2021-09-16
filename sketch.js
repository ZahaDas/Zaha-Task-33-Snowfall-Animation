const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var snowBkgImg,snowBkg
var girl1, boy1

function preload() {
  snowBkgImg = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world

  ground = new Ground(600,415,1200,20);
  girl1 = new Girl (200,290,112,158.2);
  boy1 = new Boy (400, 290, 78.9, 124.7);

  snow1 = new Snow (690,200,20,20);
  snow2 = new Snow (530,200,10,10);
  snow3 = new Snow (540,200,30,30);
  snow4 = new Snow (310,200,20,20);
  snow5 = new Snow (30,200,20,20);
  snow6 = new Snow (120,200,20,20);

  snow7 = new Snow (675,200,40,40);
  snow8 = new Snow (600,200,10,10);
  snow9 = new Snow (510,200,30,30);
  snow10 = new Snow (320,200,20,20);
  snow11 = new Snow (9,200,20,20);
  snow12 = new Snow (100,200,20,20);
}

function draw() {
  background(snowBkgImg);
  
  girl1.display();
  boy1.display();

  
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();

  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();

  drawSprites();
  Engine.update(engine);
}
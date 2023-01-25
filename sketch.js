
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);
	ellipseMode(RADIOS);

}
	//Create the Bodies Here.
var plane_options{

isStatic=true

}

	Engine.run(engine);
  var ball_options={
	restitution :0.50
	frictionAir:0.04
  }

bola = Bodies.circle(100,10,30 ,ball_options)
World.add(word,ball);

function draw() {
 
  background(0);
  Engine.update(engime)
  drawSprites();
 
}




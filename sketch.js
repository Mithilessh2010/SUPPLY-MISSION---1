var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	// loading the images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	// creating all sprites
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("peru");

	// Creating Engine
	engine = Engine.create();
	world = engine.world;
	// Making the package bounce
	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.8});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	// making the ground
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true});
	World.add(world, ground);	
	// running the engine
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  // making the package postition the same as the helicopter
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
 
}
// saying if down arrow key is pressed then package drops
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var spriteDustbin;
var dustbinImage;

var paperImage;

function preload()
{
	
	dustbinImage = loadImage("dustbingreen.png");
	paperImage = loadImage("paper.png");

}

function setup() {
	 createCanvas(1200, 500);


	 engine = Engine.create();
	 world = engine.world;

	 spriteDustbin = createSprite(1000, 340);
	 spriteDustbin.addImage(dustbinImage);
	 spriteDustbin.scale = 0.6;

	 //Create the Bodies Here.

	 ground1 = new Ground();

	 dustbinRect1 = new dustbin(1000, 430, 150, 20);
	 dustbinRect2 = new dustbin(930, 330, 20, 200);
	 dustbinRect3 = new dustbin(1070, 330, 20, 200);

	 var paper_options =
	 {
		
		restitution: 0.3,
		isStatic:false,
		density:1.2,
		friction:0.5

	
	 }

	 paper = Bodies.circle(200,430,43, paper_options);
     World.add(world,paper);


	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  ground1.display();

  imageMode(RADIUS);
  fill("pink")
  image(paperImage, paper.position.x, paper.position.y, 50, 50);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.applyForce(paper, paper.position, {x:330, y:-400});
	   
	 }
   }


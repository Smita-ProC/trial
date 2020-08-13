
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper, dustbin_l, dustbin_r, dustbin_b;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	dustbin_bSprite=createSprite(1250, 670, 250 ,15);
	dustbin_bSprite.shapeColor=color(255)

	dustbin_lSprite=createSprite(1125, 603, 15, 150);
	dustbin_lSprite.shapeColor=color(255)

	dustbin_rSprite=createSprite(1375, 603, 15, 150);
	dustbin_rSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	dustbin_b = Bodies.rectangle(1250, 670, 250, 15, {isStatic:true});
	World.add(world, dustbin_b);

	dustbin_l = Bodies.rectangle(1125, 603, 15, 150, {isStatic:true});
	World.add(world, dustbin_l);

	dustbin_r = Bodies.rectangle(1375, 603, 15, 150, {isStatic:true});
	World.add(world, dustbin_r);

	

	//Create the Bodies Here.
	ground = new Ground(width/2,700,width,10);
	paper = new Paper(50,600,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


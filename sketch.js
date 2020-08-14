var paperObject,ground, side1, side2, side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperImg, dustbinImg;

function preload(){
    paperImg = loadImage("paper.png");
    dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1 = Bodies.rectangle(600,635,200,1,{isStatic:true});
	World.add(world, side1);

	side2 = Bodies.rectangle(500,500,20,300,{isStatic:true});
	World.add(world, side2);

	side3 = Bodies.rectangle(700,500,20,300,{isStatic:true});
	World.add(world, side3);
	
	ground = Bodies.rectangle(400, 650, 800, 20 , {isStatic:true} );
 	World.add(world, ground);
	
	paperObject = Bodies.circle(200 , 600 , 22, {isStatic:false, restitution:0.3, friction:0.5, density:1.2});
	World.add(world, paperObject);
	

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(200);
 
  fill(0,255,0);
  rectMode(CENTER)
  rect(side1.position.x,side1.position.y,200,20);
   imageMode(CENTER)
   image(dustbinImg, 600, 490)
  

   //fill(0,0,255);
   imageMode(CENTER);
   image(paperImg, paperObject.position.x,paperObject.position.y, 60, 60);
   

  // rectMode(CENTER)
  // rect(side2.position.x,side2.position.y,20,300);

  // rectMode(CENTER)
  // rect(side3.position.x,side3.position.y,20,300);
  
  fill(255,0,0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject, paperObject.position,{x:60,y:-105});
	 }
}
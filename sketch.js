
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	paperObj = new Paper(300,650,55)
	dustbinObj=new dustbin(1200,650);
	

	Engine.run(engine);
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:60,y:-67})
   
	}
   }
   


function draw() {
  rectMode(CENTER);
  background(240);
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}


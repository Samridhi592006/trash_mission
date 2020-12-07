
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,dustbin1,ground1


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ground1=new ground(600,690,1200,20);
     dustbin1=new dustbin(600,400,200,30)
	paper1=new paper(100,200,50,50);
	
  }
	
	


function draw() {
	background("white")
	Engine.update(engine);
  ground1.display();
 dustbin1.display();

  paper1.display();
  keyPressed()

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,
			{x:2,
			y:-3});
	}
}



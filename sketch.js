const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
  World.add(world,roof);
    bob1 = new bob(260, 200, 35);
    World.add(world,bob1)
    rope1 = new rope(bob1, roof,-80,0);

    bob2 = new bob(330, 200, 35);
    World.add(world,bob2)
    rope2 = new rope(bob2,roof, -40, 0);

    bob3 = new bob(400, 200, 35);
    World.add(world,bob3)
    rope3 = new rope(bob3, roof, 0, 0);

    bob4 = new bob(470, 200, 35);
    World.add(world,bob4)
    rope4 = new rope(bob4, roof, 40, 0);

    bob5 = new bob(590, 100, 35);
    World.add(world,bob5)
    rope5 = new rope(bob5, roof, 80, 0);

  World.add(world,rope1)
	World.add(world,rope2)
	World.add(world,rope3)
	World.add(world,rope4)
	World.add(world,rope5)


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  ball1.display();

  rope2.display();
  ball2.display();

  rope3.display();
  ball3.display();

  rope4.display();
  ball4.display();

  rope5.display();
  ball5.display();
  //create ellipse shape for multiple bobs here
  rectMode(CENTER);
  fill(200, 200, 200);
  stroke("white");
  rect(400, 80, 375, 50);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
  if(keycode ==UP_ARROW){
    Matter.Body.applyForce(bob1,bob1.postion,{x:-50,y:-50})
  }
}


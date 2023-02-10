
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var plane;
var block1, block2;
var rotator1, rotator2, rotator3;

var angle1 = 20;
var angle2 = 30;
var angle3 = 50;

var particles = []

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options ={
		isStatic: true
	}
	plane = Bodies.rectangle(400,700, width, 20, plane_options);
	World.add(world,plane);

	var block_options ={
		isStatic: true
	}
	
	block1 = Bodies.rectangle(200,580, 100, 25, block_options);
	World.add(world, block1);

	block2 = Bodies.rectangle(600, 580, 100,25, block_options);
	World.add(world,block2);


	rotator1 = Bodies.rectangle(400,200, 200, 20, block_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(400,200, 200, 20, block_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(400,200, 200, 20, block_options);
	World.add(world,rotator3);


	var particle_options ={
		restitution: 0.4,
		friction:0.02
	}

	for(var i = 0; i < 20; i++){
	var particle = Bodies.circle(400,10,10, particle_options);
	World.add(world,particle);
	particles.push(particle);
	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

  Engine.update(engine);
  fill("green");
  rect(plane.position.x,plane.position.y, width,20);

  fill("red");
  rect(block1.position.x, block1.position.y, 100,25);
  rect(block2.position.x, block2.position.y, 100,25);

  
  Body.rotate(rotator1, angle1);
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle1);
  rect(0,0,200,20);
  pop();
  angle1 += 1.9;

  Body.rotate(rotator2, angle2);
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0,0,200,20);
  pop();
  angle2 += 2.6;

  Body.rotate(rotator3, angle3);
  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect(0,0,200,20);
  pop();
  angle3 += 5.9;

  ellipseMode(RADIUS);


  for(var i = 0; i < particles.length; i ++){
	ellipse(particles[i].position.x, particles[i].position.y, 10,10);
  }

  

  drawSprites();
 
}




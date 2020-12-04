
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {                                                           
	createCanvas(600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	
//isstatic,restitution,friction,density
drop1 = new Drop(10,724)
drop2 = new Drop(151,424)
drop3 = new Drop(8,421)
drop4 = new Drop(2,743)
drop5 = new Drop(131,102)
drop6 = new Drop(382,543)
drop7 = new Drop(130,786)
drop8 = new Drop(229,243)
drop9 = new Drop(378,726)
drop10 = new Drop(104,141)
drop11 = new Drop(267,232)
drop12 = new Drop(136,523)
drop13 = new Drop(246,548)
drop14 = new Drop(399,699)
drop15 = new Drop(111,75)
batman = new Umbrella(200,500)
	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);
  background(225);
  drop1.display()
  drop2.display()
  drop3.display()
  drop4.display()
  drop5.display()
  drop6.display()
  drop7.display()
  drop8.display()
  drop9.display()
  drop10.display()
  drop11.display()
  drop12.display()
  drop13.display()
  drop14.display()
  drop15.display()
  batman.display()
  
 
}



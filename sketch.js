const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2;
var pig1;

var bird1;
var log1
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,380,1200,10)
    box1 = new Box(700,320,70,70);
   
    box2= new Box(920,320,70,70)
    pig1= new pig(810,320,)
   
    log1= new log(810,260,300,PI/2)

    box3 = new Box(700,240,70,70);
   
    box4= new Box(920,240,70,70)
    pig2= new pig(810,240,)
   
    log2= new log(810,180,300,PI/2)
    box5= new Box(810,160,70,70)
    log3= new log(760,120,150,PI/7)
    log4= new log(870,120,150,PI/-7)
    bird1= new bird(40.200)

}


function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   ground.display();
   pig1.display();
   box2.display();

   log1.display();
   box3.display();
   log2.display();
   box4.display();
   pig2.display();
   log3.display();
   log4.display();
   box5.display();
   bird1.display();
}

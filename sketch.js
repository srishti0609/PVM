const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var ship,shipImg;
var man;
var islands;
var sharkImg;

function Preload(){
  
   shipImg=loadImage("images/ship.jpg");
   manImg=loadImage("images/man,jpg");
   
}

function setup(){
    var canvas = createCanvas(displayWidth-10,displayHeight-10);
    engine = Engine.create();
    world = engine.world;
    
    ship=image(shipImg,displayWidth/2,displayHeight/2);
    World.add(world.ship);
    man=image(manImg,ship.position.x,ship.position.y,50,50);
    World.add(world,man);
    Matter.body.setPosition(man,{x:ship.position.x,y:ship.position.y});

    //man.addImage("man",manImg);
    s1=new Shark(displayWidth-100,displayHeight-100);
    s2=new Shark(displayWidth-100,displayHeight-80);
    s3=new Shark(displayWidth-100,displayHeight-60);
    s4=new Shark(displayWidth-100,displayHeight-40);

    s5=new Shark(displayWidth-300,displayHeight-20);
    s6=new Shark(displayWidth-300,displayHeight-40);

    
}

function draw(){
    background(136,231,250);
 if(keyIsDown(UP_ARROW)){
     man.distance+=10;
     man.x+=10;
 }
 if(keyIsDown(DOWN_ARROW)){
     man.distance-=10;
     man.x-=10;
 }
 if(keyIsDown(LEFT_ARROW)){
     man.y=-10;
 }
 if(keyIsDown(RIGHT_ARROW)){
     man.y+=10;
 }
 ship.display();
 man.display();
 s1.display();
 s2.display();
 s3.display();
 s4.display();
 s5.display();

}
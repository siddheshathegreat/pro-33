const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;



var backGround,backgroundImage;
var ice = [];
var maxSnow = 100;



function preload() {
  backgroundImage = loadImage("snow2.jpg")
  
}


function setup() {
  createCanvas(1400,600);
  engine = Engine.create();
  world = engine.world;

  if(frameCount % 250 === 0){
    for(var i = 0; i < maxSnow; i++ ){
      ice.push(new Snow(random(0,1350), random(0,50)));

    }
    

  }

  
}

function draw() {
  Engine.update(engine)
  background(backgroundImage);
  for(var i = 0; i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
  }
 }
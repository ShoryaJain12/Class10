var trex, trex_running, edges;
var groundImage, ground;

function preload(){
 trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png")
 groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex=createSprite(50,150,10,50);
  trex.addAnimation("running",trex_running);
  //adding scale and position to trex
  trex.scale=0.4;
  ground=createSprite(300,195,600,30);
  ground.addImage("ground", groundImage)
  ground.velocityX=-5;
}


function draw(){
  //set background color 
  background("white");
  //logging the y position of the trex
  
  //jump when space key is pressed
  if(keyDown("space")) {
    trex.velocityY=-5;
    
  }
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  trex.velocityY=trex.velocityY+0.5
  //stop trex from falling down
  trex.collide(ground);
  drawSprites();
}
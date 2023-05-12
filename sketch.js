var boat, boatAni;
var sea, seaImg;

function preload(){

  boatAni = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(600,200,400,400);
  sea.addAnimation("sea1", seaImg);
  sea.scale = 0.3;
 

  boat = createSprite(200,225,50,50);
  boat.addAnimation("boatMov", boatAni);
  boat.scale = 0.25;


  
}

function draw() {
  background("blue");

  sea.velocityX = -3
  
  if(sea.x < -200){
  sea.x = 600;
  }

  drawSprites();
 
}
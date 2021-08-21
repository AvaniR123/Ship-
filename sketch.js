var ship, shipimage;
var sea, seaimage;

function preload(){
shipimage= loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
seaimage= loadImage("sea.png");
}


function setup(){
  createCanvas(400,400);
  background("blue");
  sea=createSprite(400,200);
  sea.addImage(seaimage);
  sea.velocityX= -3;
  sea.scale= 0.5;

  ship=createSprite(90,195,40,35);
  ship.addAnimation("movingship",shipimage);
  ship.scale= 0.25;


}


function draw() {
  background("white");
  sea.velocityX= -3;
  if (sea.x<0){
sea.x=sea.width/8;
  }
 drawSprites();
}
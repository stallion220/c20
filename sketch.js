var movingRect,fixedRect;


function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 50, 50, 50);
  movingRect.shapeColor="green";
  movingRect.velocityY=5;
  fixedRect=createSprite(400,350,50,50);
  fixedRect.shapeColor="green";
 fixedRect.velocityY=-5;
}

function draw() {
  background(0); 
if(movingRect.y-fixedRect.y===movingRect.hieght/2+fixedRect.height/2 && fixedRect.y-movingRect.y===movingRect.height/2+fixedRect.height/2){

  fixedRect.velocityY=-(fixedRect.velocityY)
  movingRect.velocityY=-(movingRect.velocityY)
}

  drawSprites();
}
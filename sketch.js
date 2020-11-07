var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(1000,100,50,50);
  rect1.shapeColor="green";
  rect1.velocityY=5;
  rect1.debug=true;

  rect2=createSprite(1000,800,50,50);
  rect2.shapeColor="green";
  rect2.velocityY=-5; 
  rect2.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "pink";
  fixedRect.shapeColor = "pink";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

bounceOff(rect1,rect2);

  
  drawSprites();
}
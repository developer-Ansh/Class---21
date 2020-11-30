var fixedRect, movingRect;
var car

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200,200,50,50);
  car.shapeColor = "white";
  car.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,car))
  {
    movingRect.shapeColor = "red";
    car.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    car.shapeColor = "white";
  }
  drawSprites();
}



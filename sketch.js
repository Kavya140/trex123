var fixedRect, movingRect;


function setup(){

    createCanvas(800,800);

    fixedRect = createSprite(400,400,50,50);
    fixedRect.shapeColor = "green";
    movingRect = createSprite(600,400,60,60);
    movingRect.shapeColor = "green";
}

function draw(){

  background("white");
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(movingRect.isTouching(fixedRect)){
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}


    drawSprites();
}
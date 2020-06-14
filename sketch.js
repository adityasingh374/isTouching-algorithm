var rect1 , rect2

function setup() {
  createCanvas(1000,850);
  rect1 = createSprite (500,500,50,30);
rect1.shapeColor = "green";
  rect2 = createSprite (300,200,30,50);
  rect2.shapeColor = "green";
}

function draw() {
  background("black");  

  rect1.x = mouseX;
  rect1.y = mouseY;

  if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2
    && rect2.x - rect1.x < rect1.width/2 + rect2.width/2
    && rect1.y - rect2.y < rect1.height/2 + rect2.height/2
    && rect2.y - rect1.y < rect1.height/2 + rect2.height/2){
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
  }else{
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  drawSprites();
}
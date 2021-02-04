var frect, mrect;//fixed rectangle and moving

function setup() {
  createCanvas(800,400);
  frect = createSprite(200, 200, 50, 80);
  frect.shapeColor = "blue";
  frect.debug = true;

  mrect = createSprite(400, 200, 50, 80);
  mrect.shapeColor = "blue";
  mrect.debug = true
}

function draw() {
  background(255,255,255);  

  mrect.x = World.mouseX;
  mrect.y = World.mouseY;

  /*When the two rectangles collide / touch each other?There is no space. The space between them becomes 0.
  Let us talk in terms of x coordinates. What is the horizontal distance between the two rectangles when both the rectangles are touching
  each other?fixedRect.width/2 + movingRect.width/2 This should be the same as (distance between the centres of two rectangles):
  movingRect.x - fixedRect.x.  If the distance is greater than this, then the objects have not collided.
  */
  /*
  console.log(mrect.x-frect.x);
  if(frect.width/2 + mrect.width/2 > mrect.x - frect.x && frect.width/2 + mrect.width/2 > frect.x - mrect.x  
    &&  frect.height/2 + mrect.height/2 > mrect.y - frect.y && frect.height/2 + mrect.height/2 > frect.y - mrect.y) {
    frect.shapeColor = "green";
    mrect.shapeColor = "green";
  }
  else{
    frect.shapeColor = "blue";
    mrect.shapeColor = "blue";
  }
  */
}
else{
  frect.shapeColor = "blue";
  mrect.shapeColor = "blue";
}

  drawSprites();
}

function collision() {
  
}
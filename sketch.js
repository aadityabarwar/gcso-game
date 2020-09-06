var wall,thickness;
var car,speed,weight;
function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(600,200,thickness, height/2);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  car.velocityX = speed;
}

function draw() {

background("black");  
 

  if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22550;
  if (deformation>180)
    {
      car.shapeColor=color(255,0,0) 
    }

if (deformation<180 && deformation>100)
  { 
    car.shapeColor=color(230,230,0)
  }
 if(deformation<100)
  {
      car.shapeColor=color(0,255,0)
  }
  }

  drawSprites();
}

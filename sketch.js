var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)

  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
}

function draw() {
  background("black");  

  if(wall.x - bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = rgb(255,0,0);
    }

    if (damage < 10) {
      wall.shapeColor = rgb(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(bullet,wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false;
}
  var bullet,wall,thickness;
  var speed,weight

  function setup() {
    createCanvas(800,400);

  thickness=rendom(22,83);

    bullet=createSprite(50, 200, 50, 50);
    wall=createSprite(1200, 200, thickness, weight/2);

    speed=rendom(223,321);
    weight=rendom(30,52);
  }


  function draw() {
    background(255,255,255); 
    
    if(wall.x-bullet.x<(bullet.weight+wall.weight)/2){

  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;
  if(deformation>180){

  bullet.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    bullet.shapeColor=color(230,230,0);
 
  }

if(deformation<100){
bullet.shapeColor=color(0,255,0);

}
  }




  drawSprites();
}

function hasCollided(Lbullet,Lwall){
bulletRightEdge.lbullet.x + lbullet.width;
wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge){

  return true
}

return false;

}

if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness);

if(damage<10){

  wall.shapeColor=color(255,0,0);

}
if(damage<10){
  wall.shapeColor=color(0,255,0);

}
}
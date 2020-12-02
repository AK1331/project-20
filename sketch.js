var car;
var wall;
var speed;
var weight;


function setup(){
  createCanvas(1500,400);
  speed=random(5,9);
  weight=random(400,1500);
  
  car=createSprite(300,200,20,20);
  car.shapeColor="white";
  car.velocityX=speed;

  wall=createSprite(1100,200,20,100);
  wall.shapeColor=color(80,80,80);

}

function draw(){
  background(0,0,0);

  if (wall.x-car.x < (car.width+wall.width)){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500;
    if (deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if (deformtion<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if (deformation<100){
      car.shapeColor=color(0,255,0)
    }
  }
  
  
  drawSprites();
}
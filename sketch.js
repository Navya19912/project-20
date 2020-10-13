var fixed, moving;



function setup() {
  createCanvas(800,800);
  fixed= createSprite(400, 100, 50, 80);
  fixed.shapeColor="red";
  fixed.velocityY= +5;

  fixed.debug=true;

  moving=createSprite(400,600,80,30);
  moving.shapeColor="black";
  moving.velocityY= -5;
  
}

function draw() {
  background("yellow");  
  bounceOff(fixed, moving);
  drawSprites();
}

function bounceOff(obj1,obj2) {
  if(obj1.x-obj2.x < obj2.width/2+ obj1.width/2
    && obj2.x-obj1.x < obj2.width/2 + obj1.width/2){
      obj1.velocityX=obj1.velocityX*(-1);
      obj2.velocityX=obj2.velocityX*(-1);
    }
  

    if ( obj1.y-obj2.y < obj2.height/2+ obj1.height/2
    && obj2.y-obj1.y < obj2.height/2 + obj1.height/2 ){
      obj1.velocityY=obj1.velocityY*(-1);
      obj2.velocityY=obj2.velocityY*(-1);
    }
  
}
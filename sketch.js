var gun,GUN;
var milkbottle,poison;
var MILKBOTTLE,POISON;
var bullet,BULLET;
var Score;
var HOSPITAL;
var pGroup;
var bGroup;
var wall;
var gameState;

function preload(){
  GUN=loadImage("GUN.png");
  MILKBOTTLE=loadImage("bottle.png");
  POISON=loadImage("poison bootle.png");
  BULLET =loadImage("bullet.png");
  
  //HOSPITAL=loadImage("hospital.png");

 
 
}


function setup() {
  createCanvas(displayWidth,550);

  gun=createSprite(displayWidth-100,250,30,30);
  gun.addImage(GUN);
  gun.scale=0.3;

//gun.setCollider("rectangle",0,0,gun.width,gun.height);
//gun.debug=true;

wall=createSprite(1260,260,10,1000);
wall.visible=false;


  

  Score=0;

  pGroup = new  Group();
  bGroup = new  Group();
  

  
}

function draw() {
  background("pink");

  gameState=1;

  fill("black");
  textSize(25);
  text("SCORE : " +Score,150,50)

  if(gameState=1){
    if(keyDown(UP_ARROW)){
      gun.y=gun.y-5;
    }
  
    
    if(keyDown(DOWN_ARROW)){
      gun.y=gun.y+5;
    }
  
    
   if(keyDown(32)){
    createBullet();
   }
  
   if(pGroup.isTouching(bGroup)){
     bGroup.destroyEach();
     pGroup.destroyEach();
     Score=Score+1;
   }
  
   if(pGroup.isTouching(wall)){
     pGroup.destroyEach();
     bGroup.destroyEach();
     Score=Score-2;
   }
   
  
  
  
    rand = Math.round(random(1,2));
    if(frameCount%80===0){
        bottleCreatedFrame=frameCount;
        bottle = createSprite(100,random(20,500), 10, 10);
        switch(rand){
            case 1: bottle.addImage(POISON);
            break;
            case 2: bottle.addImage(MILKBOTTLE);
            break; 
            default: break;
        }
        bottle.velocityX=4;
        bottle.scale=0.3;
        pGroup.add(bottle);
       
    }
  
  
   
  
    
  
  
    //text(mouseX+","+mouseY,mouseX,mouseY)
   
  
  
    drawSprites();
  }

  if(Score>2){
    gameState=2;
  }
  

  if(gameState===2){
  background("black");
  fill("yellow");
    textSize(30);
    text("Bravo ! YOU WIN ",500,200);
  }
  
  
  if(Score<-4){
    gameState=3;
  }

  if(gameState===3){
    background("black");
    fill("red");
      textSize(30);
      text("TRY AGAIN ! YOU LOOSE ",500,200);
    }




  

}

function createBullet() {
  var bullet = createSprite(gun.x,250,50,10);
  bullet.addImage(BULLET);
  bullet.scale=0.05;
 
  bullet.y=gun.y;
  bullet.velocityX = -3;
  //missile.lifetime = 200;
  bullet.scale = 0.05;
  bGroup.add(bullet);

 // bullet.setCollider("rectangle",0,0,bullet.width,bullet.height);
 // bullet.debug=true;

 
}






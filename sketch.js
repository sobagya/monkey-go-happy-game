
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,line;
var FoodGroup, obstacleGroup,spawnObstacle,bananaGroup;
var score,spawnBanana,bananaGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  monkey = createSprite(35,300,10,10) 
monkey.addAnimation("monkey",monkey_running)
  monkey.scale = 0.1;

  
   line = createSprite(300,330,600,10)
   line.x = line.width /2;
}
 


function draw() {
  createCanvas(400,400)
background("white")

   if(keyDown("space")&& monkey.y >= 159) {
        monkey.velocityY = -12;
     
   }
    monkey.velocityY = monkey.velocityY +0.8;
   monkey.collide(line)
   spawnBanana()
  spawnObstacle();
  if(obstacleGroup.isTouching(monkey)){
     line.velocityX = 0;
     monkey.velocityY = 0;
     obstacleGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
     bananaGroup.setLifetimeEach(-1);
}
 
  
 
 drawSprites();
}

function spawnObstacle(){
 if (frameCount % 120 === 0){ 
 obstacle = createSprite(400,310,20,20)
 obstacle.addImage(obstacleImage);
   obstacle.scale = 0.15
   obstacle.velocityX = -2;
   
   obstacle.lifetime = 300;
   

    obstacleGroup.add(obstacle);
                        
 }
                        }
                       
function spawnBanana(){
  if (frameCount % 140 === 0){ 
banana = createSprite(400,40,20,20)
  banana.addImage("running",bananaImage)
  banana.scale = 0.1;

 banana.velocityX = -2;
   
 banana.lifetime = 300;
   
   bananaGroup.add(banana);                     
 }
  
}





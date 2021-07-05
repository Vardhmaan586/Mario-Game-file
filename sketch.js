// Creating characters of the Game
var ground, groundImage;
var iground;
var mario, marioStandingImage, marioAnimation, marioAttacked;
var gameState = 0;
var victory,victoryImage;
var bowser;
var turtle;
var mushroom;
var obstaclesGroup;
var live = 2;

// Loading Images
function preload(){
 groundImage = loadImage("Images/Images for background and decoration/backg.jpg");
 marioStandingImage = loadAnimation("Images/Mario/km_0.png","Images/Mario/km_0.png");
 marioAnimation = loadAnimation("Images/Mario/km_4.png","Images/Mario/km_3.png","Images/Mario/km_2.png","Images/Mario/km_1.png")
 victoryImage = loadImage("Images/Images for background and decoration/Victory.png")
 bowser = loadAnimation("Images/Bowser/Bowser_1.png","Images/Bowser/Bowser_2.png");
 turtle = loadAnimation("Images/Turtle/kacsa_teknos_1.png","Images/Turtle/kacsa_teknos_1.png");
 mushroom = loadImage("Images/Mushroom/Mushroom_1.png");
 marioAttacked = loadAnimation("Images/Mario/mh.png")
}

function setup(){
//Creating Canvas
 createCanvas(displayWidth,displayHeight);
 
//Creating Invisible ground and giving its functions
 iground = createSprite(displayWidth,990,6000,8);
 iground.shapecolor = "black";
 iground.visible = false;

//Creating ground and giving its functions
 ground = createSprite(displayWidth,displayHeight,0,0);
 ground.addImage("GROUND",groundImage);
 ground.scale = 1.3;
 ground.velocityX = -8; 

//Creating the PC(Mario) and giving it the image
 mario = createSprite(75,965,20,20);
 mario.scale = 1.2;
 mario.addAnimation("Running",marioAnimation);

// Creating the group for the obstacles i.e turtle and bowser
 obstaclesGroup = new Group();
}

function draw(){
//giving color to the background
 background("black");
 
//giving velocity to mario
 mario.velocityY = 5;

// Colliding mario wth the invisible ground
 mario.collide(iground);

// giving the function to Mario and giving it the gravity
 if(keyDown("space")&&(mario.y>850)) {
    mario.y += -10;
 }   

// giving the function when the game is in gamestate 0
// if(gameState == 0){
   if(ground.x < 0){
    ground.x = ground.width/2;
  // }
 
//spawning obstacles
  spawnObstacles();

//Changing the gameste to 1 when it is touching obstacles
  if(mario.isTouching(obstaclesGroup)){
    gameState = 1;
  }
 }
  
// givng the function when the gamestate is in gamestate 1 
 /*if(gameState == 1){
    ground.velocityX = -8;
    mario.scale = 0.9;
    if(keyDown("space")) {
       mario.y += -6;
    }  
 }*/

// Giving the funtion to draw sprites
 drawSprites();

}

function spawnObstacles(){
//giving the function to spawn obstacles
 if(frameCount% 150 == 0){
    var obstacle = createSprite(displayWidth,965,20,20);
    var rand = Math.round(random(0,1));
    switch(rand){
      case 0 : 
              obstacle.addAnimation("BOWSER",bowser);
              break;
      case 1 :
              obstacle .addAnimation("TURTLE",turtle);
              break;
    }
   obstacle.velocityX = -8;
   obstacle .lifetime = 1000;
   obstaclesGroup.add(obstacle);
 }
}
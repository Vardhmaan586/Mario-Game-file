/*
Mario
Ground
*/ 

var ground;
var groundImage;
var mario;
var marioAnimation;

function preload(){
 groundImage = loadImage("Images/Images for background and decoration/backg.jpg");
 mario.
 marioAnimation = loadAnimation("Images/Mario/km_4.png","Images/Mario/km_3.png","Images/Mario/km_2.png","Images/Mario/km_1.png")
}

function setup(){
  createCanvas(600,200);
 ground = createSprite(1500,30,0,0);
 ground.addImage("ground",groundImage);
 ground.scale = 0.68;
 ground.velocityX = -5;


  mario = createSprite(20,145,20,20);
  mario.addAnimation("mario",marioAnimation);
  mario.scale = 0.6;
}

function draw(){
background("white");
//console.log(ground.x);
if(ground.x<0){
  ground.x = 1400;
}


drawSprites();
}
var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  

  zombie = loadImage("assets/zombie.png")

  heart3 = loadImage("assets/heart_3.png")
  heart2 = loadImage("assets/heart_2.png")
  heart1 = loadImage("assets/heart_1.png")

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image


  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   
player2 =  createSprite(displayWidth-500,displayHeight-350,50,50);
player2.addImage(zombie)
player2.scale = 0.2


player3 =  createSprite(displayWidth-50,displayHeight-750,50,50);
player3.addImage(heart1)
player3.scale = 0.2

player1 =  createSprite(displayWidth-90,displayHeight-750,50,50);
player1.addImage(heart1)
player1.scale = 0.2

player1 =  createSprite(displayWidth-10,displayHeight-750,50,50);
player1.addImage(heart1)
player1.scale = 0.2



}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
 }

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}

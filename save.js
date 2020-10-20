var monkey, monkey_running;
var ground;
var invisibleGround;
var enemy, grapes, banana;
var banana_img;
var obstacle_img;
var sheild;
var y;
var reward;
var monkeyIMG, grapesIMG, bananaIMG, enemyIMG;
var Monkey;


function preload() {

  reward_IMG = loadImage("fruitReward.jpg")
  monkeyIMG = loadImage("monkey.png")
  grapesIMG = loadImage("grapes.jpg")
  bananaIMG = loadImage("banana.png")
  enemyIMG = loadImage("robo.png")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  invisibleGround = createSprite(100, 560, displayWidth+900, 300)
  invisibleGround.visible = true;   
  invisibleGround.shapeColor = "brown";
  
  monkeyBody = createSprite(90, 370 , 60, 60);
  monkeyBody.addImage(monkeyIMG)
  monkeyBody.scale = 0.3;

  // assigning position the camera of the game
  camera.position.x = displayWidth/2;
  camera.position.y = y;

  ground = createSprite(400, 350, 800, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  ground.visible = false;
  
  //creating objects for obstacles
  enemy = createSprite(displayWidth+500, 300, 40, 40);
  enemy.addImage(enemyIMG)
  enemy.scale = 0.15

  banana = createSprite(displayWidth+500, 300, 40, 40);
  banana.addImage(bananaIMG)
  banana.scale = 0.1

  grapes = createSprite(displayWidth+500, 300, 40, 40);  
  grapes.addImage(grapesIMG)
  grapes.scale = 0.3

  sheild = createSprite(monkeyBody.position.x + 50, 370, 20, 35);
  sheild.shapeColor = "green"
  sheild.visible = false

}

function draw() {
  fill("white");
  textSize(15);
  
  for(var monkey in Monkey){
  y = displayHeight - Monkey[monkey].position.y
  camera.position.x = displayWidth/2;
  camera.position.y = y;
  }

  background(0, 153, 76);

  text("Save your Monkey by pressing UP_ARROW from the robot", 30, 20);
  text("If grapes approach the monkey , wait to feed him grapes", 30, 40)
  text("If bananas approach the monkey , wait to feed him bananas", 30, 60)


  monkeyBody.collide(invisibleGround);

  //creating grapes, enemy, and bananas for monkey

  if(frameCount%200 === 0){
    enemy = createSprite(displayWidth+500, 300, 40, 40);
    enemy.addImage(enemyIMG)
    enemy.scale = 0.15
  
    enemy.velocityX = -10
  } 
  if(frameCount%150 === 0){
    banana = createSprite(displayWidth+500, 300, 40, 40);
    banana.addImage(bananaIMG)
    banana.scale = 0.1

    banana.velocityX = -10
  }
  if(frameCount%270 === 0){
    grapes = createSprite(displayWidth+500, 300, 40, 40);  
    grapes.addImage(grapesIMG)
    grapes.scale = 0.3

    grapes.velocityX = -10
  }

  //to keep the monkey objects and backgrd in position

  if(camera.position.x < 300){
    enemy.velocityX = -10
}

  if(camera.position.x = 300){
    banana.velocityX = -13
}

  else{
    grapes.velocityX = -14
}

if(monkeyBody.isTouching(grapes)){
  grapes.visible = false;
}
if(monkeyBody.isTouching(enemy)){
  monkeyBody.destroy();
}

if(banana.isTouching(monkeyBody)){
  banana.visible = false;
}
if(monkeyBody.position.x === enemy.position.x && monkeyBody.position.y === enemy.position.y){
  monkeyBody.destroy();
} 

//moving objects using keys
  if(keyDown("UP_ARROW")){
    monkeyBody.velocityY = -15;
  }
  monkeyBody.velocityY = monkeyBody.velocityY + 0.6;
  
  if (keyDown("g")) {
    monkeyBody.position.x =  monkeyBody.position.x + 5;
  }

  if (keyDown("b")) {
    monkeyBody.position.x =  monkeyBody.position.x - 5;
  }

  drawSprites();
}


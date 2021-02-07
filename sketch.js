var player,witch,wizard,king,queen,dragon,fairy,princess,giant;
var gameState = "maze"
//wizard state, giants and witch state
var life_array,life,life2,life3;
function setup(){
    createCanvas(800,800)
player = createSprite(400,400,20,20)
witch = createSprite(350,400,20,20)
wizard = createSprite(300,400,20,20)
dragon = createSprite(150,400,20,20)
fairy = createSprite(100,400,20,20)
princess = createSprite(50,400,20,20)
giant = createSprite(0,400,20,20)
block = createSprite(0,800,70,50)
block2 = createSprite(800,380,600,20)
block3 = createSprite(750,280,700,20)
block4 = createSprite(90,800,700,20)
block5 = createSprite(110,750,700,20)
block6 = createSprite(130,700,700,20)
block7 = createSprite(200,200,700,20)
block8 = createSprite(200,200,20,800)
block9 = createSprite(700,500,900,20)
block10 = createSprite(800,600,1100,20)
life = createSprite(700,50,20,20)
life2 = createSprite(650,50,20,20)
life3 = createSprite(600,50,20,20)
obstacleGroup = new Group()
life.addImage(Life)
life2.addImage(Life)
life3.addImage(Life)
life_array = [life,life2,life3]

}
function preload(){
    Life = loadImage('Images/life-removebg-preview.png')
    
}


function draw(){
    background("blue");
    if(keyDown(UP_ARROW)){
        player.velocityY = -10
        player.velocityX = 0
    }
    if(keyDown(DOWN_ARROW)){
        player.velocityY = 10
        player.velocityX = 0
    }
    if(keyDown(RIGHT_ARROW)){
        player.velocityX = 10
        player.velocityY = 0
    }
    if(keyDown(LEFT_ARROW)){
        player.velocityX = -10
        player.velocityY = 0
    }
    edges = createEdgeSprites()
    player.bounceOff(edges)
    player.collide(block)
       player.collide(block2)
   player.collide(block3)
   player.collide(block4)
   player.collide(block5)
   player.collide(block6)
   player.collide(block7)
   player.collide(block8)
   player.collide(block9)
   player.collide(block10)

    if(player.isTouching(block10)){
        console.log("in line number 53");
        gameState= "wizard"
    }
    if(obstacleGroup.isTouching(player)){
        console.log("obstacle"+life_array.length)
        life_array.pop()
    }
   
    if(life_array.length===0){
        textSize(50)
        fill("red")
        text("GAME OVER",400,400)
    }
    
   if(player.isTouching(block)||player.isTouching(block2)||player.isTouching(block3)||player.isTouching(block4)||player.isTouching(block5)||player.isTouching(block6)||player.isTouching(block7)||player.isTouching(block8)||player.isTouching(block9)||player.isTouching(block10)){
       life_array.pop()
       console.log("obstacle1"+life_array.length)
       /*player.collide(block)
       player.collide(block2)
   player.collide(block3)
   player.collide(block4)
   player.collide(block5)
   player.collide(block6)
   player.collide(block7)
   player.collide(block8)
   player.collide(block9)
   player.collide(block10)*/
   }
   
   //if(obstacleGroup.collide(player)){}    
  if(gameState==="maze"){
      background("pink")
  //mazes
  //condition to change different levels, lives, gameOver Image,restart image,    
  } 
  else if(gameState==="wizard"){
      background("green")
  }
  else if(gameState==="lastStage"){

  }
  spawnObstacles()
 drawSprites();  

}
function spawnObstacles(){
    if(frameCount%60===0){
        obstacle = createSprite(random(0,800),random(0,800),30,30)
        obstacle.velocityX= random(-10,5)
        obstacle.velocityY = random(-10,2)
        obstacle.lifetime = 150
        obstacleGroup.add(obstacle)


    
    }
}
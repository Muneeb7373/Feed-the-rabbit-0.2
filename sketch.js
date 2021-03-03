var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  spawnApples();

  drawSprites();
}
function spawnApples(){
  if(frameCount % 80===0){
  apple=createSprite(Math.round(random(10,100)),100,25,25) ; 
  apple.velocityY=2
  console.log(apple.depth)
  apple.addImage(appleImg)
  apple.scale=0.1
  rabbit.depth=apple.depth;
  rabbit.depth=rabbit.depth+1  
}
}
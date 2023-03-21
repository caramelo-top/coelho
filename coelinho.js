var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 



 



}


  
function createRed(){
  redL = createSprite(random(50, 350),40,10,10);
  redL . addImage(redImg);
  redL .scale=0.07;
  redL . velocityY = 3;
  redL . ifetime  = 150;
}
  
function createOrange(){
  OrangeL = createSprite(random(50, 350),40,10,10);
  OrangeL . addImage(orangeImg);
  OrangeL .scale=0.07;
  OrangeL . velocityY = 3;
  OrangeL . ifetime  = 150;
}

  
function createApples(){
  apple = createSprite(random(50, 350),40,10,10);
  apple. addImage(appleImg);
  apple.scale=0.07;
  apple. velocityY = 3;
  apple. ifetime  = 150;
}


rabbit.x = world.mouseX;

function setup(){
  

  createCanvas(400,400);
   
 // mover o fundo
 garden=createSprite(200,200);
 garden.addImage(gardenImg);

 //criar sprite do coelho
 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg);



 

 


}


function draw() {
  background(0);



  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
 
  createRed();
  createOrange();
  createApples();
  

  var select_sprites = match.around(random(1,3));

  if(frameCount % 80 == 0){
   if (select_sprites == 1){
     createApples();
   } else if (select_sprites == 2){
     createOrange(); 
   }else {
     createRed();
    }
   }


}

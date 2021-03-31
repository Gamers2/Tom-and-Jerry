var background, cat, mouse;

function preload() {
    background= loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
    mouseImg1 = loadImage("mouse1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");

}

function setup(){
    createCanvas(1000,800);
    var Tom=createSprite(150,100,20,20);
    var Jerry=createSprite(250,200,20,20);
   Tom.addImage(catImg1);
   Jerry.addImage(mouseImg1);
}

function draw() {

    background(background);
  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      Tom.addAnimation("happyCat",catImg1);
      Tom.changeAnimation("hapyCat");

      Jerry.addAnimation("happyMouse", mouseImg1);
      Jerry.addAnimation("happMouse");
  }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){

  Jerry.addAnimation("mouseTeasing", mouseImg2);
  Jerry.changeAnimation("mouseTeasing");
  Jerry.frameDelay = 25;
  }

  if(keyCode === LEFT_ARROW);
  Tom.addAnimation("catRunning", catImg2);
  Tom.changeAnimation("catRunning");
  Tom.frameDelay = 25;
}

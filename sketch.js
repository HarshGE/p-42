var iss,spacecraft;
var hasDocked;


function preload(){

  
  sImg=loadImage('Docking-undocking/spacecraft1.png');
  s2Img=loadImage('Docking-undocking/spacecraft2.png')
  s3Img=loadImage('Docking-undocking/spacecraft3.png')
  s4Img=loadImage('Docking-undocking/spacecraft4.png')
issImg=loadImage('Docking-undocking/iss.png')
 bg=loadImage('Docking-undocking/spacebg.jpg')
}

function setup() {

  createCanvas(1600,800);
 iss= createSprite(300,130);
 iss.addImage(issImg);
 iss.scale=0.5;


 spacecraft=createSprite(285,240);
 spacecraft.addImage(sImg);
 spacecraft.scale=0.25;
}

function draw() {
 background(bg)
  var hasDocked=false;

if(!hasDocked){
  spacecraft.x=spacecraft.x+ random(-1,1);

  if(keyDown('UP_ARROW')){
    spacecraft.y=spacecraft.y-2;
    spacecraft.addImage(s2Img)
  }

if(keyDown("LEFT_ARROW")){
  spacecraft.x=spacecraft.x-2;
  spacecraft.addImage(s3Img)
}
if(keyDown("RIGHT_ARROW")){
  spacecraft.x=spacecraft.x+2;
  spacecraft.addImage(s4Img)
}
}



  drawSprites();
}
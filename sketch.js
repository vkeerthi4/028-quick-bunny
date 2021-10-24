var player;
var score=0;
var wormgroup;


function setup() {
  createCanvas(600,600);
 player=createSprite(40,550,30,30);
 wormgroup= new Group();
 
}

function draw() {
  background("black");
  stroke("red"); 
  noFill();
  ellipse(100,350,40,30);
  player.x= mouseX;
  player.y= mouseY;

  if(player.x<150 && player.x>90 && player.y<380 && player.y>320){
    text("no chitting!!",200,200)
    player.x=30;
    player.y=30;
  } 
genrateworms();

for(var i = 0;i<(wormgroup).length;i++){
  var temp = (wormgroup).get(i);
  if (player.isTouching(temp)){
    score++;
    temp.destroy();
    temp=null;
  }
}

  drawSprites();
 textSize(20);
  text("worms destroyed:"+score,350,50);
}
function genrateworms(){
if(frameCount % 30===0){
   console.log(frameCount);
   var worm=createSprite(100,350,40,5);
   worm.shapeColor="yellow";
    worm.velocityX=random(-4,4);
   worm.velocityY=random(-4,4);
   wormgroup.add(worm);

}
}


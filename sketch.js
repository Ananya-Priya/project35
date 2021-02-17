var balloon1,balloon;
var bg,balloonimg1,balloonimg2;

function preload(){
  bg=loadImage("bck.png");
  balloonimg1=loadAnimation("balloon1.png","balloon2.png","balloon3.png");
  balloonimg2=loadAnimation("balloon1.png","balloon2.png","balloon3.png");


}
function setup() {
  createCanvas(1500,700);

  database=firebase.database();
    balloon=database.ref("balloon/position");
    balloon.on("value",readposition);

  balloon1=createSprite(400, 200, 50, 50);
  balloon1.addAnimation('balloon1',balloonimg1)
}

function draw() {
background(bg);


    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
        balloon1.addAnimation('balloon1',balloonimg2)
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
        balloon1.addAnimation('balloon1',balloonimg2)
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
        balloon1.addAnimation('balloon1',balloonimg2)
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
        balloon1.addAnimation('balloon1',balloonimg2)
    }
  drawSprites();
}


function writePosition(x,y){
  database.ref("balloon/position").set({
      'x':position.x+x,
      'y':position.y+y
  })
}

function readposition(data)
{
position=data.val();
balloon.x=position.x;
balloon.y=position.y;
}
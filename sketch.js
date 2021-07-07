var boy, boy_running;
var ground, invisibleGround,invisibleGround2,groundImage;


function preload() {
    boy_running = loadAnimation("Runner-1.png", "Runner-2.png");
    groundImage = loadImage("path.png")
}
function setup() {
    createCanvas(400, 400);
    //create a ground sprite
    ground = createSprite(200,0);
    ground.scale=1.3
    ground.addImage("ground",groundImage);
    ground.velocityY = 10;

    //create a trex sprite
    boy = createSprite(200,340,20,50);
    boy.addAnimation("HI", boy_running);
    boy.scale = 0.07;

    
    invisibleGround = createSprite(410,189,30,600)
    invisibleGround2 = createSprite(0,189,30,600)
    invisibleGround.visible=0
    invisibleGround2.visible=0
}


function draw() {
   
    background(220);  
    if (ground.y > 475) {
     ground.y = 0
    }
    boy.x=mouseX
    boy.collide(invisibleGround);
    boy.collide(invisibleGround2);   
    drawSprites();
    
}

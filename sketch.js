const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, enemy1,enemy2;
var backgroundImg,platform;
var face, slingshot;
var bg = "sprites/bg1.png";
var score = 0;

var gameState = "onSling";

function preload() {

    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    
    enemy1 = new Enemy(810, 350);
    enemy2 = new Enemy(810, 220);
    log1 = new Log(810,260,300, PI/2);
    log2 =  new Log(810,180,300, PI/2);
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);
    face = new Face(200,50);
    slingshot = new SlingShot(face.body,{x:200, y:50});
    
}

function draw(){
    if(backgroundImg)
      background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();
    
    enemy1.display();
    enemy2.display();
    textSize(20);
    fill("black");
    text("Score:" + score,800,50);
    enemy2.score();
    
    log1.display();
    log2.display();
    log3.display();
    log4.display();

    face.display();
    
    platform.display();
    
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(face.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}
async function getBackgroundImage()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();

    //console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    //console.log(hour);
    if((hour>=06)&&(hour<=15))
    {
        bg = "bg1.png";
    }
    else
    {
        bg = "bg2.jpg";

    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

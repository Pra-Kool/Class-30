const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbitImg;

var rabbit
var buttonImg
var button

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbitImg = loadImage('Rabbit-01.png');
  buttonImg = loadImage('cut_btn.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rabbit = createSprite(400,620,30,30);
  rabbit.addImage(rabbitImg)
  rabbit.scale = 0.2

  button = createSprite(245,30, 30,30)
  button.addImage(buttonImg);
  button.scale = 0.07

  if(mousePressedOver(button)){
    drop();
  }

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,490,690);
  
  //button = createImg("cut_btn.png");
 // button.position(220,17);
 // button.size(50,50)
 // button.mouseClicked(drop)

  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

 drawSprites();
   
}

function drop(){
rope.break();
fruit_con.detach();
fruit_con = null;
console.log("hi")
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var stand1,stand2;


function setup() {
  createCanvas(800,400);

    //engine = Engine.create();
    //world = engine.world;
  
  polygon = Bodies.circle(50,200,50,{density : 1.0,restitution : 0.8,friction: 1.0,},6);
  
  
}
    
function draw() {
  background(0,0,0);  
  drawSprites();
}
const Body=Matter.Body;
const Bodies= Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var man,manImg;
var engine,world;

var sprite;

var rainArray;

var thunder;

var t1,t2,t3,t4;

var maxdrop=100;

function preload(){
    manImg=loadImage("walking_3.png");

    t1=loadImage("1.png");
    t2=loadImage("2.png");
    t3=loadImage("3.png");
    t4=loadImage("4.png");
}

function setup(){
   createCanvas(600,500)

   rainArray=[];


   engine = Engine.create();
   world = engine.world;

   sprite=createSprite(50,400,20,20);
   sprite.addImage(manImg);
   sprite.scale=0.2;

   man=Bodies.rectangle(40,350,30,20,{isStatic: true});
      World.add(world,man);

      thunder=createSprite(random(0,600),0,30,30);
      thunder.visible=false;
      //Body.scale(man,0.5,0.5);
   
}

function draw(){
    //background("cyan");
   background(1,0,1);
    Engine.update(engine);
    imageMode(CENTER);
    rectMode(CENTER);

    
    fill("white")
    rect(man.position.x,man.position.y,10,10);

    if(frameCount%100){
      for(var i=0; i<maxdrop; i+=10){
        rainArray.push(new Rain(random(0,500),0));
      }}

    for (var r=0; r<rainArray.length; r++){
      rainArray[r].display();
    
  }


  if(frameCount%100===0){
    thunder.visible=true;
    var r=random(1,4);
    
    if(r===1){
      thunder.addImage(t1);
    }
    else if(r===2){
      thunder.addImage(t2);
    }
    else if(r===3){
      thunder.addImage(t3);
    }
    else{
      thunder.addImage(t4);
    }
  }
  else{
    thunder.visible=false;
  }
 
  
  drawSprites();
}   


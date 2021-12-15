
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball
var end

function preLoad(){

}
  

function setup() {
  createCanvas(700,800);
  rectMode(CENTER)
  imageMode(CENTER)
  
  

  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution : 0,
    frictionAir:0.1
  }
  var star_options = {
    isStatic:true
  }
 
  ball=Bodies.circle(90,570,20,ball_options)
  World.add(world,ball)

  end = Bodies.rectangle(570,310,20,20,star_options)
  World.add(world,end)


  
  mazewall10 = new Ground(350,200,170,10)
  mazewall9 = new Ground(510,280,10,150)
  mazewall8 = new Ground(570,350,100,10)
  mazewall7 = new Ground(250,160,10,100)
  mazewall6 = new Ground(170,280,10,130)
  mazewall5 = new Ground(210,345,150,10)
  mazewall4 = new Ground(280,450,10,250)
  mazewall3 = new Ground(430,355,10,300)
  mazewall2 = new Ground(480,500,100,10)
  mazewall1 = new Ground(150,500,130,10)

  boundary3 = new Ground(350,110,550,10)
  boundary2 = new Ground(620,350,10,470)
  boundary1 = new Ground(80,350,10,470)

  ground = new Ground(350,580,530,10)
  


  
  
  

}


function draw() 
{
  
 rectMode(CENTER)
  background(51);
  
  
  Engine.update(engine);
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(end.position.x,end.position.y,20,20)



if(collide(ball,end)==true){
  text("You Win!!!",200,300)
  textSize(50)
  








  }

  ground.display()
  boundary1.display()
  boundary2.display()
  boundary3.display()
  mazewall1.display()
  mazewall2.display()
  mazewall3.display()
  mazewall4.display()
  mazewall5.display()
  mazewall6.display()
  mazewall7.display()
  mazewall8.display()
  mazewall9.display()
  mazewall10.display()
  

  
}
function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})
  }else{
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.04})
    }else{
      if(keyCode === LEFT_ARROW){
        Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.01,y:0})
      }
    }
  }
}

function collide(body1,body2)
{
  if(body2!=null)
        {
         var d = dist(body1.position.x,body1.position.y,body2.position.x,body2.position.y);
          if(d<=80)
            {
              World.remove(engine.world,end);
              
               return true; 
            }
            else{
              return false;
            }
         }
}

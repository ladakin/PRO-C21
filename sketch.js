const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var particles = [];
var plinkos=[];
var rows=[];
var ground;
var rows;


var rowsHeight = 150;

function setup() {

  
  createCanvas(600,500);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,500,1700,10);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Particle(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Particle(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Particle(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Particle(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Particle(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Particle(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Particle(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Particle(j ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  background(0);
  if(frameCount % 30 === 0){
    particle = new Plinko(random(130, 400), 0, 7);
    particles.push(particle);
  }

  
  Engine.update(engine);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

 
  for(var k = 0; k<rows.length;k++){
    rows[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }

 ground.display();

  drawSprites();
}
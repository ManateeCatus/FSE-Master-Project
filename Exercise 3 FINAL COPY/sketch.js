const points = [];
let dragPoint = null;
let score = 0;
const endTime = 40*40;
var gameRunning = true;
let timer = 0;
const fourBt = 1;


const numPoints = 30;
const dragRadius = 30;

function setup() {
  createCanvas(500, 500);
  strokeWeight(5);
  
  for(let i = 0; i < numPoints; i++){
    points.push(createVector(random(width-dragRadius*2)+dragRadius, random(height-dragRadius*2)+dragRadius));
  }
}

function draw() {
  background(220);
  
  
  fill('rgb(226,234,100)');
  for(let p of points) {
    circle(p.x, p.y, dragRadius * 2);
  }
 timer++;
  
  fill(30);
  textSize(32);
  if (ceil(((endTime - timer) / 60)) % 60 > 9)
    {
  text(floor(ceil((endTime - timer) /60) / 60) + ':' +ceil(((endTime - timer) / 60)) % 60, width - 70, 25);
      
    }
  else
    {
     text(floor(ceil((endTime - timer) / 60) / 60) + ':0' +ceil(((endTime - timer) / 60)) % 60, width - 70, 25); 
      
    }
  
  if (timer > endTime)
    {
      
      background(000);
      fill('white')
      text('Game Over!',160,height/2)
      text(score,110,32);
      text('Time\'s Up!',170,200);
      
      
      
    }
  text('Score:',6,30);
    if(dragPoint) {
    dragPoint.x = mouseX;
    dragPoint.y = mouseY;
    
  score = score + 1;
  
  }
  text(score,110,32);

}

function mousePressed() {
  for(let i = points.length - 1; i >= 0; i--) {
    if(mouseInCircle(points[i], dragRadius)) {
      dragPoint = points.splice(i,1);
      dragPoint.x = mouseX;
      dragPoint.y = mouseY;
      //bring drag point to front?
      points.push(dragPoint);
      
      break;
    }
  }
}


function mouseDragged() {
  if(dragPoint) {
    dragPoint.x = mouseX;
    dragPoint.y = mouseY;
  }
}

function mouseReleased() {
  dragPoint = null;
}

function mouseInCircle(pos, radius) {
  return dist(mouseX, mouseY, pos.x, pos.y) < radius
}

function shapeIsOverlapped() {
  if(dragPoint=null) {
    score = score +1;
      text(score,100,100);

  }
}

function scoreBoard() {}
function bell() {}

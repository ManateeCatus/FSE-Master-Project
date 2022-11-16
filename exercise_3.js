function ex3(){
const points = [];
let dragPoint = null;
const endTime = 60 * 30;
let score = endTime;
var gameRunning = true;
let timer = 0;
const fourBt = 1;
let clickSFX;
const widthC = 400;
const heightC = 400;

const numPoints = 20;
const dragRadius = 30;

function setup3() {
  createCanvas(400, 400);
  
  
  for(let i = 0; i < numPoints; i++){
    points.push(createVector(random(width-dragRadius* 2)+dragRadius, random(height-dragRadius*2)+dragRadius));
  }
  clickSFX = loadSound('assets/click.wav');
  clickSFX.setVolume(0.4);
}

function resetExercise3()
{
  dragPoint = null;
  while(points.length >= 1)
    {
      points.pop();
      
    }
  score = 0;
  gameRunning = true;
  timer = 0; 
}


function draw3() {
  background(220);
  
 
  textSize(32);
  stroke('black')
  fill('rgb(226,234,100)');
  for(let p of points) {
    circle(p.x, p.y, dragRadius * 2);
  }
  noStroke();
   fill('red');
  noStroke();
  square(-5, -5, 45);
  fill('black');
  stroke('black')
  textSize(18);
  text('Exit',3,25);
 timer++;
  
  fill(30);
  textSize(32);
if (gameRunning)
  {
  if (ceil(((endTime - timer) / 60)) % 60 > 9)
    {
  text(floor(ceil((endTime - timer) /60) / 60) + ':' +ceil(((endTime - timer) / 60)) % 60, width - 70, 30);
      
    }
  else
    {
     text(floor(ceil((endTime - timer) / 60) / 60) + ':0' +ceil(((endTime - timer) / 60)) % 60, width - 70, 30); 
    }
  }
  
  if (timer > endTime)
    {
      
         background(220)
      
      fill("rgb(56,47,47)");
      textSize(50);
      text("Time's up!", widthC/2 - 110, 70);
      
      textSize(32);
      text("You got " + score + " points!", widthC/2 - 115, 110);
      
      text("Double click to exit.", widthC/2 - 130, 180);
      
      
    }
  if (timer < endTime)
    {
  text('Score:',50,30);
  text('Timer: ', 230, 30)
    }
    if(dragPoint) {
    dragPoint.x = mouseX;
    dragPoint.y = mouseY;
    
      if (timer < endTime)
        {
  score = score + 1;
 
        }
  }
  
  if (timer < endTime)
    {
      text(score,150,30);   
    }

}

function mousePressed3() {
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
     if(mouseX<40 && mouseY < 40){
     
   
    resetExercise3();
    setup3();
    buttonList[2].isPressed = false;
   }
}


function doubleClicked3() {
  
  if (timer > endTime)
    {
    resetExercise3();
      setup3();
    buttonList[2].isPressed = false;
    }
  
}

function mouseDragged3() {
  if(dragPoint) {
    dragPoint.x = mouseX;
    dragPoint.y = mouseY;
     clickSFX.play();
  }
}

function mouseReleased3() {
  dragPoint = null;
}

function mouseInCircle(pos, radius) {
  return dist(mouseX, mouseY, pos.x, pos.y) < radius
}

function shapeIsOverlapped() {
  if(dragPoint == null) {
    if (gameRunning)
      {
    score = score -1;
      }
      text(score,100,100);

  }
}

function scoreBoard() {}
function bell() {}
  
return{setup3,draw3,mousePressed3,doubleClicked3,mouseReleased3}
}

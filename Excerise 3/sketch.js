const points = [];
let dragPoint = null;
let score = 0;
const endTime = 60 * 2;
var gameRunning = true;
let timer = 0;
const fourBt = 1;
let clickSFX;


const numPoints = 12;
const dragRadius = 30;

function setup() {
  createCanvas(400, 400);
  strokeWeight(2);
  
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
  setup();
  
}


function draw() {
  background(220);
  
  fill('red');
  square(-5, 360, 40);
  fill('black');
  textSize(18);
  text('Exit',3,387);
  textSize(32);
  
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
      
      background(220);
      fill('black')
      text('Double click to restart.',55,240)
      text(score,110,32);
      text('Time\'s Up!',125,200);
      gameRunning = false;
      
      
    }
  text('Score:',6,30);
    if(dragPoint) {
    dragPoint.x = mouseX;
    dragPoint.y = mouseY;
    
      if (gameRunning)
        {
  score = score + 1;
        }
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
     if(mouseX<40 && mouseY > 360){
     
   
    //resetFunction ();
    //setup();
    print('EXIT');
   }
}


function doubleClicked() {
  
  if (!gameRunning)
    {
      resetExercise3();
    }
  
}

function mouseDragged() {
  if(dragPoint) {
    dragPoint.x = mouseX;
    dragPoint.y = mouseY;
     clickSFX.play();
  }
}

function mouseReleased() {
  dragPoint = null;
}

function mouseInCircle(pos, radius) {
  return dist(mouseX, mouseY, pos.x, pos.y) < radius
}

function shapeIsOverlapped() {
  if(dragPoint == null) {
    if (gameRunning)
      {
    score = score +1;
      }
      text(score,100,100);

  }
}

function scoreBoard() {}
function bell() {}

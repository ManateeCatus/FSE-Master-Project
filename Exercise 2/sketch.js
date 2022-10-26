const circleList = [];
var timeLimit = 400
const circleNumber = 6;
var timer = 0;
var score = 0;
var scoreMult = 1;
var streak = 0;
const endTime = 60 * 60;
var gameRunning = true;
const widthC = 400;
const heightC = 400;

function resetExercise() {
  timer = 0;
  timeLimit = 400;
  score = 0;
  scoreMult = 1;
  streak = 0;
  gameRunning = true;
}

function setup() {
  createCanvas(widthC, heightC);
    
  for (let i = 0; i < circleNumber; i++)
    {
      circleList[i] = createCircle(i);
    }
    
  
}



function createCircle(i) {
  
  
  var circle = {
    radius: 50,
    red: 175,
    blue: 50,
    green: 150,
    alpha: 255,
    xPos: random(50, widthC - 50),
    yPos: random(50, heightC - 50),
    time:  -1 * (timeLimit / 3) * i,  
    fading: false,
    number: floor(2 + random (6))
    
    
}

    
  
  return circle;
  }

function changeColor()
{
  circleList[1].red = 50;
  
  
  
}

function mousePressed()
{
  if (gameRunning)
    {
  if (getNearestCircle() > -1)
    {
      circleList[getNearestCircle()].number -= 1;
    }
      
      
    }
  
  else
    {
      
      
    }
}

function doubleClicked()
{
  if (!gameRunning)
    {
  //Put code here to return to the GUI
      
    }
}

function getDistance(xPos, yPos)
{
  let d;
  
  d = sqrt((mouseX - xPos) * (mouseX - xPos) + (mouseY - yPos) * (mouseY - yPos))
  
  
  
  return d;
}

function keyPressed()
{
  if (keyCode == 82)
    {
      if (!gameRunning)
        {
          resetExercise();
          setup();
        }
    }
  
  
}

function getNearestCircle()
{
  let nearest = -1;
  let closest = 999;
  
  for (let i = 0; i < circleList.length; i++)
    {
      let dist = getDistance(circleList[i].xPos, circleList[i].yPos);
      
      
    if (dist < circleList[i].radius / 2)
      {
        if (dist < closest);
        {
          nearest = i;
        }
        
        
      }
    
      
      
      
    }
  return nearest;
}

function circleUpdate(c)
{
  if (c.time > timeLimit)
    {
      c.xPos = -500;
      c.yPos = -500;
      
    }
  
  if (c.number <= 0)
    {
      c.xPos = -500;
      c.yPos = -500;
      c.time = timeLimit + 1;
      c.number = 1;
      if (scoreMult < 10)
        {
      scoreMult += 1;
        }
      streak++;
      score += scoreMult;
      //Gradual scaling of timeLimit increases speed, disabled for now.
      //timeLimit -= 1;
      
    }
  
  if (c.time == timeLimit)
    {
      scoreMult = 1;
      streak = 0;
    }
  
  if (c.time > timeLimit * 2)
    {
      c.xPos = random(50, 350);
      c.yPos = random(50, 300);
      c.time = 0;
      c.number = floor(2+ random(6));
    }
}


function draw() {
  
  
  if (gameRunning)
{
  background(220);
  fill(100);
  for (let i = 0; i < circleList.length; i++)
    {
      let c = circleList[i];
      
      if (c.time > 0 && c.number > 0)
        {
      
      fill(c.red * c.time / timeLimit + 20, c.green * (timeLimit - c.time) / timeLimit , c.blue * (timeLimit - c.time)  / timeLimit, c.alpha);
      
      
      circle(c.xPos, c.yPos, c.radius);
    
      fill(230);
      
      text('' + c.number, c.xPos - (c.radius / 5.5), c.yPos + (c.radius / 5.5));
        }
      c.time++;
      
      circleUpdate(c);
    }
  timer++;
  
  fill(30);
  textSize(32);
  if (ceil(((endTime - timer) / 60)) % 60 > 9)
    {
  text(floor(ceil((endTime - timer) /60) / 60) + ':' +ceil(((endTime - timer) / 60)) % 60, widthC - 70, 25);
      
    }
  else
    {
     text(floor(ceil((endTime - timer) / 60) / 60) + ':0' +ceil(((endTime - timer) / 60)) % 60, widthC - 70, 25); 
      
    }
  
  if (timer > endTime)
    {
      gameRunning = false;
      
    }
  
}
  else
    {
      background("#8096A8")
      
      fill("rgb(56,47,47)");
      textSize(50);
      text("Time's up!", widthC/2 - 110, 70);
      
      textSize(32);
      text("You got " + score + " points!", widthC/2 - 115, 110);
      
      text("Double click to exit.", widthC/2 - 130, 180);
      text("Press R to restart.", widthC/2 - 130, 150);
    }
}
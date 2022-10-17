const circleList = [];
var timeLimit = 350
const circleNumber = 6;
var timer = 0;


function setup() {
  createCanvas(400, 400);
    
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
    xPos: random(50, 350),
    yPos: random(50, 300),
    time:  -1 * (timeLimit / 3) * i,  
    
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
  if (getNearestCircle() > -1)
    {
      circleList[getNearestCircle()].number -= 1;
      
      
      
    }
}

function getDistance(xPos, yPos)
{
  let d;
  
  d = sqrt((mouseX - xPos) * (mouseX - xPos) + (mouseY - yPos) * (mouseY - yPos))
  
  
  
  return d;
}

function getNearestCircle()
{
  let nearest = -1;
  let closest = 999;
  
  for (let i = 0; i < circleList.length; i++)
    {
      let dist = getDistance(circleList[i].xPos, circleList[i].yPos);
      
      
    if (dist < 25)
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
      c.time = timeLimit;
      c.number = 1;
      //Gradual scaling of timeLimit increases speed, disabled for now.
      //timeLimit -= 1;
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
  background(220);
  
  fill(100);
  for (let i = 0; i < circleList.length; i++)
    {
      let c = circleList[i];
      
      if (c.time > 0 && c.number > 0)
        {
      
      fill(c.red * c.time / timeLimit + 20, c.green * (timeLimit - c.time) / timeLimit , c.blue * (timeLimit - c.time)  / timeLimit );
      
      
      circle(c.xPos, c.yPos, c.radius);
    
      fill(230);
      
      text('' + c.number, c.xPos - 9, c.yPos + 9);
        }
      c.time++;
      
      circleUpdate(c);
    }
  timer++;
  
  fill(30);
  textSize(32);
  text(getNearestCircle() + ', ' + timeLimit, 25, 375)
  
  
}
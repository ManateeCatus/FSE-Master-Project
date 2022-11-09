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

/*
This function resets all of the variables declared at the start of the game, which is used to help restart the game.
*/
function resetExercise2() {
  timer = 0;
  timeLimit = 400;
  score = 0;
  scoreMult = 1;
  streak = 0;
  gameRunning = true;
}

/*
This function fills an array with various circles, and loads the sound effects used in the game.
*/
function setup2() {
  createCanvas(widthC, heightC);   
  for (let i = 0; i < circleNumber; i++)
    {
      circleList[i] = createCircle(i);
    } 
     popSFX = loadSound('assets/pop.wav');
   clickSFX = loadSound('assets/click.wav');
}

/*
This function creates a circle object, which has size, color, and position.
Time determines how long it will take for the circle to appear on the screen, an number determines how many times a circle needs to be clicked.
*/
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
    number: floor(2 + random (6))
  }
  return circle;
  }

/*
This function checks if the mouse is over the exit button, and if so, exits and resets the state of the exercise.
If the mouse is not over the exit button, it will check if it is over any of the circles, and if so, will reduce the number of the closest circle to the mouse by 1.
It will play a sound when this happens, with a louder sound if the click causes the number to reach 0.
*/
function mousePressed2()
{
  if (gameRunning)
    {
      if (mouseX < 40 && mouseY < 40)
        {
    resetExercise2();
    setup2();
    buttonList[1].isPressed = false;
        }
  if (getNearestCircle() > -1)
    {
      circleList[getNearestCircle()].number -= 1;
            if(circleList[getNearestCircle()].number != 0)
        {
      clickSFX.play();
        }
      else
        {
        popSFX.play();  
        
        }
    }      
    }
  
  else
    {
      
      
    }
}

/*
If the game is not running, this function will cause it to exit and reset.
*/
function doubleClicked()
{
  if (!gameRunning)
    {
    resetExercise2();
    setup2();
    buttonList[1].isPressed = false; 
    }
}

/*
This function returns the distance from the position of the mouse to the position of the point created by xPos and yPos.
*/
function getDistance(xPos, yPos)
{
  let d;
  d = sqrt((mouseX - xPos) * (mouseX - xPos) + (mouseY - yPos) * (mouseY - yPos);
  return d;
}

/*
If the distance between one of the circles and the mouse is less than the radius of the circle, it returns the index of that circle.
If there are multiple circles within the distance of the mouse, returns the index of the closest circle.
Otherwise, returns -1.
*/
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

/*
  If the time of the circle is greater than the time limit, moves the circle to hide it.
  If the number of the circle is 0, hides it, increases its time to the time limit + 1, and gives score.
  If the time of the circle is equal to the time limit, this means the circle has faded naturally, and the scoreMult and streak are reset.
  If the time becomes greater than double the time limit, moves the circle to a random position, sets its time to 0, and gives it a random number.
  */
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

/*
While the game is running, this function draws the exercise, and updates each circle.
When the game is not running, it draws an end screen, which shows the player their score.
*/
function draw2() {
  if (gameRunning)
{
  background(220);
  fill('red');
  square(-5, -5, 45);
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
  textSize(18);
  text('Exit',3, 20)
  textSize(32)
  
  if (timer > endTime)
    {
      gameRunning = false;
      
    }
  
}
  else
    {
      background("220")
      
      fill("rgb(56,47,47)");
      textSize(50);
      text("Time's up!", widthC/2 - 110, 70);
      
      textSize(32);
      text("You got " + score + " points!", widthC/2 - 115, 110);
      
      text("Double click to exit.", widthC/2 - 130, 180);
    }
}

// Declaring variables to create the 4 lines
var x;
var y;
var a;
var b;
var c;
var d;

// Declaring variables for the score and timer
var score = 0;
var timer = 0;
const endTime = 60 * 30;

// Declaring the gameRunning to be true
var gameRunning = true;

// Creating an array of points that will be placed along the line the user must pass
const pointList = [];

// Function for the original setup
function setup() {
  
  // Creating the canvas and background
  createCanvas(400, 400);
  background(200)
  
  // Declaring 3 random points for the end/start points for the lines
  x = random(100,175)
  y = random(100,300)  

  a = random(x,250)
  b = random(100,300)
  
  c = random(a,325)
  d = random(100,300)
  
  makePoints(50, 200, x, y , 25);
  makePoints(x, y, a, b, 25);
  makePoints(a,b,c,d, 25);
  makePoints(c,d, 350, 200, 25);
  
  // Declaring the gameRunning to be true
  gameRunning = true;
}

// Function that creates the lines between the randomly placed points
function makeLine(){
  
  // Setting the stroke of the line as white
  stroke("White");

  // Creating the lines between the randomly placed points
  line(50,200,x,y)
  line(x,y,a,b)
  line(a,b,c,d)
  line(c,d,350,200)
}

// Variables for the starting point and diameter of the circle
var cirX = 40;
var cirY = 200;
var diameter = 20;

// Variable that keeps track of the furthest the circle has been dragged
var maxX = 40;

// Function that creates the circle
function makeCircle(){
  
  // Making the circle black and without a stroke
  noStroke();
  fill(0)
  
  // If statement to test if the mouse is being pressed
  if (mouseIsPressed === true){
    
    // If statements to test if the mouse is within a diameter length of the center of          the circle
    if (mouseX > cirX - diameter && mouseX < cirX + diameter){
      if (mouseY > cirY - diameter && mouseY < cirY + diameter){
            
            // Setting the position of the circle to be the position of the mouse
            cirX = mouseX;
            cirY = mouseY;
           }
         }
    
    // Setting maxX to be the furtherst the circle has been dragged
    if (mouseX > maxX){
      maxX = cirX;
    }
  }
  
  
  // Drawing the circle even when it's not being clicked
  circle(cirX,cirY, diameter)
  
}

// Function that creates a point along the line that the user must pass
function makePoint(X1, Y1, X2, Y2, numDivisions, currentPoint){
  
  var point = {
    
    // Setting the x and y position of the point
    xPos: (((X2 - X1) / numDivisions) * currentPoint) + X1,
    yPos: (((Y2 - Y1) / numDivisions) * currentPoint) + Y1,
    
    // Setting the pointPassed to be false
    pointPassed: false
  }
  
  // Returning the point
  return point;
}

// Function that creates all of the points along the line
function makePoints(X1, Y1, X2, Y2, numDivisions){
  
  // For loop that loops until all of the points have been created
  for (let i = 0; i < numDivisions; i++){
    pointList.push(makePoint(X1, Y1, X2, Y2, numDivisions, i + 1 ))
  }
  
}

// Function that keeps of the score based off the number of points the circle passes
function scoring(){
  
  // For loop to run through all of the points of the line
  for (let i = 0; i < pointList.length; i++){
    var point = pointList[i]
    
    // If statement to test if the point has been passed
    if (!point.pointPassed){
      
      // If statement to test if the point has been passed
      if (maxX - 10 > point.xPos){
        
        /* 
        Setting the pointPassed to be true so the user can't go backwards on the line           and continue collecting points
        */
        point.pointPassed = true;
      }
      
    // Testing if the circle has been dragged within a certain distance of each point
    if (cirX > point.xPos - 10 && cirX < point.xPos + 10) {
      if (cirY > point.yPos - 10 && cirY < point.yPos + 10){
      
      // Increasing the score if the user has accurately passed the point
      score += 1
      point.pointPassed = true;
    }
  }
  }
  }
  
  // Drawing the score on the canvas
  textSize(30)
  text(score, 325, 50);
}

// Function that makes the square as the finishing point of the line
function makeFinish(){
   fill(0)
   rect(340,175,50,50)
}

// Function that draws the instructions, "Score: " and "Timer: "
function directions(){
   textSize(22);
   text('Click and drag the circle along the line', 15, 370);  
   textSize(30)
   text('Timer: ', 45, 50)
   text('Score:  ', 225, 50)
}

// Function that resets everything in the exercise 
function resetExercise(){
      setup();
      timer = 0;
      cirX = 40;
      cirY = 200;
      score = 0;
}

// Function that resets the exercise if the user double clicks
function doubleClicked(){
  if (!gameRunning){
    resetExercise();
  }
}

// Function that creates an exit button from the exercise for the user
function mousePressed(){
if(gameRunning){
  if (mouseX < 40 && mouseY < 40)
        {
          print('Exit');
        }
}
}

// Draw function to draws everything to the canvas
function draw(){
  
  // If statement to test if the game is running
  if (gameRunning == true){
    
  // Drawing the background
  background(200)
  
  // Drawing the exit button
  fill('red');
  square(-5, -5, 45);
  fill("black")
  
  // Drawing all of the neccessary components for the game
  makeLine();
  makeCircle();
  makeFinish();
  directions();
  scoring();
    
  // Increments the timer  
  if (!(cirX == 40 && cirY == 200)){
        timer++;
  }

  // If statement that creates the timer for the user
  if (ceil(((endTime - timer) / 60)) % 60 > 9) {
    text(floor(ceil((endTime - timer) / 60) / 60) + ':' +ceil(((endTime - timer) / 60))     % 60, 140, 50);
      
    }
  else {
     text(floor(ceil((endTime - timer) / 60) / 60) + ':0' +ceil(((endTime - timer)            /60))% 60, 140, 50); 
    }
  
  // If statment that ends the game if the timer has run out
  if (timer > endTime)
    {
      gameRunning = false;
      
    }
    
  // If statement that ends the game if the user reaches the finishing point  
  if (cirX > 340 && cirX < 390 && cirY > 175 && cirY < 225){
      gameRunning = false;
  }
  
  // Writing the "Exit" in the box
  textSize(18);
  text('Exit',3, 20)
  textSize(32)
    
  }
  
  // Pulling up the end screen if the game has met one of its end conditions
  if (gameRunning == false){
    
    // Displaying the score for the user
    background(200)
    textSize(25)
    text('Congratulations! Your score is: ' + score, 11, 200);
    
    // Asking the user if they would like to restart the game
    text('Double click to restart', 75, 250)
    
  }

}

var x;
var y;
var a;
var b;
var c;
var d;
var score = 0;
var timer = 0;
const endTime = 60 * 30;
var gameRunning = true;

const pointList = [];

function setup() {
  
  createCanvas(400, 400);
  background(200)
  
  
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
  gameRunning = true;
  
  
}

function makeLine(){
  stroke("White");

  line(50,200,x,y)
  line(x,y,a,b)
  line(a,b,c,d)
  line(c,d,350,200)
}

var cirX = 40;
var cirY = 200;
var maxX = 40;
var diameter = 20;

function makeCircle(){
  noStroke();
  fill(0)
  
  if (mouseIsPressed === true){
    
    if (mouseX > cirX - diameter && mouseX < cirX + diameter){
      if (mouseY > cirY - diameter && mouseY < cirY + diameter){
            
            cirX = mouseX;
            cirY = mouseY;
           }
         }
    if (mouseX > maxX){
      maxX = cirX;
    }
  }
  
    circle(cirX,cirY, diameter)
  
}



function makePoint(X1, Y1, X2, Y2, numDivisions, currentPoint){
  var point = {
    xPos: (((X2 - X1) / numDivisions) * currentPoint) + X1,
    yPos: (((Y2 - Y1) / numDivisions) * currentPoint) + Y1,
    pointPassed: false
  }
  
  return point;
}

function makePoints(X1, Y1, X2, Y2, numDivisions){
  
  for (let i = 0; i < numDivisions; i++){
    pointList.push(makePoint(X1, Y1, X2, Y2, numDivisions, i + 1 ))
  }
  
}

function scoring(){
  
  for (let i = 0; i < pointList.length; i++){
    var point = pointList[i]
    
    if (!point.pointPassed){
      
      if (maxX - 10 > point.xPos){
        point.pointPassed = true;
      }

    if (cirX > point.xPos - 10 && cirX < point.xPos + 10) {
      if (cirY > point.yPos - 10 && cirY < point.yPos + 10){
      score += 1
      point.pointPassed = true;
    }
  }
  }
  }
  textSize(30)
  text(score, 325, 50);
}


function makeFinish(){
   fill(0)
   rect(340,175,50,50)
}

function directions(){
   textSize(22);
   text('Click and drag the circle along the line', 15, 370);  
   textSize(30)
   text('Timer: ', 20, 50)
   text('Score:  ', 225, 50)
}

function doubleClicked(){
  if (!gameRunning){
    
  
  
      setup();
      timer = 0;
      cirX = 40;
      cirY = 200;
      score = 0;
  }
}

function draw(){
  
  if (gameRunning == true){
  background(200)
  makeLine();
  makeCircle();
  makeFinish();
  directions();
  scoring();
    
    if (!(cirX == 40 && cirY == 200)){
        timer++;
    }

    
     if (ceil(((endTime - timer) / 60)) % 60 > 9)
    {
  text(floor(ceil((endTime - timer) / 60) / 60) + ':' +ceil(((endTime - timer) / 60)) % 60, 115, 50);
      
    }
  else
    {
     text(floor(ceil((endTime - timer) / 60) / 60) + ':0' +ceil(((endTime - timer) / 60)) % 60, 115, 50); 
      
    }
  
  if (timer > endTime)
    {
      gameRunning = false;
      
    }
    
    if (cirX > 340 && cirX < 390 && cirY > 175 && cirY < 225){
      gameRunning = false;
    }
  }
  
  if (gameRunning == false){
    background(200)
    textSize(25)
    text('Congratulations! Your score is: ' + score, 11, 200);
    
    text('Double click to restart', 75, 250)
    
    
  }

}

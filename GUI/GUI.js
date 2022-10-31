const buttonNumber = 5;
const buttonList = [];
function setup() {
  
  createCanvas(400, 400);
  
  //This code is for the buttons on the menu GUI
    for (let i = 0; i < buttonNumber; i++)
    {
      buttonList[i] = createCustomButton(i);
    }
}

function createCustomButton(i) { 
      var circle = {
        radius: 50,
        red: 162,
        blue: 255,
        green: 235,
        xPos: 30,
        yPos: ((i*60)+100),  
        isPressed: false
      }
  if(i == 0||i == 1|| i == 2){
    circle.red = 162;
    circle.blue = 255
    circle.green = 235;
    }
    if(i == 3){
    circle.red = 100;
    circle.blue = 100;
    circle.green = 100;
    circle.xPos = 30;
    circle.yPos = 330;
    }
    if(i == 4){
    circle.red = 255;
    circle.blue = 0;
    circle.green = 0;
    circle.xPos = 330;
    circle.yPos = 330;
  }
  return circle;
}

function getButton(){
  let nearest = -1;
  let closest = 999;
  
  for (let i = 0; i < buttonList.length; i++){
      let dist = getDistance(buttonList[i].xPos,             buttonList[i].yPos); 
    if (dist < 40){
        if (dist < closest){
          nearest = i;
        }           
      }        
    }
  return nearest;
}

function mousePressed(){
  if ( !buttonList[0].isPressed && !buttonList[1].isPressed && !buttonList[2].isPressed && !buttonList[3].isPressed && !buttonList[4].isPressed && getButton() > -1){
      buttonList[getButton()].isPressed = true;   
    }
  if(buttonList[0].isPressed){
    if(getDistance(300,300) < 50){
      buttonList[0].isPressed = false;
       }
  }
  if(buttonList[1].isPressed){
    if(getDistance(300,300) < 50){
      buttonList[1].isPressed = false;
       }
  }
  if(buttonList[2].isPressed){
    if(getDistance(300,300) < 50){
      buttonList[2].isPressed = false;
       }
  }
  if(buttonList[3].isPressed){
    if(getDistance(300,300) < 50){
      buttonList[3].isPressed = false;
       }
  }
}

  
function getDistance(xPos, yPos){
  let d;
  d = sqrt((mouseX - xPos) * (mouseX - xPos) + (mouseY - yPos) * (mouseY - yPos));
  
  return d;
}
function ui (){
  //The first bunch of code sets up the visuals
  
    for(let i = 0; i < buttonList.length; i++){
    let b = buttonList[i];
      stroke('black')
      fill(b.red, b.green, b.blue);
      circle(b.xPos, b.yPos, b.radius);
    }
  textSize(32);
  fill('black');
  text('Stroke Helper 9000', 70,40);
  textSize(18);
  text('Exercise One', 70,105);
  text('Exercise Two', 70,165);
  text('Exercise Three', 70,225);
  fill(100,100,100);
  text('Settings', 70,335);
  fill(255,0,0);
  text('Exit', 260,335);

}
function mySelectEvent() {
  let item = sel.value();
  background(200);
  text('It is a ' + item + '!', 50, 50);
}

let t = 1;
function settings (){
  //Text Boxes
  textSize(18);
  fill('black');
  text('Brightness', 150,85);
  text('Language', 150,150);
  text('Help', 175,210);
  fill('red');
  text('Back', 250,340);
  fill('black');
  textSize(14);
  fill('white')
  rect(150, 220, 100, 20);
  fill('rgb(139,150,232)');
  noStroke();
  text('Help.docx', 170,235);
  let slider;
  if (t == 1){
    
    //For Slider
  //slider = createSlider(0, 255, 100);
  //slider.position(150, 100);
 // slider.style('width', '80px');
    //For List
      //textAlign(CENTER);
  //background(200);
 // sel = createSelect();
 // sel.position(150, 180);
 // sel.option('English');
 // sel.option('Spanish');
//  sel.option('French');
//  sel.selected('English');
//  sel.changed(mySelectEvent);
    

}
    //For Exit Button
    var c = {
        radius: 50,
        red: 255,
        blue: 0,
        green: 0,
        xPos: 330,
        yPos: 330,  
        isPressed: false
      }
      stroke('black')
      fill(c.red, c.green, c.blue);
      circle(c.xPos, c.yPos,c.radius);
  if(c.isPressed == true){
    buttonList[3].isPressed = false;
  }
   t++;
}

function exercise1(){
  textSize(32);
  fill('black');
  text('Exercise 1', 70,40);
    textSize(18);
    fill('red');
  text('Back', 250,340);
  fill('black');
    var c = {
        radius: 50,
        red: 255,
        blue: 0,
        green: 0,
        xPos: 330,
        yPos: 330,  
        isPressed: false
      }
      stroke('black')
      fill(c.red, c.green, c.blue);
      circle(c.xPos, c.yPos,c.radius);
  if(c.isPressed == true){
    buttonList[3].isPressed = false;
  }
}
function exercise2(){
  textSize(32);
  fill('black');
  text('Exercise 2', 70,40);
  textSize(18);
    fill('red');
  text('Back', 250,340);
  fill('black');
    var c = {
        radius: 50,
        red: 255,
        blue: 0,
        green: 0,
        xPos: 330,
        yPos: 330,  
        isPressed: false
      }
      stroke('black')
      fill(c.red, c.green, c.blue);
      circle(c.xPos, c.yPos,c.radius);
  if(c.isPressed == true){
    buttonList[3].isPressed = false;
  }
}
function exercise3(){
  textSize(32);
  fill('black');
  text('Exercise 3', 70,40);
    textSize(18);
    fill('red');
  text('Back', 250,340);
  fill('black');
    var c = {
        radius: 50,
        red: 255,
        blue: 0,
        green: 0,
        xPos: 330,
        yPos: 330,  
        isPressed: false
      }
      stroke('black')
      fill(c.red, c.green, c.blue);
      circle(c.xPos, c.yPos,c.radius);
  if(c.isPressed == true){
    buttonList[3].isPressed = false;
  }
}

function draw() {
  background(220);
  if(!buttonList[0].isPressed && !buttonList[1].isPressed && !buttonList[2].isPressed && !buttonList[3].isPressed && !buttonList[4].isPressed){
     ui();
}
  if(buttonList[0].isPressed){
   exercise1();
  }
  if(buttonList[1].isPressed){
    exercise2();
  }
  if(buttonList[2].isPressed){
    exercise3();
  }
  if(buttonList[3].isPressed){
    settings();
  }
  if(buttonList[4].isPressed){
    
  }
  } 

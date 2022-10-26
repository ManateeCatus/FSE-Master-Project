const points = [];
let dragPoint = null;

const numPoints = 6;
const dragRadius = 10;

function setup() {
  createCanvas(600, 600);
  strokeWeight(5);
  
  for(let i = 0; i < numPoints; i++){
    points.push(createVector(random(width), random(height)));
  }
}

function draw() {
  background(' rgb(230,1,222)');
  
  fill('yellow');
  for(let p of points) {
    circle(p.x, p.y, dragRadius * 2);
  }
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

function shapeIsOverlapped() {}
function timer() {}
function scoreBoard() {}
function bell() {}

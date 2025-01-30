const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let waiting_time = 3000;
let circle_interval: number;
let level_interval: number;

let points = 0;

function setup() {
  createCanvas(300, 300);

circle_interval = setInterval(addRandomCircle, waiting_time);
}

function draw() {
  background("black");

  // <<< Add code here
}

// <<< Add functions here
for (let i = 0; circles_x.length; i++) {

  circle(circles_x[i], circles_y[i], circles_diameter[i])
}

function addRandomCircle() {
  circles_x.push(random(0, width));
  circles_y.push(random(0, height));
  circles_diameter.push(random(10, 51));
}
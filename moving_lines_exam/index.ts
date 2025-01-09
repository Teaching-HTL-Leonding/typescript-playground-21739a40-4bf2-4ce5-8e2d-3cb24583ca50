// Configuration for the number of lines, and the range of colors The format is:
// <number of lines>;<min hue>-<max hue>
//
// "number of lines" is the number of lines to draw, can be between 1 and 30
// "min hue" is the minimum hue (HSB color space), can be between 0 and 360
// "max hue" is the maximum hue (HSB color space), can be between 0 and 360
const CONFIGURATION: string = "5;0-360";

let lineStartX: number[] = [];     // Start coordinates of line
let lineStartY: number[] = [];
let lineEndX: number[] = [];  // End coordinates of line
let lineEndY: number[] = [];
let lineColor: number[] = [];

let lineStartDx: number[] = [];    // Movement of start point per frame in X and Y direction
let lineStartDy: number[] = [];
let lineEndDx: number[] = [];      // Movement of end point per frame in X and Y direction
let lineEndDy: number[] = [];

let minColor = 0;               // Lower bound of random hue value
let maxColor = 360;             // Upper bound of random hue value

function setup() {
    createCanvas(500, 500);
    colorMode(HSB);

    // Set random start and end position
    for (let i = 0; i < 5; i++) {
        push();
        lineStartX: (random(50, 450));
        lineStartY: (random(50, 450));
        lineEndX: (random(50, 450));
        lineEndY: (random(50, 450));

        // Set random movement
        lineStartDx: (random(0, 5));
        lineStartDy: (random(0, 5));
        lineEndDx: (random(0, 5));
        lineEndDy: (random(0, 5));
    }

    // Set random color
    lineColor[0] = random(minColor, maxColor);


}

function draw() {
    background("black");
    
        fill("white");
    rect(50, 10, 30);
    rect(10, 10, 30);

    textSize(20);
    fill("black");
    text("+", 20, 30);
    text("-", 60, 30);


    push();
    // Draw current line
    stroke(lineColor[0], 100, 100);
    strokeWeight(2);
    line(lineStartX[0], lineStartY[0], lineEndX[0], lineEndY[0]);

    // Move start and end point
    for (let i = 0; i < 5; i++) {

  


        lineStartX[i] += lineStartDx[i];
        lineStartY[i] += lineStartDy[i];
        lineEndX[i] += lineEndDx[i];
        lineEndY[i] += lineEndDy[i];

        // Reverse direction when edge has been reached

        if (lineStartX < [i] || lineStartX > width) {
            lineStartDx = -lineStartDx;
        }
        if (lineStartY < 0 || lineStartY > height) {
            lineStartDy = -lineStartDy;
        }

        if (lineEndX < 0 || lineEndX > width) {
            lineEndDx = -lineEndDx;
        }
        if (lineEndY < 0 || lineEndY > height) {
            lineEndDy = -lineEndDy;
            pop();
        }
    }
    
  








}

function mouseClicked() {


}
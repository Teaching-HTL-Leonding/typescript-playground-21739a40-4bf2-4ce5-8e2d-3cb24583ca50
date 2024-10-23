const TEXT_LEFT = 30;
const STONE_LEFT = 50;
const PAPER_LEFT = 175;
const SCISSORS_LEFT = 300;
const ICON_WIDTH = 100;
const ICON_TOP = 75;
const ICON_HEIGHT = 100;
let userChoice = null;  
let computerChoice = null;  
let resultText = "";  

function setup() {
    createCanvas(500, 490);
    background("black");

    fill("yellow");
    textSize(30);
    text("Human:", TEXT_LEFT, 50);

    // Display the icons for "stone", "paper", and "scissors".
    textSize(75);
    text(`🪨`, STONE_LEFT, 150);
    text(`📃`, STONE_LEFT + 125, 150);
    text(`✂️ `,STONE_LEFT + 250, 150);
}

function mouseMoved() {
    // Clear the background to avoid drawing multiple rectangles
    background("black");

    // Reset the stroke and fill before drawing the text
    noStroke();
    fill("yellow");
    
    // Redraw the text and icons since we are clearing the canvas
    textSize(30);
    text("Human:", TEXT_LEFT, 50);
    textSize(75);
    text(`🪨`, STONE_LEFT, 150);
    text(`📃`, STONE_LEFT + 125, 150);
    text(`✂️ `,STONE_LEFT + 250, 150);

    // Check if the mouse is over the "stone" icon area
    if ((mouseX > STONE_LEFT) && (mouseX < STONE_LEFT + ICON_WIDTH) && (mouseY > ICON_TOP) && (mouseY < ICON_TOP + ICON_HEIGHT)) {
        // Draw the rectangle when the mouse is over the stone icon
        strokeWeight(4);
        stroke("yellow");
        noFill();
        rect(STONE_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
}

     if ((mouseX > PAPER_LEFT) && (mouseX < PAPER_LEFT + ICON_WIDTH) && (mouseY > ICON_TOP) && (mouseY < ICON_TOP + ICON_HEIGHT)) {
        // Draw the rectangle when the mouse is over the stone icon
        strokeWeight(4);
        stroke("yellow");
        noFill();
        rect(PAPER_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
}
     if ((mouseX > SCISSORS_LEFT) && (mouseX < SCISSORS_LEFT+ ICON_WIDTH) && (mouseY > ICON_TOP) && (mouseY < ICON_TOP + ICON_HEIGHT)) {
        // Draw the rectangle when the mouse is over the stone icon
        strokeWeight(4);
        stroke("yellow");
        noFill();
        rect(SCISSORS_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
}
}
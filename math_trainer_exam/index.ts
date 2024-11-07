// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

let randomNumber: number = 0;
let randomNumber2: number = 0;
let randomMath: number = 0;
let randomOperator: string = "";

// setup function runs once and sets up the quiz elements on the canvas
function setup() {
    randomNumber = Math.floor(random(0, 101));
    randomNumber2 = Math.floor(random(0, 101));
    randomMath = Math.floor(random(0, 3))
    createCanvas(400, 400);
    background("black");


    textSize(50);
    noStroke();
    fill("yellow");
    text(randomNumber, width / 3 - 20, height / 2 - 100)
    text(randomNumber2, width / 2 + 20, height / 2 - 100)
    if(randomMath = 0){
        randomOperator = "+";
    }
    if(randomMath = 0){
        randomOperator = "-";
    }
    if(randomMath = 0){
        randomOperator = "*"
    };

    // // <<< TODO: Add your code here
}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {
    // <<< TODO: Add your code here
}

// mouseMoved function displays mouse coordinates as feedback
function mouseMoved() {
    // This is a HELPER FUNCTION. It should make finding coordinates
    // easier for you. You DO NOT NEED to change this method!

    fill("black");
    noStroke();
    rect(0, height - 20, width, height); // Draws a rectangle to clear previous coordinates

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM); // Aligns coordinates text to bottom-left
    text(`${mouseX}/${mouseY}`, 5, height - 5); // Displays current mouse coordinates

}

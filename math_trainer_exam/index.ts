// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

let randomNumber: number = 0;
let randomNumber2: number = 0;
let randomNumberResult: number = 0;
let randomNumberResult2: number = 0;
let randomNumberResult3: number = 0;
let randomMath: number = 0;
let randomOperator: string = "";
let result: number = 0;
let randomPlace: string = "";
let correct: string = "";
let isfalse: string = "";
let selected: string = "";
let randomPose: number = 0;


// setup function runs once and sets up the quiz elements on the canvas
function setup() {
    // RS: First minimum requirement not 100% correct (1..100, you: 0..100)
    randomNumber = Math.floor(random(0, 101));
    randomNumber2 = Math.floor(random(0, 101));
    randomMath = Math.floor(random(0, 3));
    randomNumberResult = Math.floor(random(0, 101));
    randomNumberResult2 = Math.floor(random(0, 101));


    // result = Math.floor()

    createCanvas(400, 400);
    background("black");


    textSize(50);
    noStroke();
    fill("yellow");
    text(randomNumber, width / 2 + 35, height / 2 - 100);
    text(randomNumber2, width / 2 - 100, height / 2 - 100);



    // RS: Second minimum requirement solved with if statement
    if (randomMath === 0) {
        randomOperator = "+"
        result = randomNumber + randomNumber2
    } else
        if (randomMath === 1) {
            randomOperator = "-"
            result = randomNumber2 - randomNumber
        } else
            if (randomMath === 2) {
                randomOperator = "*"
                result = randomNumber * randomNumber2
            };

    randomPose = Math.floor(random(0, 3))

    if (randomPose === 0) {
        randomNumberResult = result
    } else
        if (randomPose === 1) {
            randomNumberResult2 = result
        } else
            if (randomPose === 2) {
                randomNumberResult3 = result
            }




    text(randomOperator, width / 2 - 20, height / 4);

    text(randomNumberResult, width / 4 - 50, height / 2);

    text(randomNumberResult2, width / 2 - 30, height / 2);

    text(randomNumberResult3, width / 2 + 80, height / 2);




}
// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {

    // RS: Third minimum requirement not solved. Condition is wrong (does not work).
    //     Additionally, feedback in case of wrong selection has not been implemented.
    if (mouseX > width / 2 + 80 && mouseX < width / 2 + 100 && mouseY > height / 2 + 20 && mouseY < height / 2 - 20 && randomNumberResult === result) {
        noStroke;
        textSize(40);
        fill("yellow");
        text(`${result} ist Richtig!`, width / 2 - 120, height / 2 + 100);
    }

    if (mouseX > 160 && mouseX < 235 && mouseY > 160 && mouseY < 200 && randomNumberResult2 === result) {
        noStroke();
        textSize(40);
        fill("yellow");
        text(`${result} ist Richtig!`, width / 2 - 120, height / 2 + 100);
    }
    if (mouseX > 35 && mouseX < 120 && mouseY > 160 && mouseY < 200 && randomNumberResult2 === result) {
        noStroke();
        textSize(40);
        fill("yellow");
        text(`${result} ist Richtig!`, width / 2 - 120, height / 2 + 100);
    }


    // RS: Please format the code before handing it in. Remove unnecessary empty lines, too.


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

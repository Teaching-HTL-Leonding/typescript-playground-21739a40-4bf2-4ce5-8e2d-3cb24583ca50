// We declare constants to avoid repeating "magic numbers". 
// These numbers are used for positioning text and icons on the canvas.
// Note that we use all-caps for constants that represent 
// configuration values to make them easy to recognize.
const TEXT_LEFT = 30;
const STONE_LEFT = 50;
const PAPER_LEFT = 175;
const SCISSORS_LEFT = 300;
const ICON_WIDTH = 100;
const ICON_TOP = 75;
const ICON_HEIGHT = 100;
let userChoice: string = "";
let displayNumber: string = "";
let computerChoice: string = "";
let gameOver: boolean = false;
function setup() {
    createCanvas(500, 490);
    background("black");

    fill("yellow");
    textSize(30);
    text("Human:", TEXT_LEFT, 50);

    // Display the icons for "stone", "paper", and "scissors".
    textSize(75);
    const HUMAN_SYMBOLS_TOP = 150;
    text("🪨", STONE_LEFT, HUMAN_SYMBOLS_TOP);
    text("📃", PAPER_LEFT, HUMAN_SYMBOLS_TOP);
    text("✂️", SCISSORS_LEFT, HUMAN_SYMBOLS_TOP);
}

function mouseMoved() {
     if (gameOver) return;
    const isInVertical = mouseY >= ICON_TOP && mouseY < ICON_TOP + ICON_HEIGHT;
    // This function highlights the icon currently being hovered over by the mouse.
    // <<< Add code here to disable the hover effect once the user has made a choice
    noFill();
    strokeWeight(3);

    // In the following lines of code, we repeatedly check if the mouse
    // is vertically in the relevant area. Therefore, we calculate the boolean
    // value once and use the variable later multiple times.

    // Check if the mouse is over the "stone" icon.
    if (isInVertical && mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
        stroke("yellow"); // Highlight with yellow.
    } else {
        stroke("black"); // Remove highlight by drawing in black.
    }
    // Draw a rectangle around the "stone" icon.
    rect(STONE_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);

    // Same for paper
    if (isInVertical && mouseX >= PAPER_LEFT && mouseX < PAPER_LEFT + ICON_WIDTH) {
        stroke("yellow");
    } else {
        stroke("black");
    }
    rect(PAPER_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);

    // Same for scissors
    if (isInVertical && mouseX >= SCISSORS_LEFT && mouseX < SCISSORS_LEFT + ICON_WIDTH) {
        stroke("yellow");
    } else {
        stroke("black");
    }
    rect(SCISSORS_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
}



function mouseClicked() {
     if (gameOver) return;
    let randomNumber: number = Math.floor(random(0, 3));
    let wahl: string = "";
    let isInVertical = mouseY >= ICON_TOP && mouseY < ICON_TOP + ICON_HEIGHT;
    let winner: string = "";

    if (isInVertical && mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
        wahl = "🪨";
    } else if (isInVertical && mouseX >= PAPER_LEFT && mouseX < PAPER_LEFT + ICON_WIDTH) {
        wahl = "📃";
    } else if (isInVertical && mouseX >= SCISSORS_LEFT && mouseX < SCISSORS_LEFT + ICON_WIDTH) {
        wahl = "✂️";
    }
    if (wahl === "") {
        return;
    }

    if (wahl !== "") {


        textAlign(CENTER, CENTER);

        noStroke();
        fill("black");
        rect(width / 100, height / 2 - 30, 490, 50)

        noStroke()
        fill("yellow");


        textSize(30);
        text(`Your Choice: ${wahl}`, width / 4, height / 2);

    }

    if (randomNumber === 0) {
        computerChoice = "🪨";
    } else if (randomNumber === 1) {
        computerChoice = "📃";
    } else if (randomNumber === 2) {
        computerChoice = "✂️";
    }


    if (computerChoice !== "") {



        noStroke();
        fill("black");
        rect(width / 100, height / 2 +60, 490, 50)

        textSize(30);
        noStroke();
        fill("yellow");
        text(`Computer Choice: ${computerChoice}`, width / 3.09, height / 2 + 100);
    }
 if( userChoice === computerChoice){
    winner = "Its a Tie!"};

   if (userChoice === computerChoice) {
        winner = "It's a Tie!";
    } else if (
        (userChoice === "🪨" && computerChoice === "✂️") || // Stein schlägt Schere
        (userChoice === "📃" && computerChoice === "🪨") || // Papier schlägt Stein
        (userChoice === "✂️" && computerChoice === "📃")    // Schere schlägt Papier
    ) {
        winner = "You Win!";
    } else {
        winner = "Computer Wins!";
    }

    // Anzeige des Gewinners
    fill("black");
    rect(width / 100, height / 2 + 150, 490, 50);  // Löscht vorherigen Textbereich

    fill("yellow");
    text(winner, width / 2, height / 2 + 180);


gameOver = true;
    userChoice = wahl
    
}




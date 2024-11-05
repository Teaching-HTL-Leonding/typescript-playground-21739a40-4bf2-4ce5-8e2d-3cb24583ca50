const TEXT_LEFT = 30;
const STONE_LEFT = 50;
const PAPER_LEFT = 175;
const SCISSORS_LEFT = 300;
const ICON_WIDTH = 100;
const ICON_TOP = 75;
const ICON_HEIGHT = 100;

let userChoice: string = "";
let computerChoice: string = "";
let gameOver: boolean = false;  // Neue Variable, um zu prüfen, ob das Spiel vorbei ist

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
    if (gameOver) return;  // Deaktiviert Hover-Effekte, wenn das Spiel vorbei ist

    const isInVertical = mouseY >= ICON_TOP && mouseY < ICON_TOP + ICON_HEIGHT;
    noFill();
    strokeWeight(3);

    // Check if the mouse is over the "stone" icon.
    if (isInVertical && mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
        stroke("yellow"); // Highlight with yellow.
    } else {
        stroke("black"); // Remove highlight by drawing in black.
    }
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
    if (gameOver) return;  // Beende die Funktion, wenn das Spiel vorbei ist

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

    // Benutzerwahl aktualisieren
    userChoice = wahl;

    if (userChoice === "") return;  // Beende die Funktion, wenn keine Auswahl getroffen wurde

    // Display user's choice
    textAlign(CENTER, CENTER);
    noStroke();
    fill("black");
    rect(width / 100, height / 2 - 30, 490, 50);  // Clear previous text area

    fill("yellow");
    textSize(30);
    text(`Your Choice: ${userChoice}`, width / 4, height / 2);

    // Randomly generate computer's choice
    if (randomNumber === 0) {
        computerChoice = "🪨";
    } else if (randomNumber === 1) {
        computerChoice = "📃";
    } else if (randomNumber === 2) {
        computerChoice = "✂️";
    }

    // Display computer's choice
    fill("black");
    rect(width / 100, height / 2 + 60, 490, 50);  // Clear previous text area
    fill("yellow");
    text(`Computer Choice: ${computerChoice}`, width / 3.09, height / 2 + 100);

    // Determine the winner
    if (userChoice === computerChoice) {
        winner = "It's a Tie!";
    } else if (
        (userChoice === "🪨" && computerChoice === "✂️") ||
        (userChoice === "📃" && computerChoice === "🪨") ||
        (userChoice === "✂️" && computerChoice === "📃")
    ) {
        winner = "You Win!";
    } else {
        winner = "Computer Wins!";
    }

    // Display the winner
    fill("black");
    rect(width / 100, height / 2 + 150, 490, 50);  // Clear previous text area
    fill("yellow");
    text(winner, width / 2, height / 2 + 180);

    // Set gameOver to true so no further clicks are processed
    gameOver = true;
}

let potatos = 0;
let autoCottonActive = false;
let howmuchfarmer = 0;
let howmuchschaufeln = 0;
let howmuchClicks = 0;

function setup() {
    createCanvas(700, 500);
    redrawBackground();
}

function draw() {}

function mouseClicked() {
    textSize(150);
    let potatosWidth = textWidth("🥔");
    let cloudX = 150;
    let cloudY = 400 - 150;

    // Kartoffel anklicken
    if (mouseX > cloudX && mouseX < cloudX + potatosWidth &&
        mouseY > cloudY && mouseY < cloudY + 150) {
        potatos += (1 + howmuchClicks); // Grundwert (1) + Bonus pro Klick
        redrawBackground();
    }

    // Farmer kaufen
    let buttonX = 50;
    let buttonY = height / 6;
    let buttonWidth = 100;
    let buttonHeight = 100;

    if (mouseX > buttonX && mouseX < buttonX + buttonWidth &&
        mouseY > buttonY && mouseY < buttonY + buttonHeight) {
        if (potatos >= 100) { 
            potatos -= 100; // Preis abziehen
            howmuchfarmer += 1;
            redrawBackground();

            if (howmuchfarmer === 1) {
                setInterval(addCotton, 1000); // Füge Farmer-Ertrag hinzu
            }
        }
    }

    // Schaufel kaufen
    if (mouseX > 350 && mouseX < 450 + buttonWidth &&
        mouseY > 80 && mouseY < 180 + buttonHeight) {
        if (potatos >= 50) {
            potatos -= 50; // Preis abziehen
            howmuchschaufeln += 1;
            redrawBackground();

            if (howmuchschaufeln === 1) {
                setInterval(() => {
                    potatos += howmuchschaufeln;
                    redrawBackground();
                }, 1500);
            }
        }
    }

    // +Clicks kaufen
    if (mouseX > 500 && mouseX < 600 && mouseY > 82 && mouseY < 185) {
        if (potatos >= 5) {
            potatos -= 5; // Preis abziehen
            howmuchClicks += 1; // Bonus pro Klick erhöhen
            redrawBackground();
        }
    }
}

function redrawBackground() {
    background("skyblue");

    // Grafik und Texte neu zeichnen
    rect(175, height / 8, 150);
    textSize(150);
    text("🧑🏿‍🌾", 150, height / 3 + 20);
    text("🥔", 150, 400);

    textSize(35);
    text(`Potatos: ${potatos}`, 170, 50);

    // Button zeichnen
    rect(50, height / 6, 100);
    textSize(18.5);
    text("Buy Farmer", 51, 135);
    text("100 Potatos", 51, 160);
    textSize(25);
    text(`Farmer: ${howmuchfarmer}`, 50, 70);

    // Button für Schaufel   
    rect(350, height / 6, 100);
    textSize(25);
    text("Schaufel", 352, 130);
    text(`Schaufel: ${howmuchschaufeln}`, 350, 70);
    textSize(20);
    text(`50 Potatos`, 352, 155);

    // Button für Doppel, Tripple etc
    rect(500, height / 6, 100);
    textSize(18);
    text("+Clicks", 515, 130);
    text("150 Potatos", 502, 150);
    textSize(25);
    text(`Clicks: ${howmuchClicks}`, 505, 70);
}

function addCotton() {
    potatos += howmuchfarmer; // Automatischer Gewinn durch Farmer
    redrawBackground();
}

function mouseMoved() {
    redrawBackground();
    textSize(16);
    text(`MouseX: ${mouseX}, MouseY: ${mouseY}`, 10, 490);
}

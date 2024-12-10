let cottons = 0;
let autoCottonActive = false;
let howmuchniggas = 0;
let howmuchmacheten = 0;

function setup() {
    createCanvas(500, 500);

    redrawBackground();
}

function draw() {
}

function mouseClicked() {
    // Klick auf die Wolke (☁️)
    textSize(150);
    let cloudWidth = textWidth("☁️");
    let cloudX = 150;
    let cloudY = 400 - 150;

    if (mouseX > cloudX && mouseX < cloudX + cloudWidth &&
        mouseY > cloudY && mouseY < cloudY + 150) {
        cottons += 1;
        redrawBackground();
    }

    // Klick auf "Buy Nigga"-Button
    let buttonX = 50;
    let buttonY = height / 6;
    let buttonWidth = 100;
    let buttonHeight = 100;

    if (mouseX > buttonX && mouseX < buttonX + buttonWidth &&
        mouseY > buttonY && mouseY < buttonY + buttonHeight) {
        if (cottons >= 100 && !autoCottonActive) { // Prüfe, ob genug Cotton vorhanden ist
            cottons -= 100; // Preis abziehen
            howmuchniggas += 1;
            redrawBackground();

            if (howmuchniggas === 1) {

                setInterval(addCotton, 1000);
            }


        }
    }






}

function redrawBackground() {
    background("skyblue");

    // Grafik und Texte neu zeichnen
    rect(175, height / 8, 150);
    textSize(150);
    text("🧑🏿‍🌾", 150, height / 3 + 20);
    text("☁️", 150, 400);

    textSize(35);
    text(`Cottons: ${cottons}`, 170, 50);

    // Button zeichnen
    rect(50, height / 6, 100);
    textSize(20);
    text("Buy Nigga", 52, 135);
    text("100 Cotton", 52, 160);
    textSize(25);
    text(`Niggas: ${howmuchniggas}`, 50, 70);

    //Button für Machete
    rect(350, height / 6, 100);
    textSize(20);
    text("Machete", 360, 140,  )
    text(`Macheten: ${howmuchmacheten}`, 350,70, 48 )

}

function addCotton() {
    cottons += howmuchniggas;
    redrawBackground();
}

function mouseMoved() {
    redrawBackground();
    textSize(16);
    text(`MouseX: ${mouseX}, MouseY: ${mouseY}`, 10, 490);
}

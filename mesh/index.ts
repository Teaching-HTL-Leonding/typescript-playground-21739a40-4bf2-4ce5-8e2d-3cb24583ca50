const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Abstand zwischen den Linien auf der linken Seite

let i = MARGIN;

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke("lime");

  while (i < SIZE) { // Schleifenbedingung
    // Zeichne Linien von der linken Seite zum Punkt oben rechts
    line(0, i, SIZE, MARGIN);
    i += MARGIN;
  }
}

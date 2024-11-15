const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Abstand zwischen den Linien auf der linken Seite



function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke("lime");

  for (let i = MARGIN; i < SIZE; i += MARGIN) { // Schleifenbedingung
    for (let j = MARGIN; j < SIZE; j += MARGIN) { // Schleifenbedingung
      line(MARGIN, j, SIZE - MARGIN, i);

    }
  }
}
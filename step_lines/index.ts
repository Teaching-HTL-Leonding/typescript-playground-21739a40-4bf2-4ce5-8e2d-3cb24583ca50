function setup() {
    const SIZE = 400; // Canvas size (square)
    const GRID = 25; // Grid line distance

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    // Draw vertical lines

    for (let i = GRID; i < SIZE; i += GRID) {
        line(i, 0, i, SIZE);

    }

    // Draw horizontal lines

    for (let i = GRID; i < SIZE; i += GRID) {
        line(0, i, SIZE, i);

    }

    strokeWeight(2);

    // Draw left part of the lines
    stroke("yellow");

    for (let i = GRID; i < SIZE; i += GRID) {
        line(GRID, i, GRID * (i / GRID), i)
    }
    stroke("red");


    for (let i = GRID; i < SIZE; i += GRID) {
        line(GRID * (i / GRID), i, SIZE - GRID, i);
    }













}
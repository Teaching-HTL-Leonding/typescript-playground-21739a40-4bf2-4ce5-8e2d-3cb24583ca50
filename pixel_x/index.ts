function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();
    translate(GRID, GRID);
    for (let i = 0; i < 15; i++) {
        fill("lime")

        rect(0, 0, GRID, GRID);
        translate(GRID, GRID);

    }
    resetMatrix();
    translate(GRID, SIZE - GRID * 2)
    for (let x = 0; x < 15; x++) {
        fill("yellow")

        rect(0, 0, GRID, GRID);
        translate(GRID, - GRID);
    }
}

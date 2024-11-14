function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();
    let i  = GRID; 
    while ( i < SIZE){
        stroke("yellow");

        rect(GRID, GRID, GRID);
        stroke("green");
        rect(SIZE - GRID - GRID, GRID, - GRID  , GRID);

    i += GRID;
    }
}

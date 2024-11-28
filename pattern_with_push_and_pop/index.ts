function setup() {
    const SIZE = 400;
    const SIDE_LENGTH = 50;
 
    // We have an isosceles triangle ("gleichschenkeliges Dreieck").
    // This is the formula to calculate the height of such a triangle
    const HEIGHT = SIDE_LENGTH * Math.sqrt(3) / 2;
 
    createCanvas(SIZE, HEIGHT * 9);
    background("black");
 
    strokeWeight(1);
    stroke("cyan");
    noFill();
 
    for (let i = 0; i <= SIZE; i += SIDE_LENGTH) {
        push();
        translate(-SIDE_LENGTH / 2, -SIDE_LENGTH / 2)
        for (let j = 0; j <= SIZE; j += SIDE_LENGTH) {
            triangle(0, SIDE_LENGTH, SIDE_LENGTH, SIDE_LENGTH, HEIGHT / 1.75, 0);
            translate(SIDE_LENGTH, 0);
        }
 
        pop();
        translate(0, SIDE_LENGTH);
 
    }
}
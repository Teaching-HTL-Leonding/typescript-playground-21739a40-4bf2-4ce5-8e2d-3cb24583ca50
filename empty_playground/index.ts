let length1 = 20;
let SIZE = 400;

function setup() {
    createCanvas(400, 400);
    background("black");

    for(let i = 0; i < width; i += length1 ){
        stroke("lime    ");
        line(i  , i, width, i)
        stroke("yellow");
        line(SIZE, SIZE, SIZE - i, i)
    }
}

function draw() {
}


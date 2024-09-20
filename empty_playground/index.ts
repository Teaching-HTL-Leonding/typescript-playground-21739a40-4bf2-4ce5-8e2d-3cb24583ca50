function setup() {
createCanvas(500, 500);
frameRate(144);

}

let x = 150;

function draw() {


background("red");
fill("yellow");
circle(x, x, 50);
x  += random(-10, 10);

if (x > width) {
    x = 0;

}


}

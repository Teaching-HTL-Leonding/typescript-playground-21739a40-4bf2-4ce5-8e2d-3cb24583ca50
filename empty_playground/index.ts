function setup() {
createCanvas(500, 500);
frameRate(144);

}

let x = 0;

function draw() {


background("red");
fill("yellow");
circle(250, 250, x);
x++ 





if (x > width) {
    x = 0;


}


}

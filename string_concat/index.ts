function setup() {
  createCanvas(400, 400);
background("lightblue");
noStroke();
fill("aqua");
circle(0, 0, 20);

 

}

let click_positions: string = '0/0';

function mouseClicked() {
background("lightblue");


fill("skyblue");
circle( mouseX, mouseY, 20 );
click_positions = '${click_positions}, ${mouseX}/${mouseY}';
 
 
 rect(width -10, height, -10, 20);
noStroke
fill("black");
 text(click_positions, 5, 5, width -10, height -10);


}
function mouseMoved() {
}
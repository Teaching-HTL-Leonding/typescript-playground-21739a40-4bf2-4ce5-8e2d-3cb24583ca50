function setup() {
  createCanvas(200, 200);
  background("lightblue;");
}

function mouseMoved() {
  background("lightblue");

line(mouseX-20, mouseY, mouseX+20, mouseY);
line(mouseX, mouseY-20, mouseX, mouseY+20);

noFill();
circle(mouseX, mouseY, 15);
circle(mouseX, mouseY, 25);
}

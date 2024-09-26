function setup() {
  createCanvas(1000, 1000);
}

function mouseMoved() {
  background("lightblue");

  // Add your code here

noFill();
strokeWeight(1.5);
circle(mouseX, mouseY, 50);
circle(mouseX, mouseY, 22);
line(mouseX, mouseY -30, mouseX, mouseY +30);
line(mouseX -30, mouseY, mouseX +30, mouseY);

}

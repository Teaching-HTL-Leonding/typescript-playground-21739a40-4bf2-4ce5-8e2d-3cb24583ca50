function setup() {
  createCanvas(200, 200);
  background("lightblue");
  text(mouseProtocol, 5, 15)
}

let mouseProtocol: string = '0/0';

function mouseClicked() {

  background("lightblue");

  fill("skyblue");
  noStroke();
  circle(mouseX, mouseY, 20);

  mouseProtocol = `${mouseProtocol}, ${mouseX}/${mouseY}`;

  fill("black");
  text(mouseProtocol, 5, 5, width - 10, height - 10);

}

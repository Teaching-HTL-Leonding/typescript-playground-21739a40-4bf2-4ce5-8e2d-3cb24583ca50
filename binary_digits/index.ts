let num = 0;
let randomNumber: number;
let digit1: number = 0;
let digit2: number = 0;
let digit3: number = 0;
let digit4: number = 0;

function setup() {
  randomNumber = Math.floor(random(0, 16));



  createCanvas(400, 300);
  background("black");

  background("black");
  noFill();
  stroke("yellow");
  rect(25, height / 2 - 40, 60, 100);
  rect(125, height / 2 - 40, 60, 100);
  rect(225, height / 2 - 40, 60, 100);
  rect(325, height / 2 - 40, 60, 100);
  noStroke();
  fill("yellow");
  textSize(50);
  text(digit1, 40, height / 2 + 25);
  text(digit2, 145, height / 2 + 25);
  text(digit3, 245, height / 2 + 25);
  text(digit4, 345, height / 2 + 25);

  textAlign(CENTER, CENTER);
  textSize(40);
  text(`${randomNumber} in Binary?`, width / 2, height / 2 - 115);
}



function mouseClicked() {

  if (mouseX >= 25 && mouseX <= 85 && mouseY >= height / 2 - 40 && mouseY <= height / 2 + 60) {
    if (digit1 === 1) {
      digit1 = 0;
    } else {
      digit1 = 1;
    }

  }
}

let num = 0;
let digit1 = 0;
let digit2 = 0;
let digit3 = 0;
let digit4 = 0;
let digitclicked = 0;
let livebinary = 0;


function setup() {
  num = Math.floor(random(1, 16));

  createCanvas(400, 300);
  background("black");

  textAlign(CENTER, CENTER);
  fill("yellow");
  textSize(40);
  text(`${num} in binary?`, width / 2, height / 4);

  stroke("yellow");
  noFill();
  rect(65, 140, 50, 85);
  rect(135, 140, 50, 85);
  rect(205, 140, 50, 85);
  rect(275, 140, 50, 85);


  fill("yellow");
  text(`${digit1}`, 65, 140, 50, 85);
  text(`${digit2}`, 135, 140, 50, 85);
  text(`${digit3}`, 205, 140, 50, 85);
  text(`${digit4}`, 275, 140, 50, 85);
}

function mouseClicked() {

  if ((mouseX < 115) && (mouseX > 65) && (mouseY > 140) && (mouseY < 225)) {
    digitclicked = 4;
    if (digit1 === 0) {
      digit1 = 1;
    } else {
      digit1 = 0
    }
    fill("black");
    rect(65, 140, 50, 85);
    fill("yellow");
    text(`${digit1}`, 65, 140, 50, 85);
  }

  if ((mouseX < 175) && (mouseX > 135) && (mouseY > 140) && (mouseY < 225)) {
    digitclicked = 4;
    if (digit2 === 0) {
      digit2 = 1;
    } else {
      digit2 = 0
    }
    fill("black");
    rect(135, 140, 50, 85);
    fill("yellow");
    text(`${digit2}`, 135, 140, 50, 85);
  }

  if ((mouseX < 255) && (mouseX > 205) && (mouseY > 140) && (mouseY < 225)) {
    digitclicked = 4;
    if (digit3 === 0) {
      digit3 = 1;
    } else {
      digit3 = 0
    }
    fill("black");
    rect(205, 140, 50, 85);
    fill("yellow");
    text(`${digit3}`, 205, 140, 50, 85);
  }

  if ((mouseX < 325) && (mouseX > 275) && (mouseY > 140) && (mouseY < 225)) {
    digitclicked = 4;
    if (digit4 === 0) {
      digit4 = 1;
    } else {
      digit4 = 0
    }
    fill("black");
    rect(275, 140, 50, 85);
    fill("yellow");
    text(`${digit4}`, 275, 140, 50, 85);


    num = digit1 * Math.pow(2, 3) + digit2 * Math.pow(2, 2) + digit3 * Math.pow(2, 1) + digit4 * Math.pow(2, 0);

    livebinary = digit1 * Math.pow(2, 3) + digit2 * Math.pow(2, 2) + digit3 * Math.pow(2, 1) + digit4 * Math.pow(2, 0);
    if (num === livebinary) {
      background("black");
      textSize(25);
      fill("yellow");
      text(num + ` in binary?`, width / 2, 50);
      noStroke();
      fill("green");
      text("Correct!", width / 2, 250);


      stroke("green");
      noFill();
      rect(65, 140, 50, 85);
      rect(135, 140, 50, 85);
      rect(205, 140, 50, 85);
      rect(275, 140, 50, 85);


      fill("yellow");
      text(`${digit1}`, 65, 140, 50, 85);
      text(`${digit2}`, 135, 140, 50, 85);
      text(`${digit3}`, 205, 140, 50, 85);
      text(`${digit4}`, 275, 140, 50, 85);

    }


  }

}

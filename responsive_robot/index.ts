function setup() {
  createCanvas(400, 400);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth = width * 0.50; // Head size as 50% of the canvas width
  const headHeight = height * 0.50; // Head size as 50% of the canvas width
  const headX = width / 2 - headWidth / 2; // Center the head horizontally
  const headY = height / 2 - headHeight / 2; // Center the head vertically
  const eyes1 = headX*0.20 
  const eyes2 = headY*0.20 =headHeight /0.25

  // Draw the robot's head
  fill("gray");
  rect(headX, headY, headWidth, headHeight);

  // Eyes
  circle(eyes1, eyes2, 20);
}

let interval: number;


function setup() {
  createCanvas(300, 300);
  background("black");
  strokeWeight(2);
  stroke("lime");
  noFill();


interval = setInterval(drawCircle, 1000);



}

function mouseClicked(){
  clearInterval(interval);
  console.log("Intervall cleared");


  textSize(50);
  fill("red");
  noStroke();
  textAlign(CENTER, CENTER);
  text("Game over", 150, 150);

}

function drawCircle(){
  const centerX = random(width);
  const centerY = random(height);
  const diameter = random(20, 80);
  circle(centerX, centerY, diameter);
}


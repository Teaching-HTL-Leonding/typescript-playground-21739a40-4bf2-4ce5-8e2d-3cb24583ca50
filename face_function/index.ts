let nextSmiling = true; // We start with a happy face

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

for(let i = 0; i < 1; i ++){

  smile(true); // Draw the first face
}
}

function mouseClicked() {
  let x = random(0, 500);
  let y = random(0, 500);
  let diameter = random(20, 250);

  if(nextSmiling = true){
    circle(x,y,diameter);
  }

}

// Function DEFINITION
//       +-------------------------- Function name
//       |     +-------------------- Parameter name
//       |     |      +------------- Parameter type
//       v     v      v
function smile(happy: boolean) {
  let x = random(0, 500);
  let y = random(0, 500);
  let diameter = random(20, 250);

  fill("yellow");
  circle(x,y,diameter);





}

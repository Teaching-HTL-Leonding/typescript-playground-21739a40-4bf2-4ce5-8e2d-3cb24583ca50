const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
                  // This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke("lime");

 for(let i = MARGIN; i < SIZE; i += MARGIN){
  

  for(let a = MARGIN; a < SIZE; a += MARGIN)
  line(MARGIN, a, SIZE - MARGIN, i)

 }
}

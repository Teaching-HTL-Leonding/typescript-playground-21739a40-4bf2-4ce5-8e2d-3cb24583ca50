function setup() {
  createCanvas(200, 200);
  background("lightblue");

}


let mousecordinates: string = '0/0';


function mouseClicked() {
background("lightblue");




  noStroke();
  fill("lightgreen");
  circle(mouseX, mouseY, 20);

  mousecordinates = `${mousecordinates}, ${mouseX}, ${mouseY}`;

fill("black");
  text(mousecordinates, 5, 5, width - 10, height - 10);

  if ( mousecordinates.length > 400 ) {
    mousecordinates = "";
  }
}



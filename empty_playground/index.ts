function setup() {
createCanvas(300, 300);
background("skyblue");

}

function mouseClicked() {
    
    noStroke();
    fill("white");

    circle(mouseX, mouseY, 15);

fill("skyblue");
noStroke();
rect(0, height- 20, width / 2, height);

fill("black");
text(`X: ${mouseX}, Y: ${mouseY}`, 5, height-5);


}

function mouseMoved () {


noStroke();
fill("line")
circle(mouseX, mouseY, 50);


    fill("skyblue");
    noStroke();
    rect(width / 2, height-20, width / 2, 20);

    fill("black");
    text(`X: ${mouseX}, Y: ${mouseY}`, 220, height- 5); 


}


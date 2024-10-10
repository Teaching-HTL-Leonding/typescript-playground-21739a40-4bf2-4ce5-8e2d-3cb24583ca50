
function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();
    

   


    fill("green");
    rect(0, height / 2, width / 2);

    fill("yellow");
    rect(0, height / -2, width / 2);

    fill("red");
    rect(width / 2, height / -2, width / 2);

    fill("blue");
    rect(width / 2, height / 2, width / 2);

}

function mouseClicked() {

    fill("black");
    rect(width / 2 - width / 4, height / 2 - height / 6, width / 2, height / 3);
    

    let message: string;
    
    if (mouseX < width / 2 && mouseY < height / 2) {
        message = "Yellow"
    }
    else if(mouseX > width / 2 && mouseY < height / 2)  {
        message = "Red";
    }
    else if(mouseX < width / 2 && mouseY > height / 2) {
        message = "Green";
    }
    else {
        message = "Blue"
    }
    
    fill("white");
    textAlign(CENTER, CENTER);
    textSize(30);
    text(message, width / 2, height / 2);

}

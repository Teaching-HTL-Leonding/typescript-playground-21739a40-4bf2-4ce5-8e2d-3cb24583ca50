
function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("yellow");
    rect(0,0 ,width / 3);
     
    fill("green");
    rect(width / 3,0,width / 3);

    fill("red");
    rect(width*2/3,0,width / 3);

}

function mouseClicked() {
    
    let message: string;

    if(mouseX < width /3){
        message ="Yellow";
    } else if (mouseX < width /3 *2){
        message = "Green";
    } else {
        message ="Red";
    }



fill("black");
rect(0, height * 0.75, width, height * 0.25)


textAlign(CENTER);

fill("white");
textSize(35);
text(`${message}`, 5, height*0.80, width+10, height+10);


}

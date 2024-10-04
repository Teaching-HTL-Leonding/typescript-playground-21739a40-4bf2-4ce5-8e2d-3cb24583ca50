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
textAlign(CENTER);
text(`${message}`, width/2, 2, height*0.90);


}

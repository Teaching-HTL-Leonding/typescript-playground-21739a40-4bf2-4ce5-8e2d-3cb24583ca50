function setup() {
    createCanvas(3000, 3000);
    background("rgb(0, 255, 255)");

    fill("lightgrey");
    circle(400, 400, 300);


    fill("black");
    circle(345, 390, 30);
    circle(455, 390, 30);

    fill("HotPink");
    triangle(385, 430, 425, 430, 405, 445);


    strokeWeight(2);
    stroke("black");
    // gerade striche
    line(320, 470, 390, 470);
    line(420, 470, 490, 470);
    // Nasen Strich
    line(405, 445, 405, 485);
    //Schiefe striche
    line(320, 440, 390, 460);
    line(420, 460, 490, 440);
    //von Nasen Strich unten weg
    line(405,485, 435, 500);











}

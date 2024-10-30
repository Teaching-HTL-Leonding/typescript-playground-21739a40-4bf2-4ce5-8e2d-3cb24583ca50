const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(300, 600);
    lineHeight = height / 5;
    cellWidth = width / 3;

}

function draw() {
    background("lightgray");

    line(0, lineHeight, width, lineHeight);
    line(0, lineHeight * 2, width, lineHeight * 2);
    line(0, lineHeight * 3, width, lineHeight * 3);
    line(0, lineHeight * 4, width, lineHeight * 4);
    
    // Vertikale Linien
     line(cellWidth, lineHeight, cellWidth, lineHeight *4);
    line(cellWidth * 2, lineHeight, cellWidth * 2, height);
 

    textSize(20)
    text("0",)



}

function mouseClicked() {
    // <<< Add code here
}

const AVG_TEMP_LINZ: number[] = [
  -0.7, 0.5, 4.7, 9.9, 14.2, 17.9, 19.5, 19.3, 14.7, 10, 4.8, 0.6,
];

const AVG_TEMP_JOHANNESBURG: number[] = [
  20, 20, 18, 15, 12, 9, 9, 12, 16, 18, 18, 19,
];

const monthnames: string[] = [
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Sep",
"Oct",
"Nov",
"Dec"
]

function setup() {
  createCanvas(460, 300);

  // <<< Call the functions in the following order:
  // 1. Draw temperatures (gets AVG_TEMP_LINZ or AVG_TEMP_JOHANNESBURG as parameter)
  // 2. Draw axes
  // 3. Draw Y labels
  drawXLabels();
  drawYLabels();
  drawAxes();
}

function drawAxes() {

  push();
  strokeWeight(3)
  line(50, 50, 50, 250);
  line(50, 225, 410, 225);
  pop();



}

function drawYLabels() {

  for (let i = -5; i <= 35; i += 5) {

    let y = 225 - i * 5;
    textSize(10);
    textAlign(RIGHT, CENTER);

    push();
    strokeWeight(2);
    stroke("black");
    line(45, y, 55, y);
    pop();


    push();
    noStroke()
    fill("black");
    text(i, 40, y);
    pop();
  }
}

function drawXLabels() {

  for (let i = 1; i <= 12; i++) {
    let xLabels = 50 + i * 30;


    push();
    strokeWeight(2);
    line(xLabels, 220, xLabels, 230);
    pop();

    text(monthnames[i - 1], xLabels - 25, 210);

    rect(i, i[-1], 20 )

  }


}

function drawTemperatures(temperatures: number[]) {
  // <<< Add code to draw the temperatures here
}

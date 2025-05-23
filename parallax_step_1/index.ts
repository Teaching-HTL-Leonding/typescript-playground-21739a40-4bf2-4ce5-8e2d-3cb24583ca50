let backgroundImages: p5.Image[] = [];
let backgroundScale: number = 1;
let scaledImageWidth: number = 0;
let scaledImageHeight: number = 0;
let scrollPosition: number = 0;


function preload() {
    for (let i = 0; i < winter.length; i++) {
        backgroundImages.push(loadImage(`${BASE_URL}/winter/${winter[i]}`));
    }
}

function setup() {
    createCanvas(500, 500);

    backgroundScale = width / backgroundImages[0].width;
    scaledImageHeight = backgroundImages[0].height * backgroundScale
    scaledImageWidth = backgroundImages[0].width * backgroundScale
}

function draw() {
    background("black");


    if (keyIsDown(39)) {
        scrollPosition -= 50;
    } else if (keyIsDown(37)) {
        scrollPosition += 50
    }
let step = scrollPosition /backgroundImages.length;
    for (let i = 0; i < backgroundImages.length; i++) {
        translate(step,0);
        image(backgroundImages[i], -scaledImageWidth, 0, scaledImageWidth , scaledImageHeight);
        image(backgroundImages[i], 0, 0, scaledImageWidth, scaledImageHeight);
        image(backgroundImages[i], scaledImageWidth, 0, scaledImageWidth, scaledImageHeight);
    }
}

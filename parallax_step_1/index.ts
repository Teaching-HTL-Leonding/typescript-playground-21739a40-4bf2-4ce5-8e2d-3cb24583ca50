let backgroundImages: p5.Image[] = [];
let backgroundScale:  number = 1;
let scaledImageWidth: number = 0;
let scaledImageHeight: number = 0; 

function preload() {
    for (let i = 0; i < winter.length; i++) {
        backgroundImages.push(loadImage(`${BASE_URL}/winter/${winter[i]}`));
    }
}

function setup() {
    createCanvas(500, 500);

    backgroundScale = width / backgroundImages[0].width;
    scaledImageHeight = backgroundImages[0].height * backgroundScale
    scaledImageWidth = backgroundImages[0].width* backgroundScale

}

function draw() {
    for (let i = 0; i < backgroundImages.length; i++) {
        image(backgroundImages[i], 0, 0, scaledImageWidth, scaledImageHeight);
    }
}
let cardImage: p5.Image;
const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

function preload() {
let colorname: string; 
let cardname: string;

  // Generate random color (0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades)
  const colorIx = Math.floor(random(0, 4));

  // Generate random card (1 = Ace, 2 = 2, ..., 10 = 10, 11 = Jack, 12 = Queen, 13 = King)
  const cardIx = Math.floor(random(1, 14));

  switch(colorIx ){
    case 0: colorname = "clubs"; break;
    case 1: colorname = "diamonds"; break; 
    case 2: colorname = "hearts"; break; 
    case 3: colorname = "spades"; break;

  }
  switch(cardIx){
    case 1: cardname = "A"; break;
    case 2: cardname = "2"; break;
    case 3: cardname = "3"; break;
    case 4: cardname = "4"; break;
    case 5: cardname = "5"; break;
    case 6: cardname = "6"; break;
    case 7: cardname = "7"; break;
    case 8: cardname = "9"; break;
    case 9: cardname = "10"; break;
    case 10: cardname = "j"; break;
    case 11: cardname = "q"; break;
    case 12: cardname = "K"; break;
  }
  
}

function setup() {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);
}
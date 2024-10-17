
function setup() {
  createCanvas(400, 400);
  background("black");
  const num = Math.floor(random(0, 4096));

  const lastDigit1 = num % 16;
  let numWithoutLastDigit = Math.floor(num / 16);

  const digit2 = numWithoutLastDigit % 16;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 16);

  const digit3 = numWithoutLastDigit % 16;
  numWithoutLastDigit = Math.floor(numWithoutLastDigit / 16);



  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);


  noFill();
  stroke("yellow");
  rect(120, height / 2, 40, 75);
  rect(175, height / 2, 40, 75);
  rect(230, height / 2, 40, 75);

  fill("yellow");
  textSize(30);

  if (lastDigit1 === 10) {
    text(`A`, 250, height / 2 + 37.5)
  }
  else if(lastDigit1 === 11){
    text(`B`, 250, height / 2 + 37.5)
  } 
  else if(lastDigit1 === 12){
    text(`C`, 250, height / 2 + 37.5)
  }
    else if(lastDigit1 === 13){
    text(`D`, 250, height / 2 + 37.5)
 }  
 else if(lastDigit1 === 14){
    text(`E`, 250, height / 2 + 37.5)
  }
    else if(lastDigit1 === 15){
    text(`F`, 250, height / 2 + 37.5)
  } 
  else {
    text(`${lastDigit1}`,250, height / 2 + 37.5 )
  }
 


   if (digit2 === 10) {
    text(`A`, 195, height / 2 + 37.5)
  }
  else if(digit2 === 11){
    text(`B`, 195, height / 2 + 37.5)
  } 
  else if(digit2 === 12){
    text(`C`, 195, height / 2 + 37.5)
  }
    else if(digit2 === 13){
    text(`D`, 195, height / 2 + 37.5)
 }  
 else if(digit2 === 14){
    text(`E`, 195, height / 2 + 37.5)
  }
    else if(digit2 === 15){
    text(`F`, 195, height / 2 + 37.5)
  }
  else {
    text(`${digit2}`,195, height / 2 + 37.5 )
  }

    
    
    
   if (digit3 === 10) {
    text(`A`, 140, height / 2 + 37.5)
  }
  else if(digit3 === 11){
    text(`B`, 140, height / 2 + 37.5)
  } 
  else if(digit3 === 12){
    text(`C`, 140, height / 2 + 37.5)
  }
    else if(digit3 === 13){
    text(`D`, 140, height / 2 + 37.5)
 }  
 else if(digit3 === 14){
    text(`E`, 140, height / 2 + 37.5)
  }
    else if(digit3 === 15){
    text(`F`, 140, height / 2 + 37.5)
  }
  else {
    text(`${digit3}`,140, height / 2 + 37.5 )
  }
}
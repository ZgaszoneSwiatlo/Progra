function setup() {
  createCanvas(windowWidth, windowHeight);
}

let HoHoHo
let isCircleClicked = false;

function draw(){
  background(18, 0, 26);
  stroke(255);

let counter = 0;
  while(counter < 1000){
  mouliStarx(noise(1, counter)* (width)
    ,noise(2, counter)* (height),10,15);
  counter ++;
  }


fill(255,0,0);
  circle(730,370, 100);
  
textSize(40);
  fill(255);
  text("Click", 686,375);

  textSize(30);
  fill(255);
  text("Me", 710, 400);

}


function mouliStarx(x, y, w, h){
//Premier caractère peut pas être un chiffre, et peut pas contenir de symboles spéciaux. Caractères Alphanumériques.
  push(); 
  translate(x, y);

  if(frameCount%5==0){
    line(-w/2, 0, w/2, 0);
  }else{
 
  line(0, -h/2, 0, h/2);
  }
  pop();

}

function mouseReleased(){
  // click on the moon
  let dX = mouseX - 600;
  let dY = mouseY - 20;
  //(600, 20 coord de la lune)
  let d = sqrt(dX * dX + dY * dY);
  //d est le rayon de la lune
  if(d < 150){
    //150 est le rayon de la Lune et le if vérifie que la souris est 
    //dans le rayon
    isCircleClicked = true;
  }
}
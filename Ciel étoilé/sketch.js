function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(18, 0, 26);
  stroke(255);
  let counter = 0;
  while(counter < 1000){
  mouliStarx(noise(1, counter)* (width)
    ,noise(2, counter)* (height),10,15);
  counter ++;
  }
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
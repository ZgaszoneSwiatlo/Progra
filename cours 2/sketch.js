function setup() {
  createCanvas(windowWidth,windowHeight);
}

function windowResized(){
  resizeCanvas(windowheight, windowWidth);
}

function draw() {
  // put drawing code here
  background(0);

  fill(255);
  rect(100, 100, width - 2 * 100, height - 2 * 100);

  fill(20, 200, 10);
  textAlign(CENTER, CENTER);
  textsize(8000);
  text("Bonjour", width/2, height/2);


}
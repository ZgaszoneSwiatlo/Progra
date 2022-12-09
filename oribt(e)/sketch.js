function setup() {
  // put setup code here
  createCanvas (windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  // put drawing code here
  background(0);
  translate(width/2, height/2);
  //rotate(PI/4); //il doit être au dessus du fill et en dessous du translate
  
  push();
  rotate( millis() / 1000); //soleil
  fill(255, 255, 0);
  rect(0, 0, 400, 400);
  

  translate(800, 0); //terre
  rotate (millis() / 500)
  fill (0,128, 255);
  rect(0,0,100,100)

  translate(200, 0); //lune
  rotate (millis()/300);
  fill(128);
  rect(0,0,50,50);
  pop();

  translate(width/2, height/2);
  rotate (millis() / 900)
  fill (70,122, 205);
  rect(0,0,100,100)
  pop();

}
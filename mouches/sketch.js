function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255, 31, 31);
  // put drawing code here
r = color(229,9,9); //rouge
  fill(r);
  ellipse(width/2, 1200, 600, 900)


b = color(255); //blanc
  fill(b);
  circle(width/2, height/2, 400);

  fill(0); //ceinture
  rect(1090, 1250, 630, 20);

p = color(239,210,167); 
  fill(p);
  ellipse(width/2, 700, 300, 200);
  ellipse(width/2, 780, 100, 100);

j = color(226,184,46);
  fill(j);
  rect(1380, 1232, 50,50);

  fill(0);
   ellipse(1330, 700, 30, 80);
   ellipse(140, 700, 30, 80);

}
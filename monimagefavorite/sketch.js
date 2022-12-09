
let myFav;

//Il faugt une variable
function preload(){
  myFav = loadImage("ARIEEE.jpg");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here
  background(255, 0, 0);
  image(myFav, 0, 0); //encrage par rapport à l'angle de gauche(l et h) (400 largeur, 600 hauteur pour l'affichage)
}
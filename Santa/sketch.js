
let noel;

//Il faugt une variable
function preload(){
  noel = loadImage("noel.jpg");
}


function setup() {
  // Create a canvas for the page
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // Draw a background for the page
  background(210, 0, 0);
  image(noel, 0, 0);

}

// Define a function to handle the user's click on the element
function mousePressed() {
  // Display a Christmas message
  alert('Joyeux Noel!');
}
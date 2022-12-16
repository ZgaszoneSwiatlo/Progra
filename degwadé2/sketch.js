let degwade; 

function setup() {
 createCanvas(windowWidth, windowHeight);
 degwade = circularGradiant(width, height, 156, 50, 100, 20, 50, 200);
}

function draw() {
  background(20);
  image(degwade, 0, 0, width, height);
}

function linearGradiant(w, h, r1, v1, b1, r2, v2, b2) {
  let graphic = createGraphics(width, height); //On peut tt faire dedans mais ca ne sera pas afficher

 for(let compteur = 0 ;  compteur < height ; compteur ++ ) {
  //Il faut 3 éléments: 1 -> Variable combien de fois faire la boucle
  //2 -> SI oui ou non doit faire, si compteur est plus petit que la hauteur de la fenêtre
  // ++ va augmenter d'une valeur
      let red = map(compteur, 0, height, r1, r2); //5 paramètres
      //1 -> il modifie quoi -> compteur
      //2 et 3 -> compteur peut évoluer de 0 à x
      //4 et 5 -> modifier la valeur de 0 à 255
      let green= map(compteur, 0, height, v1, v2);
      let blue = map(compteur, 0, height, b1, b2);

  graphic.stroke(red, green, blue); //à l'interiere de degwade je veux stroke
  graphic.line(0, compteur, width, compteur); //à l'intérieure de degwade je veux une ligne
  
 }
  return graphic;
}

function circularGradiant(w, h, r1, v1, b1, r2, v2, b2) {
  let graphic = createGraphics(width, height); //On peut tt faire dedans mais ca ne sera pas afficher
  h = h * 3;
 for(let compteur = 0 ;  compteur < height ; compteur ++ ) {
  //Il faut 3 éléments: 1 -> Variable combien de fois faire la boucle
  //2 -> SI oui ou non doit faire, si compteur est plus petit que la hauteur de la fenêtre
  // ++ va augmenter d'une valeur
      let red = map(compteur, 0, height, r1, r2); //5 paramètres
      //1 -> il modifie quoi -> compteur
      //2 et 3 -> compteur peut évoluer de 0 à x
      //4 et 5 -> modifier la valeur de 0 à 255
      let green= map(compteur, 0, height, v1, v2);
      let blue = map(compteur, 0, height, b1, b2);

  graphic.fill(red, green, blue);
  graphic.stroke(0,1); //à l'interiere de degwade je veux stroke
  graphic.rotate(0, 1);
  graphic.ellipse(0, 0, height-compteur, height-compteur);
   }
  return graphic;
}

function setup() {
  // put setup code here
   //  alert("Attention, sur le site il y a un intrus ultra bg");
  createCanvas(2000, 1200) ;
  background(173, 199, 87);
  
p = color(178, 133, 133);
  fill (p);

//beginshape();
//vertex ()

b = color(109, 213, 245); //couleur bleue
  fill(b);
  noStroke();
  rect(190, 829, 70, 40); //le cou
  ellipse(240, 560, 100, 100); // oreille droite
  ellipse(80, 630, 120, 130); //oreille gauche
  ellipse(240, 735, 330, 190); //la bouche
  ellipse(210, 690, 310, 290); //le cercle principal
  rect(222, 1117, 65, 40, 0, 30, 50, 10); //pied droit
  rect(158, 1117, 65, 40, 50, 0, 10, 50); //pied gauche
  ellipse(260, 1010, 50, 40); //la main droite


  ellipse(150, 1010, 100, 30); //la queue

o = color(255); //oeil couleur blanche
  fill(o);

  circle(150, 670, 110); //oeil gauche
  circle(280, 665, 110); //oeil droite

n = color(0); //yeux (pupilles - noires)
   fill(n);

   circle(155, 670, 50); //pupille gauche
   circle(280, 665, 50); //pupille droite

m = color(191, 230, 242); //museau bleu claire
    fill(m);

    ellipse(240, 720, 110, 20); //le museau


g = color(247, 157, 22); //orange
    fill(g);

    ellipse(250, 715, 30, 10); //le petit bou orange sur le museau

p = color(252, 226, 207); //pull orange claire
    fill(p);

    rect(240, 860, 40, 100, 30, 30, 0, 0); //le bras du pull droite

v = color(176, 129, 129); //les bouts du pull brin foncé
    fill(v);

    rect(240, 940, 40, 40); //le bout du pull droite

  fill(p);
    rect(187, 850, 75, 150) //le torse
    rect(156, 970, 135, 35, 200, 400); // le bassin du bas

  fill(v);
    rect(187, 850, 75, 30);

  fill(p); //le bras du pull gauche
    rect(160, 860, 40, 100, 30, 30, 0, 0);

j = color(155, 156, 164); //bleu jean foncé
    fill(j);

    //ellipse(225, 510, 150, 50);
    rect(151, 985, 145, 30, 200, 400);
    rect(225, 1015, 40, 80); //pied jean droite
    rect(180, 1015, 40, 80); //pied jean gauche


  fill(o);
    ellipse(230, 985, 50, 20); //le bout blanc pantalon

  fill(p);
    rect(195, 965, 60, 20);

  fill(b);
    rect(160, 940, 40, 60); //le petit bout de la main gauche
    ellipse(178, 1010, 50, 40); //la main gauche

  fill(v);
    rect(160, 940, 40, 40);//le bout brun bras gauche

  fill(p);
    rect(223, 1072, 45, 45); //le bas du jean, droit
    rect(177, 1072, 45, 45); //le bas du jean, gauche

  fill(n);
      rect(130, 580, 40, 10, 10, 10, 10, 10); //sourcil gauche
      rect(230, 580, 40, 10, 10, 10, 10, 10); //sourcil droite

  fill(g);
  //noStroke();
  circle(810, 830, 100); //la petite queue uwu
  rect(570, 880, 40, 140, 30, 30, 30, 30); //le bras du pull gauche
  rect(730, 880, 40, 140, 30, 30, 30, 30); //le bras du pull droite
  rect(675, 890, 50, 250); //pied droite
  rect(620, 890, 50, 250); //pied gauche
  ellipse(650, 835, 330, 190); //la bouche
  ellipse(670, 790, 310, 290); //le cercle principal

  fill(o);
     rect(670, 1050, 60, 80); //le bout blanc droite
     rect(615, 1050, 60, 80); //le bout blanc gauche


c = color(50, 155, 50); //couleur vert foncé
  fill(c);
  rect(672, 1070, 57, 80) //le petit bout de la chaussure droite
  rect(612, 1070, 57) //le petit bout de la chaussure gauche
  rect(670, 1117, 80, 45, 30, 30, 50, 10); //pied droit
  rect(589, 1117, 80, 45, 50, 30, 10, 50); //pied gauche

  fill(o);
  rect(670, 1390, 60);
  circle(580, 760, 110); //oeil gauche
  circle(710, 755, 110); //oeil droite
  rect(728, 1117, 30, 45, 0, 30, 30, 0); //bout blanc du pied droit
  rect(583, 1117, 30, 45, 30, 0, 0, 30); //bout blanc du pied gauche

  fill(n);

   circle(585, 760, 50); //pupille gauche
   circle(710, 755, 50); //pupille droite
   rect(622, 820, 60, 2, 10, 10, 10, 10); //sourire Darwin


  fill(n);
      rect(580, 680, 40, 10, 10, 10, 10, 10); //sourcil gauche
      rect(680, 680, 40, 10, 10, 10, 10, 10); //sourcil droite

  fill(o);
      ellipse(656, 1120, 20, 30);
      ellipse(684, 1120, 20, 30);

a = color(255, 174, 51); //orange claire
  fill(a);
    circle(575, 835, 40); //blush gauche
    circle(735, 830, 40); //blush droite


/*s = color(245, 173, 189);
  fill(s);
    ellipse(1030, 905, 310, 170); //la bouche
    llipse(1060, 860, 290, 270); //le cercle principal

  fill(g);
    triangle(1030, 1100, 1120, 1100, 1130);
   pour le rectangle 4 chiffres: 1-horizontale (ou il se trouve) , 2-verticale (ou il se trouve) , 
   3-largeur du rectangle , 4- hauteur du rectangle*/



  fill(129); 
  // fill est un remplissage de couleurs, tout ce qui va être creer après sera de la couleur choisi
  
  //pour les autres formes il faut y aller sur le site p5js reference
}

function draw() {
  // put drawing code here
}
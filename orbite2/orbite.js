function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
    //le contournement eazyyy
    background(0);//univers
     
       
     //SOLEIL
    //donne le centre de l'univers
    //les planet tournerons autour du soleil

     translate(width/2, height/2);//CENTRE
    noStroke();//pas de borre noir
    
    //rayon du soleil
    
    //push pop pour isolé, les rayons sont idépendant de la rotation du soleil, ils ont leurs propre rotation
        
        //rayon A
            push(); //push pop du rayon A
			rotate(millis()/ -450);//vitesse de rotation sur elle meme (negativement)
  	        noStroke(); //pas de borre noir
			fill(242,146,0)//couleur
			rect(0,0,35,35);
			pop();
    
		//rayon B	
			push();//push pop du rayon B
			rotate(millis()/ 450);//vitesse de rotation sur elle meme 
			noStroke(); //pas de borre noir
			fill(242,121,0)//couleur
			rect(0,0,35,35);
			pop();
   
       //rayon C
			push();//push pop du rayon C
			rotate(millis()/ 550);//vitesse de rotation sur elle meme 
			noStroke(); //pas de borre noir
			fill(237,103,1)//couleur
			rect(0,0,35,35);
			pop();
 
    
    
    //SOLEIL
   
    rectMode(CENTER);
    fill(255,153,0)//couleur
    circle(0,0,40);  
    

    //MERCURE
   
    push();
  
      
      rotate(millis()/300);//vitesse de rotation autour du soleil
      translate(38,0); //distance par rapport au centre
      fill(19,223,65);//couleur
      circle(0,0,7);
    
    pop();
  

    //VENUS
    
    push();
    
    rotate(millis()/400);//vitesse de rotation autour du soleil
    translate(120,0);//distance par rapport au centre
    fill(255,255,255);//couleur
    circle(0,0,7);
    
    pop();
    
  
    //TERRE
    
    push(); //lune integré car c'est un systeme avec la terre
    
    rotate(millis()/500);//vitesse de rotation autour du soleil 
    translate(200,0);
    fill(0,0,255);//couleur
    circle(0,0,10);
    
    //LUNE
     
    rotate(millis()/500);//vitesse de rotation autour de la Terre
    translate(30,0);//distance par rapport au centre de la Terre 
    fill(251,255,228);//couleur
    circle(0,0,4);
    
    pop();
    
    
    //MARS
    
    push();
    
     rotate(millis()/700);//vitesse de rotation autour du soleil
     translate(270,0);//distance par rapport au centre
     fill(255,50,50);
     circle(0,0,10);
    
    pop();
    
    //JUPITER
    
    push();
    
    rotate(millis()/750);//vitesse de rotation autour du soleil
    translate(310,0);//distance par rapport au centre
    fill(179,89,0);//couleur
    circle(0,0,25);
    
    pop();
    
    //SATURNE
    
    push(); //du systeme Saturien
    
    
    rotate(millis()/800);//vitesse de rotation autour du soleil
    translate(400,0);//distance par rapport au centre
    fill(255,184,77);
    circle(0,0,30);
    
   
   
    
    //LUNE 1
    
    
    push();//de lune 1 autour de saturne
    
     rotate(millis()/100);//vitesse de rotation autour de Saturne
    translate(20,0);//distance par rapport au centre de Saturne
    fill(251,255,228);//couleur
    circle(0,0,2);
  
    pop();//de lune 1
   
     
    
    //LUNE 2
    
    push();//de lune 2 autour de saturne
    
    rotate(millis()/150);//vitesse de rotation autour de Saturne
    translate(25,0);//distance par rapport au centre de Saturne 
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    pop();//de lune 2
    
  
    //LUNE 3
    
      push();//de lune 3 autour de saturne 
    
    rotate(millis()/240);//vitesse de rotation autour de Saturne
    translate(30,0);//distance par rapport au centre de saturne
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    pop();//de lune 3
    
    //LUNE 4
    
    push();//de lune 4 autour de saturne
    
    rotate(millis()/300);//vitesse de rotation autour de Saturne
    translate(33,0);//distance par rapport au centre de saturne
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    pop();//de lune 4
    
    //LUNE 5
    
    push();//de lune 5 autour de Saturne
    
     rotate(millis()/400);//vitesse de rotation autour de Saturne
    translate(37,0);//distance par rapport au centre de saturne
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    
    pop();// de lune 5
    
    //LUNE 6
    
    push();//de la lune 6 autour de Saturne
    
     rotate(millis()/425);//vitesse de rotation autour de Saturne
    translate(43,0);//distance par rapport au centre de saturne
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    pop();// de lune6
   
    //LUNE 7
    
    push();//de la lune 7 autour de Saturne
    
     rotate(millis()/450);//vitesse de rotation autour de Saturne
    translate(46,0);//distance par rapport au centre de saturne
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    pop()//de lune 7
    
    //LUNE 8
    
    push();//de la lune 8 autour de Saturne 
    
     rotate(millis()/520);//vitesse de rotation autour de Saturne
    translate(50,0);//distance par rapport au centre de saturne
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    pop();//de lune 8
    
    pop();//du systeme saturien
 
  
    //URANUS
    
    push();
   
    
    rotate(millis()/900);//vitesse de rotation autour du soleil
    translate(500,0);//distance par rapport au centre 
    fill(153,230,255);//couleur
    circle(0,0,15);
    
    pop();
    
    //NEPTUNE
    
    push();
    
    rotate(millis()/1100);//vitesse de rotation autour du soleil
    translate(600,0);//distance par rapport au centre
    fill(102,179,255);//couleur
    circle(0,0,15);
    
    pop();
    
}
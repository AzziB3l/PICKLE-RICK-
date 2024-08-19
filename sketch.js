function setup(){
    createCanvas( 600, 600);
   background( "#FFB2FAF9(255)");
}
function draw() {
  
  
  stroke("FFC4C4")
   fill(" #DAB2FFF9(223)")

  // console.log (mouseIsPressed);
  
 
   
   if ( mouseIsPressed ) {
      rect (mouseX, mouseY, 20, 30)
   }
}
let clicked = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
 
  if (clicked){
    background(255, 255, 0);
  }
  else
  {
    background(255);  

  }
  
  ellipse(200, 200, 50);

}

function mouseClicked()
{
  //TODO: add if statement with bounding box
  if(mouseX > 175 && 
     mouseY < 225 && 
     mouseY> 175 && 
     mouseX < 225
    ) {
  clicked = !clicked;   
  }     
  

}

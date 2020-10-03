var MR, FR; 



function setup() {
  createCanvas(1200,800);
  MR = createSprite(200,200,50,80);
  FR= createSprite(400,200,80,30);
  MR.shapeColor="green";
  FR.shapeColor="green";

  MR.debug=true;
  FR.debug=true; 
}

function draw() {
  background("black");

  console.log(MR.x-FR.x); 

  if(MR.x-FR.x<FR.width/2+MR.width/2 && FR.x-MR.x<FR.width/2+MR.width/2 && MR.y-FR.y<MR.height/2+FR.height/2 && FR.y-MR.y<MR.height/2+FR.height/2){
    MR.shapeColor="red";
    FR.shapeColor="red"; 
  }

  else {
    MR.shapeColor="green";
    FR.shapeColor="green";
  }
  
  MR.x=mouseX;
  MR.y=mouseY;
  drawSprites();
}
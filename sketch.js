var bg, issImg, spaceCraftImg, lcImg, lcImg2, lcImg3;
var iss;
var hasDocked = false;

function preload() {
bg = loadImage("spacebg.jpg");
issImg = loadImage("iss.png");
spaceCraftImg = loadImage("spacecraft1.png");
lcImg = loadImage("spacecraft2.png");
lcImg2 = loadImage("spacecraft3.png");
lcImg3 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(330,130);
  iss.addImage(issImg)
  iss.scale = 0.5;

  spaceCraft = createSprite(280,240);
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.scale = 0.15;
}

function draw() {
  background(bg);
  spaceCraft.addImage(spaceCraftImg)
  
  if(keyDown("UP_ARROW")) {
    spaceCraft.y = spaceCraft.y - 2;
  }

  if(keyDown("DOWN_ARROW")) {
    spaceCraft.y = spaceCraft.y + 2;
  }

  if(keyDown("LEFT_ARROW")) {
    spaceCraft.x = spaceCraft.x - 2;
    spaceCraft.addImage(lcImg2);
  }

  if(keyDown("RIGHT_ARROW")) {
    spaceCraft.x = spaceCraft.x + 2;
    spaceCraft.addImage(lcImg3);
  }

  if(!hasDocked) {
    spaceCraft.x = spaceCraft.x + random(-1,1);
  }

  if(spaceCraft.y <= (iss.y + 70) && spaceCraft.x <= (iss.x - 10)) {
    textSize(25);
    fill("white");
    text("DOCKING SUCSESSFUL", 200, 300);
    hasDocked = true;
  }
  drawSprites();
}
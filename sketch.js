
function preload(){
  ninjaImage = loadImage("png/Run__001.png")
  bgImage = loadImage("bg.jpg")
}

function setup() {
  createCanvas(800,600);
  bg = createSprite(40, 200, 50, 50);
  bg.addImage(bgImage)

  ninja = createSprite(200,380)
  ninja.addImage(ninjaImage)
  ninja.scale = 0.2

}

function draw() {
  background(0);  

  drawSprites();
}
var backgroundImage, bg
var SoldadoImage, Soldado
var Zombie1,Zombie2,Zombie3
var GroundInv, Ground

function preload(){
  backgroundImage = loadImage("./assets/Teste.jpg")
  SoldadoImage = loadImage("./assets/Soldado.gif")
  Zombie1 = loadImage("./assets/Zumbi.gif")
  Zombie2 = loadImage("./assets/Zumbi_Rapido.gif")
  Zombie3 = loadImage("./assets/Zumbi_Mulher.gif")
}

function setup() {
  createCanvas(1600,1000);

  bg = createSprite(800,500)
  bg.addImage("backgroundd", backgroundImage)
  //bg.scale = 0.95
  
  Soldado = createSprite(100,height-100)
  Soldado.addImage("soldadoo", SoldadoImage)
  Soldado.scale = 0.7

  GroundInv = createSprite(1500,800,600,10)
  Ground = createSprite(800,990,1600,10)
}

function draw() {
  background(0);
  CreateZombie();
  drawSprites();
}

function CreateZombie(){
  if(frameCount % 90 == 0){

    var Zumbi = createSprite(width,height-100)
    Zumbi.velocityX = -4
    Zumbi.scale = 0.15
    var x = Math.round(random(1,3))
    switch(x){
      case 1: Zumbi.addImage("Zumbi_1", Zombie1)
      break
      case 2: Zumbi.addImage("Zumbi_2", Zombie2)
      break
      case 3: Zumbi.addImage("Zumbi_3", Zombie3)
      break
      default:
      break
    } 
  }
}
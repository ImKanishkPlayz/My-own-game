var canvas, backgroundImage;

var gameState = 0;

var form, player, game;

var ninja;

function preload(){
  backgroundImage = loadImage("images/village-1.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  game = new Game();
 
  game.start();
}


function draw(){
  background(backgroundImage);
  if(gameState === 1){
    clear();
    game.play();
  }


  if(gameState === 2){
    game.end();
  }
}

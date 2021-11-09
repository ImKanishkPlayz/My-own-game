class Game {
  constructor(){

  }

  

  start(){
    if(gameState === 0){
      player = new Player();
      
      form = new Form()
      form.display();
    }
    ninja = createSprite(280, height - 210);
    ninja.addAnimation("forward", ninjaImg);
    ninja.addAnimation("backward", enemyNinjaImg);
    ninja.scale = 0.5;
  }

  play(){
    form.hide();
    background(backgroundImage);

    if(keyIsDown(LEFT_ARROW)){
      ninja.x = ninja.x - 6
      ninja.changeAnimation("backward", enemyNinjaImg);
    }

    if(keyIsDown(RIGHT_ARROW)){
      ninja.x = ninja.x + 6
      ninja.changeAnimation("forward", ninjaImg);
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}

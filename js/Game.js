class Game {
  constructor(){

  }

  

  start(){
    if(gameState === 0){
      player = new Player();
      
      form = new Form()
      form.display();
    }
    ninja = createSprite(280, 400);
  }

  play(){
    form.hide();
    
    if(keyIsDown(UP_ARROW)){
      ninja.x + 1
    }

    if(keyIsDown(DOWN_ARROW)){
      ninja.x - 1
    }

    if(keyIsDown(LEFT_ARROW)){
      ninja.y + 1
    }

    if(keyIsDown(RIGHT_ARROW)){
      ninja.y - 1
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}

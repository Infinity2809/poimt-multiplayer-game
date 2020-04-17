var database,playerCount,gameState,form,game,player,distance,playerContent;
gameState=0;
distance=0;
function setup(){
    createCanvas(700,1000);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}
function draw(){
    background("white");
    if (playerCount==4){
        game.update(1);
    }
  if (gameState==1){
      clear();
      game.play();
  }
}
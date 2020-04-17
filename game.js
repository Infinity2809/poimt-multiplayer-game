class Game {
    constructor(){
     }
     getState(){
        var gameRef=database.ref('gameState');
        gameRef.on("value",function (data){
            gameState=data.val();
        });
     }
     
      update(state){
          database.ref('/').update({
              gameState:state
          });
      }
      async start(){
      if (gameState===0){
          player = new Player();
          var pcref=await database.ref('playerCount').once("value");
          if (pcref.exists()){
              playerCount = pcref.val();
              player.getcount();
            }
          form= new Form();
          form.display();
      }

      }
    play(){
        form.hide();
        textSize(32);
        text("The race has begun",250,200);
        Player.getinfo();
         if (playerContent!==undefined){
             var displayPosition = 200;
             for (var plr in playerContent){
             console.log("works");
             if (plr=="player"+player.index){
             fill("blue");
             }
             else {
                 fill("red")
             }
             displayPosition+=25;
             textSize(16);
             text(playerContent[plr].name+"=:"+playerContent[plr].distance,250,displayPosition);
             }
         
            }
       if (keyIsDown(UP_ARROW)&&player.index!==null){
           player.distance+=40;
           player.update();
       }
     }
     
}
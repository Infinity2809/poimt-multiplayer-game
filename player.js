class Player{
     constructor(){
                this.index=null ;
                this.distance= 0 ;
                this.name= null;
            }
      getcount(){
            var pcref=database.ref('playerCount');
            pcref.on("value",function (data){
                playerCount=data.val();
            });
        }
     updateCount(count){
            database.ref('/').update({
                playerCount:count
            });
            }
     update(){
                var playerIndex="players/player"+this.index;
                database.ref(playerIndex).set({
                    name:this.name ,  distance:this.distance
                })
            }
     static getinfo() {
             var inforef = database.ref('players');
             inforef.on("value", (data)=>{
                    playerContent = data.val();

             })
     }  
    }
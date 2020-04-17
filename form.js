class Form{
    constructor(){
        this.input= createInput("Put your username here");
        this.button = createButton('Enter');
        this.greeting = createElement('h5');
    }
    hide(){
     this.button.hide();
     this.greeting.hide();
     this.input.hide();
    }
     display(){
        var title=createElement('h1');
        title.html("Car Racing Game");
        title.position(100,50);
       this.input.position(200,300);
       this.button.position(220,400);
        this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index=playerCount
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Greetings"+player.name);
            this.greeting.position(225,250);
        } )
    }
}
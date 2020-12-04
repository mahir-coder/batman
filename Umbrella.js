class Umbrella{
    constructor(x,y){
        
        var options={
            isStatic: true
        }
        this.body = Bodies.circle(x,y,100,options)
        World.add(world,this.body)
        this.image = loadImage("images/Walking Frame/walking_4.png")
        
    }
    display(){
        push()
        image(this.image,this.body.position.x,this.body.position.y,200,200)
        pop()
    }
}
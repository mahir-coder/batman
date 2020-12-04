class Drop{
    constructor(x,y){
    var options={
isStatic:false

    }
    this.body = Bodies.circle(x,y,10,options)
    World.add(world,this.body)
   

} 

display(){
    push()
    fill(102, 204, 255)
    ellipse(this.body.position.x,this.body.position.y,10,10)

    if(this.body.position.y>height){
        
    Matter.Body.setPosition(this.body,{x:this.body.position.x,y:0})
    pop()
    }
}
}



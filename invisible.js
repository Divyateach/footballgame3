class Invisible{
    constructor(x,y,r){
        var options={
            isStatic:true,
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        //this.image=loadImage("images/football.png")  
    this.body=Bodies.circle(this.x,this.y,this.r,options)
    World.add(world,this.body);
   
    }
    display(){
    var pos=this.body.position;
   strokeWeight(0)
   fill ("white")
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,this.r*2,this.r*2)
    
    }
    
}
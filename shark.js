class Shark{
    constructor(x,y){
        var options={
            isStatic :true
        }
        this.image=loadImage("images/shark.jpg");
        this.body=Bodies.circle(x,y,5,options);
        this.radius=5;
        World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    ellipseMode(CENTER);
    image(pos.x,pos.y,5,5);
    }

}
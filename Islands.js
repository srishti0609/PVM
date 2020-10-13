class Islands{
    constructor(){
        var options={
            isStatic: true
        }
        this.body=Bodies.circle(x,y,r);
        this.r=r;
        this.image=loadImage("images/islands.png");
        World.add(world,this.body);
    }
    display(){
        pos=this.body.position();
        x=random(0,displayWidth);
        y=random(0,displayHeight);
        ellipseMode(CENTER);
        image(this.image,x,y,10*2);
    }

}
class Rain{

    constructor(x,y){
        this.rain=Bodies.circle(x,y,5,{friction: 0.1,isStatic: false});
        World.add(world,this.rain);
    }
    display(){
        ellipseMode(RADIUS);

        fill("blue");
        circle(this.rain.position.x,this.rain.position.y,5);
    }
}
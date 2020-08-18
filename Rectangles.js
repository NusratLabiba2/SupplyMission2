class Rectangle{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(0, 0, width, height, options);
        this.height = height;
        this.width = width;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        translate(pos.x, pos.y);
        fill(255, 0, 0);
        rect(0, 0, this.width, this.height);
    }
}
   
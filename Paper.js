class Paper{
    constructor(x,y,r) {
        var options = {
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:0.8
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("white");
        ellipse(0, 0, this.r, this.r);
        pop();
      }
    }
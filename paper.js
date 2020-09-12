class Paper
{
    constructor(x, y, radius)
    {
        var paper_options=
        {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.paperIMG = loadImage("paper.png");
        
        this.body = Bodies.circle(x, y, radius, paper_options);   
        World.add(world, this.body);
    }

    display()
    {
        var position = this.body.position;
        var angle = this.body.angle;

        push();

        translate(position.x, position.y);
        rotate(angle);
        
        imageMode(CENTER);
        image(this.paperIMG, 0, 0, 40, 40);
        pop();
    }
}
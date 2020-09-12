class Ground
{
    constructor(x, y, width, height)
    {
        var ground_options =
        {
            isStatic:true
        }

        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, this.width, this.height, ground_options);
        World.add(world, this.body);
    }

    display()
    {
        var position = this.body.position;
        var angle = this.body.angle;

        push();

        rectMode(CENTER);
        fill("blue");
        rect(position.x, position.y, this.width, this.height);

        pop();
    }
}
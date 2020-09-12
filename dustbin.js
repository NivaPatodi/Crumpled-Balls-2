class Dustbin
{
  constructor(x, y, height, angle) 
  {
    var dustbin_options = 
    {
        isStatic : true
    }

    this.width = 20;
    this.height = height;

    this.body = Bodies.rectangle(x, y, this.width, this.height, dustbin_options);   
    World.add(world, this.body);
    angleMode(DEGREES);
    Matter.Body.setAngle(this.body, angle);    
  }

  display()
  {
    var position = this.body.position;
    var angle = this.body.angle;

    push();

    translate(position.x, position.y);
    rotate(angle);
    
    pop();
  }
}
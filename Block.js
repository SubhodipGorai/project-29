class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block.png")
      this.width = width;
      this.height = height;
      this.visiblity = 255;
      World.add(world, this.body);

    }
    display(){
      if (this.body.speed < 3) {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      }else{
        push()
        World.remove(world,this.body)
        this.visiblity = this.visiblity - 10
        tint(255,this.visiblity)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop()
      }

      }

 
}
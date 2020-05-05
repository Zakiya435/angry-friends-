class Enemy extends BaseClass {
  constructor(x, y){
    super(x,y,60,50);
    this.image = loadImage("enemy1.png");
    this.Visiblity = 255;
  }

 display(){
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 60, 50);
     pop();
   }
   
 }
  score()
  {
     if((this.visibility<0)&&(this.visibility>-1005))
     {
       score++;
     }
  }


};
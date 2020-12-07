class dustbin{
    constructor(x,y,width,height){
        this.width=width
        this.height=height
        var ground_options={
            isStatic:true
        }
        this.image=loadImage("sprites/dustbingreen.png");
      this.body=Bodies.rectangle(x,y,width,height,ground_options)
      World.add(world,this.body);
    }

        
      
    display(){
        var position=this.body.position;
        imageMode(CENTER)
        image(this.image,610,630,90,100)
        image(this.image,690,630,90,100)
        image(this.image,770,630,90,100)
    }
    } 
class CircleGameObject extends GameObject{
    constructor(){
        super("Circle Game Object")
        this.components.push(new CircleController())
        
    }
}
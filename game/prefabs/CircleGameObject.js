class CircleGameObject extends GameObject{
    constructor(){
        super()
        this.components.push(new CircleController())
    }
}
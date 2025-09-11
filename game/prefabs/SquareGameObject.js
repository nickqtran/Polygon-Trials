class SquareGameObject extends GameObject{
    constructor(){
        super()
        this.components.push(new SquareController())
    }
}
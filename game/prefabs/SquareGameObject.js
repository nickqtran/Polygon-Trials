class SquareGameObject extends GameObject{
    constructor(){
        super("Square Game Object")
        this.components.push(new SquareController())
    }
}
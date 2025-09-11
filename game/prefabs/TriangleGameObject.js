class TriangleGameObject extends GameObject{
    constructor(){
        super()
        this.components.push(new TriangleController())
    }
}
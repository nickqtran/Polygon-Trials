class TriangleGameObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new TriangleController()) // use addComponent, not push
    }
}

class TriangleGameObject extends GameObject {
    constructor() {
        super("Triangle Game Object")
        this.addComponent(new TriangleController()) // use addComponent, not push
    }
}

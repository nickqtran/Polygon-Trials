class TriangleGameObject extends GameObject {
    constructor() {
        super("Spaceship Game Object")
        this.addComponent(new TriangleController()) // use addComponent, not push
    }
}

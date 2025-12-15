class TriangleGameObject extends GameObject {
    constructor() {
        super("Spaceship Game Object")
        this.addComponent(new TriangleController()) // use addComponent, not push
        this.addComponent(new Transform())
        this.addComponent(new Collider())
        this.layer = ""
        this.collisionlayer = "Player"
    }
}

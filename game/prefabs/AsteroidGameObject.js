class AsteroidGameObject extends GameObject {
    constructor(x, y, size = 30) {
        super("Asteroid Game Object")

        // Polygon shape
        this.addComponent(new Polygon(), {fillStyle: "grey"})

        // Initial position + scale
        this.transform.position = new Vector2(x, y)
        this.transform.scale = new Vector2(size, size)
    }
}

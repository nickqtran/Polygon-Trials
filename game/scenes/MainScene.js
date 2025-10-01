class MainScene extends Scene {
    constructor() {
        super()
        this.gameObjects = []

        this.gameObjects.push(new TriangleGameObject())

        const asteroidManager = new GameObject()
        asteroidManager.addComponent(new AsteroidController())
        this.gameObjects.push(asteroidManager)
    }
}

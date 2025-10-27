class MainScene extends Scene {
    constructor() {
        super()
        this.gameObjects = []

        //this.gameObjects.push(new TriangleGameObject())
        this.instantiate(new TriangleGameObject())

        const asteroidManager = new GameObject()
        asteroidManager.addComponent(new AsteroidController())
        this.gameObjects.push(asteroidManager)
    }
}


// TO DO LIST:
// Make collision feature (if asteroid collides with spaceship, reset game | if laser collides with asteroid, destroy asteroid)
// Make so player has to hit space to fire lasers rather than automatically shooting
// Make score feature (if laser destroys asteroid, score goes up 1)
// Make random "coins" randomly spawn in for extra points 
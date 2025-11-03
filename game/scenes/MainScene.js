class MainScene extends Scene {
    constructor() {
        super()
        this.gameObjects = []

        //this.gameObjects.push(new TriangleGameObject())
        this.instantiate(new TriangleGameObject())
        this.scoreObject = this.instantiate(new ScoreGameObject(), new Vector2(100, 30))

        const asteroidManager = new GameObject()
        asteroidManager.addComponent(new AsteroidController())
        this.gameObjects.push(asteroidManager)

        // Coin Manager
        const coinManager = new GameObject()
        coinManager.addComponent(new CoinController())
        this.gameObjects.push(coinManager)        
    }
}


// TO DO LIST:
// Make collision feature (if asteroid collides with spaceship, reset game)
// Make random "coins" randomly spawn in for extra points and disappear on a timer (create new CoinGameObject and CoinController)
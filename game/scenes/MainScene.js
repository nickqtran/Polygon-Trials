class MainScene extends Scene {
    constructor(highScoreController) {
        super()
        this.highScoreController = highScoreController
    }

    start() {
        // Spaceship
        this.instantiate(new TriangleGameObject())

        // Score
        this.scoreObject = this.instantiate(new ScoreGameObject(), new Vector2(100, 30))

        // Asteroid Manager
        const asteroidManager = new GameObject()
        const asteroidController = new AsteroidController()
        asteroidController.highScoreController = this.highScoreController // pass reference
        asteroidManager.addComponent(asteroidController)
        this.gameObjects.push(asteroidManager)

        // Coin Manager
        const coinManager = new GameObject()
        coinManager.addComponent(new CoinController())
        this.gameObjects.push(coinManager)
    }
}

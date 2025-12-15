class MainScene extends Scene {
    start() {
        // Starfield
        this.instantiate(new StarsGameObject())
        
        // Spaceship
        this.instantiate(new TriangleGameObject())

        // Score 
        this.scoreObject = this.instantiate(new ScoreGameObject(), new Vector2(100, 30))

        // High Score 
        const highScoreGO = new HighscoreGameObject()
        highScoreGO.transform.position = new Vector2(350, 30) // Position it on screen
        this.instantiate(highScoreGO);

        // Asteroid Manager
        const asteroidManager = new GameObject()
        asteroidManager.addComponent(new AsteroidController())
        this.instantiate(asteroidManager)

        // Coin Manager
        const coinManager = new GameObject()
        coinManager.addComponent(new CoinController());
        this.instantiate(coinManager)
    }
}

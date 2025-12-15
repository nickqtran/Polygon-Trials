class CoinController extends Component {
    start() {
        this.timeSinceLastSpawn = 0
        this.spawnInterval = this.getRandomSpawnTime() // time (seconds) between spawns
    }

    update() {
        this.timeSinceLastSpawn += Time.deltaTime
        if (this.timeSinceLastSpawn >= this.spawnInterval) {
            // Spawn a new coin using instantiate()
            const coin = new CoinGameObject()
            coin.transform.position = new Vector2(Math.random() * 600, Math.random() * 400)

            Engine.addGameObject(coin)
            this.timeSinceLastSpawn = 0
            this.spawnInterval = this.getRandomSpawnTime()
        }
    }

    spawnCoin() {
        const coin = new CoinGameObject()
        coin.position.set(Math.random() * Canvas.width, Math.random() * Canvas.height)
        this.coins.push(coin)
    }

    getRandomSpawnTime() {
        return 10 + Math.random() * 5 // 10-15 seconds spawnrate
    }
}
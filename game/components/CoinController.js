class CoinController extends Component {
    start() {
        this.timeSinceLastSpawn = 0
        this.spawnInterval = 5 // seconds between spawns
        this.coins = []
    }

    update() {
        this.timeSinceLastSpawn += Time.DeltaTime
        if (this.timeSinceLastSpawn >= this.spawnInterval) {
            // Spawn a new coin using instantiate()
            instantiate(new CoinGameObject())
            this.timeSinceLastSpawn = 0
        }
    }

    spawnCoin() {
        const coin = new CoinGameObject()
        coin.position.set(Math.random() * Canvas.width, Math.random() * Canvas.height)
        this.coins.push(coin)
    }
}
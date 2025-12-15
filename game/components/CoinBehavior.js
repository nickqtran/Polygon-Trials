class CoinBehavior extends Component {
    start() {
        this.lifeTime = 7 // time before despawn
        this.timer = 0 
    }

    update() {
        this.timer += Time.deltaTime
        
        if (this.timer >= this.lifeTime) {
            this.gameObject.destroy()
        }
    }

    onCollisionEnter(other) {
        // Check if spaceship collides with a coin
        if (other.name === "Spaceship Game Object") {
            const activeScene = SceneManager.getActiveScene()
            if (!activeScene) return

            const scoreObject = activeScene.gameObjects.find(obj => obj.name === "Score Game Object")
            if (scoreObject) {
                scoreObject.getComponent(ScoreController).addPoint(1)
            }
            
            this.gameObject.destroy()
        }
    }
}
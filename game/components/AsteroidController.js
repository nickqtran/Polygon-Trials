class AsteroidController extends Component {
    start() {
        this.asteroids = []
        this.cooldown = 0
        this.spawnRate = 8 * 60 // 8 seconds at 60fps
        this.spawnCount = 1     // how many to spawn each cycle
        this.timeElapsed = 0    // track total frames
    }

    update() {
        const activeScene = SceneManager.getActiveScene()
        if (!activeScene) return

        this.cooldown--
        this.timeElapsed++

        // Every 40 seconds, increase spawnCount by 1
        if (this.timeElapsed % (40 * 60) === 0) {
            this.spawnCount += 1
        }

        // Spawn logic
        if (this.cooldown <= 0) {
            for (let i = 0; i < this.spawnCount; i++) {
                this.spawnAsteroid()
            }
            this.cooldown = this.spawnRate
        }

        // Update asteroid movement and screen wrapping
        for (let asteroid of this.asteroids) {
            asteroid.transform.position.x += asteroid.velocity.x * asteroid.speed
            asteroid.transform.position.y += asteroid.velocity.y * asteroid.speed

            if (asteroid.transform.position.x < 0) asteroid.transform.position.x = Engine.canvas.width
            if (asteroid.transform.position.x > Engine.canvas.width) asteroid.transform.position.x = 0
            if (asteroid.transform.position.y < 0) asteroid.transform.position.y = Engine.canvas.height
            if (asteroid.transform.position.y > Engine.canvas.height) asteroid.transform.position.y = 0
        }

        // Laser collisions
        const lasers = activeScene.gameObjects.filter(obj => obj.name === "Laser Game Object")

        for (let i = this.asteroids.length - 1; i >= 0; i--) {
            const asteroid = this.asteroids[i]

            for (let laser of lasers) {
                // Skip destroyed lasers
                if (!laser || !activeScene.gameObjects.includes(laser)) continue

                const dx = asteroid.transform.position.x - laser.transform.position.x
                const dy = asteroid.transform.position.y - laser.transform.position.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < asteroid.size + 7) {
                    // Destroy asteroid
                    this.asteroids.splice(i, 1)

                    // Destroy laser safely
                    laser.destroy()

                    // Add to score
                    const scoreObject = activeScene.gameObjects.find(obj => obj.name === "Score Game Object")
                    if (scoreObject) {
                        scoreObject.getComponent(ScoreController).addPoint(1)
                    }

                    break // Stop checking other lasers for this asteroid
                }
            }
        }

        // Spaceship collision
        const spaceship = activeScene.gameObjects.find(obj => obj.name === "Spaceship Game Object")
        if (spaceship) {
            for (let asteroid of this.asteroids) {
                const dx = asteroid.transform.position.x - spaceship.transform.position.x
                const dy = asteroid.transform.position.y - spaceship.transform.position.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                const shipRadius = 20

                if (distance < asteroid.size + shipRadius) {
                    // Update high score
                    const scoreObject = activeScene.gameObjects.find(obj => obj.name === "Score Game Object")
                    const highScoreObject = activeScene.gameObjects.find(obj => obj.name === "Highscore Game Object")
                    if (scoreObject && highScoreObject) {
                        const currentScore = scoreObject.getComponent(ScoreController).score
                        highScoreObject.getComponent(HighscoreController).checkHighScore(currentScore)
                    }

                    // Reset game safely
                    SceneManager.loadScene(new StartScene())
                    return // Stop further asteroid processing
                }
            }
        }
    }

    draw(ctx) {
        for (let asteroid of this.asteroids) {
            ctx.save()
            ctx.translate(asteroid.transform.position.x, asteroid.transform.position.y)

            ctx.beginPath()
            ctx.arc(0, 0, asteroid.size, 0, Math.PI * 2)
            ctx.fillStyle = "grey"
            ctx.strokeStyle = "white"
            ctx.fill()
            ctx.stroke()

            ctx.restore()
        }
    }

    spawnAsteroid() {
        let x, y
        const edge = Math.floor(Math.random() * 4)

        if (edge === 0) {
            x = Math.random() * Engine.canvas.width
            y = 0
        } else if (edge === 1) {
            x = Math.random() * Engine.canvas.width
            y = Engine.canvas.height
        } else if (edge === 2) {
            x = 0
            y = Math.random() * Engine.canvas.height
        } else {
            x = Engine.canvas.width
            y = Math.random() * Engine.canvas.height
        }

        const asteroid = {
            transform: { position: new Vector2(x, y) },
            size: 20 + Math.random() * 20,
            speed: 1 + Math.random() * 1.5,
            velocity: new Vector2(
                (Math.random() - 0.5) * 2,
                (Math.random() - 0.5) * 2
            )
        }

        this.asteroids.push(asteroid)
    }
}

class AsteroidController extends Component {
    start() {
        this.asteroids = [];
        this.cooldown = 0;

        this.spawnRate = 5 * 60; // 5 seconds at 60fps
        this.spawnCount = 1;     // how many to spawn each cycle
        this.timeElapsed = 0;    // track total frames
    }

    update() {
        this.cooldown--;
        this.timeElapsed++;

        // Every 40 seconds, increase spawnCount by 1
        if (this.timeElapsed % (40 * 60) === 0) {
            this.spawnCount += 1;
        }

        // Spawn logic
        if (this.cooldown <= 0) {
            for (let i = 0; i < this.spawnCount; i++) {
                this.spawnAsteroid();
            }
            this.cooldown = this.spawnRate;
        }

        // Update asteroid movement
        for (let asteroid of this.asteroids) {
            asteroid.transform.position.x += asteroid.velocity.x * asteroid.speed;
            asteroid.transform.position.y += asteroid.velocity.y * asteroid.speed;

            // Screen wrapping
            if (asteroid.transform.position.x < 0) asteroid.transform.position.x = Engine.canvas.width;
            if (asteroid.transform.position.x > Engine.canvas.width) asteroid.transform.position.x = 0;
            if (asteroid.transform.position.y < 0) asteroid.transform.position.y = Engine.canvas.height;
            if (asteroid.transform.position.y > Engine.canvas.height) asteroid.transform.position.y = 0;
        }

        // Collision Detection (Laser and Asteroid)
        let lasers = [];
        if (Engine.currentScene && Engine.currentScene.gameObjects) {
            lasers = Engine.currentScene.gameObjects.filter(obj => obj.name === "Laser Game Object")
        }

        for (let i = this.asteroids.length - 1; i >= 0; i--) {
            const asteroid = this.asteroids[i];

            for (let laser of lasers) {
                const dx = asteroid.transform.position.x - laser.transform.position.x;
                const dy = asteroid.transform.position.y - laser.transform.position.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < asteroid.size + 3) { // 3 = small laser hit radius
                    // Destroy asteroid
                    this.asteroids.splice(i, 1);

                    // Destroy laser
                    laser.destroy();

                    // (Optional) Add explosion effect or sound here
                    break;
                }
            }
        }
    }

    draw(ctx) {
        for (let asteroid of this.asteroids) {
            ctx.save();
            ctx.translate(asteroid.transform.position.x, asteroid.transform.position.y);

            ctx.beginPath();
            ctx.arc(0, 0, asteroid.size, 0, Math.PI * 2);
            ctx.strokeStyle = "white";
            ctx.fillStyle = "grey";
            ctx.fill();
            ctx.stroke();

            ctx.restore();
        }
    }

    spawnAsteroid() {
        let x, y;
        const edge = Math.floor(Math.random() * 4);

        if (edge === 0) { 
            x = Math.random() * Engine.canvas.width; 
            y = 0; 
        } else if (edge === 1) { 
            x = Math.random() * Engine.canvas.width; 
            y = Engine.canvas.height; 
        } else if (edge === 2) { 
            x = 0; 
            y = Math.random() * Engine.canvas.height; 
        } else { 
            x = Engine.canvas.width; 
            y = Math.random() * Engine.canvas.height; 
        }

        const asteroid = {
            transform: { position: new Vector2(x, y) },
            size: 20 + Math.random() * 20,
            speed: 1 + Math.random() * 1.5,
            velocity: new Vector2(
                (Math.random() - 0.5) * 2,
                (Math.random() - 0.5) * 2
            )
        };

        this.asteroids.push(asteroid);
    }
}

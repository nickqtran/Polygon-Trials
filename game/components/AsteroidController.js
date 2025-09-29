class AsteroidController extends Component {
    start() {
        this.asteroids = [];
        this.cooldown = 0;

        this.spawnRate = 12 * 60; // 12 seconds at 60fps
        this.spawnCount = 1;       // how many to spawn each cycle

        this.timeElapsed = 0; // track total frames
    }

    update() {
        this.cooldown--;
        this.timeElapsed++;

        // Every 40 seconds, increase spawnCount by 1
        if (this.timeElapsed % (40 * 60) === 0) {
            this.spawnCount += 1;
            console.log(`Difficulty increased! Now spawning ${this.spawnCount} asteroids at a time.`);
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
            if (asteroid.transform.position.x < 0) asteroid.transform.position.x = canvas.width;
            if (asteroid.transform.position.x > canvas.width) asteroid.transform.position.x = 0;
            if (asteroid.transform.position.y < 0) asteroid.transform.position.y = canvas.height;
            if (asteroid.transform.position.y > canvas.height) asteroid.transform.position.y = 0;
        }
    }

    draw(ctx) {
        for (let asteroid of this.asteroids) {
            ctx.save();
            ctx.translate(asteroid.transform.position.x, asteroid.transform.position.y);

            ctx.beginPath();
            ctx.arc(0, 0, asteroid.size, 0, Math.PI * 2);
            ctx.strokeStyle = "white";
            ctx.stroke();

            ctx.restore();
        }
    }

    spawnAsteroid() {
        let x, y;
        let edge = Math.floor(Math.random() * 4);
        if (edge === 0) { x = Math.random() * canvas.width; y = 0; }
        else if (edge === 1) { x = Math.random() * canvas.width; y = canvas.height; }
        else if (edge === 2) { x = 0; y = Math.random() * canvas.height; }
        else { x = canvas.width; y = Math.random() * canvas.height; }

        let asteroid = {
            transform: { position: new Vector2(x, y) },
            size: 20 + Math.random() * 20,
            speed: 1 + Math.random() * 1.5,
            velocity: new Vector2((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2)
        };

        this.asteroids.push(asteroid);
    }
}

class TriangleController extends Component {
    start() {
        this.vertex = new Vector2(275, 250);
        this.angle = 0;
        this.laserCooldown = 0;
        this.laserDelay = 10; // frames between shots
    }

    update() {
        const rotationSpeed = 0.1;
        const moveSpeed = 3;

        // Rotation
        if (Input.keysDown.includes("ArrowLeft")) this.angle -= rotationSpeed;
        if (Input.keysDown.includes("ArrowRight")) this.angle += rotationSpeed;

        // Movement
        if (Input.keysDown.includes("ArrowUp")) {
            this.vertex.x += Math.cos(this.angle) * moveSpeed;
            this.vertex.y += Math.sin(this.angle) * moveSpeed;
        }
        if (Input.keysDown.includes("ArrowDown")) {
            this.vertex.x -= Math.cos(this.angle) * moveSpeed;
            this.vertex.y -= Math.sin(this.angle) * moveSpeed;
        }

        // Laser cooldown
        if (this.laserCooldown > 0) this.laserCooldown--;

        // Shoot laser
        if (Input.keysDown.includes("Space") && this.laserCooldown <= 0) {
            this.shootLaser();
            this.laserCooldown = this.laserDelay;
        }
    }

    shootLaser() {
        const tip = new Vector2(
            this.vertex.x + Math.cos(this.angle) * 20,
            this.vertex.y + Math.sin(this.angle) * 20
        );

        const laser = new LaserGameObject(tip, this.angle);
        Engine.currentScene.gameObjects.push(laser);
        laser.start(); // IMPORTANT: initialize components
    }

    draw(ctx) {
        const size = 20;
        const frontAngle = this.angle;
        const leftAngle  = this.angle + (2 * Math.PI / 3);
        const rightAngle = this.angle - (2 * Math.PI / 3);

        const frontX = this.vertex.x + Math.cos(frontAngle) * size;
        const frontY = this.vertex.y + Math.sin(frontAngle) * size;
        const leftX  = this.vertex.x + Math.cos(leftAngle) * size;
        const leftY  = this.vertex.y + Math.sin(leftAngle) * size;
        const rightX = this.vertex.x + Math.cos(rightAngle) * size;
        const rightY = this.vertex.y + Math.sin(rightAngle) * size;

        // Draw main triangle
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.moveTo(frontX, frontY);
        ctx.lineTo(leftX, leftY);
        ctx.lineTo(rightX, rightY);
        ctx.closePath();
        ctx.fill();

        // Nose indicator
        ctx.fillStyle = "red";
        ctx.beginPath();
        const noseFrontX = this.vertex.x + Math.cos(frontAngle) * (size * 0.6);
        const noseFrontY = this.vertex.y + Math.sin(frontAngle) * (size * 0.6);
        const noseLeftX  = this.vertex.x + Math.cos(leftAngle) * 5;
        const noseLeftY  = this.vertex.y + Math.sin(leftAngle) * 5;
        const noseRightX = this.vertex.x + Math.cos(rightAngle) * 5;
        const noseRightY = this.vertex.y + Math.sin(rightAngle) * 5;
        ctx.moveTo(noseFrontX, noseFrontY);
        ctx.lineTo(noseLeftX, noseLeftY);
        ctx.lineTo(noseRightX, noseRightY);
        ctx.closePath();
        ctx.fill();
    }
}

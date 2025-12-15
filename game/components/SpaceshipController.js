class TriangleController extends Component {
    start() {
        this.gameObject.transform.position = new Vector2(275, 250)
        this.angle = 0
        this.moveSpeed = 260 // pixels a second
        this.rotationSpeed = 8

        this.fireCooldown = 0.25 // how often lasers spawn (seconds)
        this.fireTimer = 0
    }

    update() {
        const dt = Time.deltaTime
        this.fireTimer -= dt

        // Rotation
        if (Input.keysDown.includes("ArrowLeft")) this.angle -= this.rotationSpeed * dt
        if (Input.keysDown.includes("ArrowRight")) this.angle += this.rotationSpeed * dt

        // Movement 
        if (Input.keysDown.includes("ArrowUp")) {
            this.gameObject.transform.position.x += Math.cos(this.angle) * this.moveSpeed * dt
            this.gameObject.transform.position.y += Math.sin(this.angle) * this.moveSpeed * dt
        }
        if (Input.keysDown.includes("ArrowDown")) {
            this.gameObject.transform.position.x -= Math.cos(this.angle) * this.moveSpeed * dt
            this.gameObject.transform.position.y -= Math.sin(this.angle) * this.moveSpeed * dt
        }

        // Shoot Laser if Z is pressed
        if (Input.keysDown.includes("KeyZ")) {
            if (this.fireTimer <= 0) {
                this.fireTimer = this.fireCooldown
                this.shootLaser()
            }
        }
    }

    shootLaser() {
        const laser = new LaserGameObject()

        // Position laser at front of the triangle
        const size = 20
        const pos = this.gameObject.transform.position
        const frontX = pos.x + Math.cos(this.angle) * size
        const frontY = pos.y + Math.sin(this.angle) * size

        laser.transform.position = new Vector2(frontX, frontY)
        laser.transform.rotation = this.angle

        // Instantiate to scene
        Engine.currentScene.instantiate(laser)
    }

    draw(ctx) {
        const pos = this.gameObject.transform.position
        const size = 20
        const frontAngle = this.angle
        const leftAngle  = this.angle + (2 * Math.PI / 3)
        const rightAngle = this.angle - (2 * Math.PI / 3)

        const frontX = pos.x + Math.cos(frontAngle) * size
        const frontY = pos.y + Math.sin(frontAngle) * size
        const leftX  = pos.x + Math.cos(leftAngle) * size
        const leftY  = pos.y + Math.sin(leftAngle) * size
        const rightX = pos.x + Math.cos(rightAngle) * size
        const rightY = pos.y + Math.sin(rightAngle) * size

        // Draw main triangle
        ctx.fillStyle = "yellow"
        ctx.beginPath()
        ctx.moveTo(frontX, frontY)
        ctx.lineTo(leftX, leftY)
        ctx.lineTo(rightX, rightY)
        ctx.closePath()
        ctx.fill()

        // Draw indicator triangle
        ctx.fillStyle = "red"
        ctx.beginPath()
        const smallFrontX = pos.x + Math.cos(frontAngle) * (size * 0.6)
        const smallFrontY = pos.y + Math.sin(frontAngle) * (size * 0.6)
        const smallLeftX  = pos.x + Math.cos(leftAngle) * 5
        const smallLeftY  = pos.y + Math.sin(leftAngle) * 5
        const smallRightX = pos.x + Math.cos(rightAngle) * 5
        const smallRightY = pos.y + Math.sin(rightAngle) * 5
        ctx.moveTo(smallFrontX, smallFrontY)
        ctx.lineTo(smallLeftX, smallLeftY)
        ctx.lineTo(smallRightX, smallRightY)
        ctx.closePath()
        ctx.fill()
    }
}
class TriangleController extends Component {
    start() {
        this.vertex = new Vector2(275, 250)
        this.angle = 0
        this.moveSpeed = 3
        this.rotationSpeed = 0.1

        this.fireCooldown = 0.25 // how often lasers spawn (seconds)
        this.fireTimer = 0
    }

    update() {
        this.fireTimer -= Time.deltaTime

        // Rotation
        if (Input.keysDown.includes("ArrowLeft")) this.angle -= this.rotationSpeed
        if (Input.keysDown.includes("ArrowRight")) this.angle += this.rotationSpeed

        // Movement 
        if (Input.keysDown.includes("ArrowUp")) {
            this.vertex.x += Math.cos(this.angle) * this.moveSpeed
            this.vertex.y += Math.sin(this.angle) * this.moveSpeed
        }
        if (Input.keysDown.includes("ArrowDown")) {
            this.vertex.x -= Math.cos(this.angle) * this.moveSpeed
            this.vertex.y -= Math.sin(this.angle) * this.moveSpeed
        }

        //Auto-fire every few frames
        if (this.fireTimer <= 0) {
            this.fireTimer = this.fireCooldown
            this.shootLaser()
        }

        //if (Input.keysDown.includes("z")) {
        //    this.shootLaser()
        //}
    }

    shootLaser() {
        const laser = new LaserGameObject()

        // Position laser at front of the triangle
        const size = 20
        const frontX = this.vertex.x + Math.cos(this.angle) * size
        const frontY = this.vertex.y + Math.sin(this.angle) * size

        laser.transform.position = new Vector2(frontX, frontY)
        laser.transform.rotation = this.angle

        // Instantiate to scene
        Engine.currentScene.instantiate(laser)
    }

    draw(ctx) {
        const size = 20
        const frontAngle = this.angle
        const leftAngle  = this.angle + (2 * Math.PI / 3)
        const rightAngle = this.angle - (2 * Math.PI / 3)

        const frontX = this.vertex.x + Math.cos(frontAngle) * size
        const frontY = this.vertex.y + Math.sin(frontAngle) * size
        const leftX  = this.vertex.x + Math.cos(leftAngle) * size
        const leftY  = this.vertex.y + Math.sin(leftAngle) * size
        const rightX = this.vertex.x + Math.cos(rightAngle) * size
        const rightY = this.vertex.y + Math.sin(rightAngle) * size

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
        const smallFrontX = this.vertex.x + Math.cos(frontAngle) * (size * 0.6)
        const smallFrontY = this.vertex.y + Math.sin(frontAngle) * (size * 0.6)
        const smallLeftX  = this.vertex.x + Math.cos(leftAngle) * 5
        const smallLeftY  = this.vertex.y + Math.sin(leftAngle) * 5
        const smallRightX = this.vertex.x + Math.cos(rightAngle) * 5
        const smallRightY = this.vertex.y + Math.sin(rightAngle) * 5
        ctx.moveTo(smallFrontX, smallFrontY)
        ctx.lineTo(smallLeftX, smallLeftY)
        ctx.lineTo(smallRightX, smallRightY)
        ctx.closePath()
        ctx.fill()
    }
}

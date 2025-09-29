class TriangleController extends Component {
    start() {
        this.vertex = new Vector2(275, 250)
        this.velocity = new Vector2(1, 1)
        this.angle = 0

    }
    update() {
    const rotationSpeed = 0.1;
    const moveSpeed = 3;

    if (Input.keysDown.includes("ArrowLeft")) {
        this.angle -= rotationSpeed;
    }
    if (Input.keysDown.includes("ArrowRight")) {
        this.angle += rotationSpeed;
    }
    if (Input.keysDown.includes("ArrowUp")) {
        this.vertex.x += Math.cos(this.angle) * moveSpeed;
        this.vertex.y += Math.sin(this.angle) * moveSpeed;
    }
    if (Input.keysDown.includes("ArrowDown")) {
        this.vertex.x -= Math.cos(this.angle) * moveSpeed;
        this.vertex.y -= Math.sin(this.angle) * moveSpeed;
    }
}

    draw(ctx) {
        ctx.fillStyle = "yellow";
        ctx.beginPath();

        // Triangle size
        const size = 20;

        // Angles for the 3 corners (front, left, right)
        const frontAngle = this.angle;
        const leftAngle  = this.angle + (2 * Math.PI / 3); 
        const rightAngle = this.angle - (2 * Math.PI / 3); 

        // Compute vertices relative to (this.vertex.x, this.vertex.y)
        const frontX = this.vertex.x + Math.cos(frontAngle) * size;
        const frontY = this.vertex.y + Math.sin(frontAngle) * size;

        const leftX  = this.vertex.x + Math.cos(leftAngle) * size;
        const leftY  = this.vertex.y + Math.sin(leftAngle) * size;

        const rightX = this.vertex.x + Math.cos(rightAngle) * size;
        const rightY = this.vertex.y + Math.sin(rightAngle) * size;

        // Draw triangle
        ctx.moveTo(frontX, frontY);
        ctx.lineTo(leftX, leftY);
        ctx.lineTo(rightX, rightY);
        ctx.closePath();
        ctx.fill();   

    }
}
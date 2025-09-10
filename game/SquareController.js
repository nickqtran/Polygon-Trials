class SquareController extends Component {
    start() {
        this.vertex = new Vector2(100, 20)
        this.velocity = new Vector2(1, 1)

    }
    update() {
        console.log(Input.keysDown)

        let proposedChange = Vector2.zero

        // Left
        if(Input.keysDown.includes("ArrowLeft")) {
            proposedChange = new Vector2.left
        }
        if(Input.keysDown.includes("ArrowRight")) {
            proposedChange = new Vector2.right
        }
        if(Input.keysDown.includes("ArrowUp")) {
            proposedChange = new Vector2.up
        }
        if(Input.keysDown.includes("ArrowDown")) {
            proposedChange = new Vector2.down
        }

        this.vertex.plusEquals(proposedChange)

    //  this.vertex.plusEquals(this.velocity)

    //  if (this.vertex.x > canvas.width-25 || this.vertex.x < 0) {
    //      this.velocity.x *= -1
    //  }
    //  if (this.vertex.y > canvas.height-25 || this.vertex.y < 0) {
    //      this.velocity.y *= -1
    //  }
    }
    draw(ctx) {
        ctx.fillStyle = "red"

        ctx.beginPath()
        ctx.lineTo(this.vertex.x, this.vertex.y)
        ctx.lineTo(this.vertex.x + 25, this.vertex.y + 0)
        ctx.lineTo(this.vertex.x + 25, this.vertex.y + 25)
        ctx.lineTo(this.vertex.x + 0, this.vertex.y + 25)
        ctx.fill()
    }
}
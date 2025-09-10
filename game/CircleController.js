class CircleController extends Component {
    start() {
        this.vertex = new Vector2(100, 20)
        this.velocity = new Vector2(1, 1)

    }

    update() {
        console.log(Input.keysDown)

        let proposedChange = new Vector2(0,0) 

        // Left
        if(Input.keysDown.includes("ArrowLeft")) {
            proposedChange.plusEquals(Vector2.left)
        }
        if(Input.keysDown.includes("ArrowRight")) {
            proposedChange.plusEquals(Vector2.right)
        }
        if(Input.keysDown.includes("ArrowUp")) {
            proposedChange.plusEquals(Vector2.up)
        }
        if(Input.keysDown.includes("ArrowDown")) {
            proposedChange.plusEquals(Vector2.down)
        }

        this.vertex.plusEquals(proposedChange)

        // Make circle not escape canvas boundaries
        
    }

    draw(ctx) {
        ctx.fillStyle = "white"

        ctx.beginPath()
        ctx.arc(this.vertex.x + 15, this.vertex.y + 15, 15, 0, Math.PI * 2)
        ctx.fill()
    }
}
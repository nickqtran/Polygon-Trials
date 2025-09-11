class CircleController extends Component {
    start() {
        this.vertex = new Vector2(125, 3) // center of circle
        this.radius = 15                    // radius of circle
        this.velocity = new Vector2(1, 1)

    }

    update() {
        console.log(Input.keysDown)

        let proposedChange = new Vector2(0,0) 

        // Movement Inputs
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

        // Make circle not escape canvas boundaries    
        if (this.vertex.x - this.radius + proposedChange.x < 0 - 15) proposedChange.x = 0
        if (this.vertex.x + this.radius + proposedChange.x + 15 > canvas.width) proposedChange.x = 0
        if (this.vertex.y - this.radius + proposedChange.y < 0 - 15) proposedChange.y = 0
        if (this.vertex.y + this.radius + proposedChange.y + 15 > canvas.height) proposedChange.y = 0

        // Executes movement inputs
        this.vertex.plusEquals(proposedChange)
   
    }

    draw(ctx) {
        ctx.fillStyle = "white"

        ctx.beginPath()
        ctx.arc(this.vertex.x + 15, this.vertex.y + 15, 15, 0, Math.PI * 2)
        ctx.fill()
    }
}
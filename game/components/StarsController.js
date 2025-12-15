class StarsController extends Component {
    constructor(numStars = 150) {
        super()
        this.stars = []
        for (let i = 0; i < numStars; i++) {
            this.stars.push({
                x: Math.random() * 600,
                y: Math.random() * 400,
                size: Math.random() * 2 + 1
            })
        }
    }

    draw(ctx) {
        ctx.fillStyle = "white"
        for (let star of this.stars) {
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
            ctx.fill()
        }
    }
}
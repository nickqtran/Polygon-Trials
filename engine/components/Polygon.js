class Polygon extends Component {
    fillStyle = "magenta"
    points = [new Vector2(0, -1), new Vector2(1, 1), new Vector2(-1, 1)]
    draw(ctx) {
        ctx.fillStyle = this.fillStyle

        ctx.beginPath()
        for(const point of this.points){
            ctx.lineTo(this.transform.position.x + point.x*this.transform.scale.x, this.transform.position.y + point.y * this.transform.scale.y)
        }

        ctx.fill()
    }
}
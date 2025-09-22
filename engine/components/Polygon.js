class Polygon extends Component {
    fillStyle = "magenta"
    draw(ctx) {
        ctx.fillStyle = this.fillStyle

        ctx.beginPath()
        ctx.lineTo(this.transform.position.x, this.transform.position.y)
        ctx.lineTo(this.transform.position.x + 1*this.transform.scale.x, this.transform.position.y + 1*this.transform.scale.y)
        ctx.lineTo(this.transform.position.x + 0, this.transform.position.y + 1*this.transform.scale.y)
        ctx.fill()
    }
}
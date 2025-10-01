class Polygon extends Component {
    fillStyle = "magenta"
    points = [new Vector2(0,0)] // default
    draw(ctx) {
        ctx.fillStyle = this.fillStyle
        ctx.beginPath()
        if(this.points.length > 0){
            const p0 = this.points[0]
            ctx.moveTo(
                this.transform.position.x + p0.x * this.transform.scale.x,
                this.transform.position.y + p0.y * this.transform.scale.y
            )
            for(let i=1;i<this.points.length;i++){
                const p = this.points[i]
                ctx.lineTo(
                    this.transform.position.x + p.x * this.transform.scale.x,
                    this.transform.position.y + p.y * this.transform.scale.y
                )
            }
            ctx.closePath()
            ctx.fill()
        }
    }
}

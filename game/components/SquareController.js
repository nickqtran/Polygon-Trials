// not needed
class SquareController extends Component {
    start() {
        this.vertex = new Vector2(200, 0)
        this.velocity = new Vector2(0, 2)

    }
    update() {

        this.vertex.plusEquals(this.velocity)

  //    if(this.transform.position.y > +10) {
  //        this.gameObject.destroy()
  //    }
    }
    draw(ctx) {
        ctx.fillStyle = "red"

        ctx.beginPath()
        ctx.lineTo(this.vertex.x, this.vertex.y)
        ctx.lineTo(this.vertex.x + 35, this.vertex.y + 0)
        ctx.lineTo(this.vertex.x + 35, this.vertex.y + 35)
        ctx.lineTo(this.vertex.x + 0, this.vertex.y + 35)
        ctx.fill()
    }
}
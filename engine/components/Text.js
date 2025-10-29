class Text extends Component {
    fillStyle = "magenta"
    text = "[NO TEXT]"
    font = "24px 'Comic Sans MS'"
    draw(ctx) {
        ctx.fillStyle = this.fillStyle
        ctx.font = this.font

        // ctx.save()
        // ctx.translate(this.transform.position.x, this.transform.position.y)
        // ctx.scale(this.transform.scale.x, this.transform.scale.y)
        // ctx.rotate(this.transform.rotation)

        ctx.fillText(this.text, 0, 0)
        // ctx.restore()
    }
}
class Text extends Component {
    fillStyle = "magenta"
    text = "[NO TEXT]"
    font = "24px 'Comic Sans MS'"
    draw(ctx) {
        ctx.fillStyle = this.fillStyle
        ctx.font = this.font

        const {x,y} = this.gameObject.transform.position
        ctx.fillText(this.text, x, y)
    }
}
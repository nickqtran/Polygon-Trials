class ButtonComponent extends Component {
    constructor(onClick) {
        super()
        this.onClick = onClick
    }

    update() {
        const mouse = Input.mouse
        const pos = this.gameObject.transform.position
        const width = 100   // width of button
        const height = 40   // height of button

        if (mouse.down &&
            mouse.x >= pos.x && mouse.x <= pos.x + width &&
            mouse.y >= pos.y && mouse.y <= pos.y + height) {

            this.onClick()
            mouse.down = false // prevent multiple triggers
        }
    }
}

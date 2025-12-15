class Input {
    static keysDown = []
    static mouse = { x:0, y:0, down: false}

    static keydown(event) {
        console.log(event.code)
        if(!Input.keysDown.includes(event.code))
            Input.keysDown.push(event.code)
    }

    static keyup(event) {
        Input.keysDown = Input.keysDown.filter(k => k != event.code)
    }

    static mousedown(event) {
        Input.mouse.down = true
        Input.mouse.x = event.offsetX
        Input.mouse.y = event.offsetY
    }

    static mouseup(event) {
        Input.mouse.down = false
        Input.mouse.x = event.offsetX
        Input.mouse.y = event.offsetY
    }

    static mousemove(event) {
        Input.mouse.x = event.offsetX
        Input.mouse.y = event.offsetY
    }
}

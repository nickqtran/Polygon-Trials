class Input {
    static keysDown = []

    static keydown(event) {
        if(!Input.keysDown.includes(event.code))
            Input.keysDown.push(event.code)
    }

    static keyup(event) {
        Input.keysDown = Input.keysDown.filter(k => k != event.code)
    }
}

    //Input.js:5 Uncaught TypeError: Input.keydown.includes is not a function
    //at keydown (Input.js:5:27)
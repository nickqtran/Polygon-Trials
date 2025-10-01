class Engine {
    // Start the engine
    static start() {
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        // Hook up input
        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)

        // Start the scene
        Engine.currentScene.start()
        Engine.gameLoop()
    }

    // Main loop
    static gameLoop() {
        Engine.update()
        Engine.draw()
        requestAnimationFrame(Engine.gameLoop)
    }

    // Update step
    static update() {
        Engine.currentScene.update()
    }

    // Draw step
    static draw() {
        // Fixed size (your version: 600x400)
        Engine.canvas.width = 600
        Engine.canvas.height = 400

        // Draw background (yours: ground + sky)
        Engine.ctx.fillStyle = "green"
        Engine.ctx.fillRect(0, 335, Engine.canvas.width, Engine.canvas.height)

        Engine.ctx.fillStyle = "black"
        Engine.ctx.fillRect(0, 0, Engine.canvas.width, 335)

        // Draw the active scene
        Engine.currentScene.draw(Engine.ctx)
    }
}

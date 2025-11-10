class Engine {
    static pendingStart = [];
    static layers = ["", "UI"]

    static start() {
        //Engine.layers.push(...gameProperties.layers)
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)


        Engine.currentScene.start()
        Engine.gameLoop()
    }

    static gameLoop() {
        SceneManager.update()
        Engine.update()
        Engine.draw()
        requestAnimationFrame(Engine.gameLoop)
    }

    static update() {
        // Start any newly added objects
        for (const go of Engine.pendingStart) {
            go.start()
        }
        Engine.pendingStart = []

        // Update scene
        Engine.currentScene.update()
    }

    static draw() {
        Engine.canvas.width = 600
        Engine.canvas.height = 400

        //Engine.ctx.fillStyle = "green"
        //Engine.ctx.fillRect(0, 335, Engine.canvas.width, Engine.canvas.height)

        Engine.ctx.fillStyle = "black"
        Engine.ctx.fillRect(0, 0, Engine.canvas.width, Engine.canvas.height) // height was 355

        Engine.currentScene.draw(Engine.ctx)
    }

    static addGameObject(go) {
        Engine.currentScene.gameObjects.push(go)
        Engine.pendingStart.push(go) 
    }
}

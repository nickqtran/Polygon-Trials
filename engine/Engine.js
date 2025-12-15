class Engine {
    static pendingStart = [];
    static layers = ["", "UI"]

    static start() {
        //Engine.layers.push(...gameProperties.layers)
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        window.addEventListener("keydown", Input.keydown)
        window.addEventListener("keyup", Input.keyup)
        Engine.canvas.addEventListener("mousedown", Input.mousedown)
        Engine.canvas.addEventListener("mouseup", Input.mouseup)
        Engine.canvas.addEventListener("mousemove", Input.mousemove)

        const activeScene = SceneManager.getActiveScene()
        if (activeScene && activeScene.start) activeScene.start()

        Engine.gameLoop()
    }

    static gameLoop() {
        Time.update()
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
        SceneManager.update()
        SceneManager.getActiveScene().update()
    }

    static draw() {
        Engine.canvas.width = 600
        Engine.canvas.height = 400

        Engine.ctx.fillStyle = "black"
        Engine.ctx.fillRect(0, 0, Engine.canvas.width, Engine.canvas.height) 

        SceneManager.getActiveScene().draw(Engine.ctx)
    }

    static addGameObject(go) {
        Engine.currentScene.gameObjects.push(go)
        Engine.pendingStart.push(go) 
    }
}

class Scene {
    gameObjects = []
    start() {
        for (const gameObject of this.gameObjects) {
            gameObject.start()
            gameObject.hasStarted = true
        }
    }
    update() {
        for (const gameObject of this.gameObjects) {
            if (!gameObject.hasStarted) {
                gameObject.start()
                gameObject.hasStarted = true
            }
            gameObject.update()
        }

        this.gameObjects = this.gameObjects.filter(go => !go.markForDelete)
        
    }
    draw(ctx) {
        for (const gameObject of this.gameObjects) {
            gameObject.draw(ctx)
        }
    }
    instantiate(gameObject, position) {
        this.gameObjects.push(gameObject)
        if(position)
            gameObject.transform.position = position
    }
}
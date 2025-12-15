class Scene {
    gameObjects = []
    start() {
        for (const gameObject of this.gameObjects) {
            gameObject.start()
            gameObject.hasStarted = true
        }
    }
    update() {
    
        // Update everything
        for (const gameObject of this.gameObjects) {
            if (!gameObject.hasStarted) {
                gameObject.start()
                gameObject.hasStarted = true
            }
            gameObject.update()
        }
    
        // Collision Detection
        const gameObjectsWithColliders = this.gameObjects.filter(
            go => go.getComponent(Collider)
        )
    
        for (let i = 0; i < gameObjectsWithColliders.length; i++) {
            for (let j = i + 1; j < gameObjectsWithColliders.length; j++) {
                const a = gameObjectsWithColliders[i]
                const b = gameObjectsWithColliders[j]
                const response = Collisions.inCollision(a, b)
            
                if (response) {
                    for (const component of a.components) {
                        component.onCollisionEnter?.(b)
                    }
                    for (const component of b.components) {
                        component.onCollisionEnter?.(a)
                    }
                }
            }
        }
    
        // Cleanup
        this.gameObjects = this.gameObjects.filter(go => !go.markForDelete)
    }

draw(ctx) {
    // Draw game objects by layer
    for (let layer of Engine.layers) {
        for (let go of this.gameObjects) {
            if (go.layer === layer) {
                go.draw(ctx)
            }
        }
    }
}

    instantiate(gameObject, position) {
        this.gameObjects.push(gameObject)
        if(position)
            gameObject.transform.position = position
    }
}
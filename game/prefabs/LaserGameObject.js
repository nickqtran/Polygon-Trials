class LaserGameObject extends GameObject {
    constructor(startPos, direction) {
        super()
        
        this.addComponent(new Transform(), {position: startPos})
        this.addComponent(new Polygon(), {
            fillStyle: "red",
            points: [
                new Vector2(-2, -2),
                new Vector2(-2, 2),
                new Vector2(2, 2),
                new Vector2(2, -2)
            ]
        })

        const laser = new LaserController()
        laser.direction = direction
        this.addComponent(laser)
    }
}

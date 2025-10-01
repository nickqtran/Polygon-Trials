class LaserGameObject extends GameObject {
    constructor(startPos, direction) {
        super();

        // Transform for position
        this.addComponent(new Transform(), { position: startPos.clone(), scale: new Vector2(5, 5) });

        // Polygon for laser shape
        this.addComponent(new Polygon(), {
            fillStyle: "red",
            points: [
                new Vector2(-1, -1),
                new Vector2(-1, 1),
                new Vector2(1, 1),
                new Vector2(1, -1)
            ]
        });

        // LaserController with direction
        this.addComponent(new LaserController(), { direction: direction });
    }
}

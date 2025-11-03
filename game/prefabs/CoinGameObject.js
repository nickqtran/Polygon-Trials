class CoinGameObject extends GameObject {
    constructor() {
        super("Coin Game Object")
        this.addComponent(new Polygon(), {fillStyle: "gold", points:[new Vector2(-1, -1), new Vector2(-1, 1), new Vector2(1, 1), new Vector2(1, -1)]})
        this.addComponent(new CoinController())
        this.transform.scale = new Vector2(3, 3)
    }
}
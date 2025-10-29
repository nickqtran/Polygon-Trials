class LaserGameObject extends GameObject{
    constructor(){
        super("Laser Game Object")
        this.addComponent(new Polygon(), {fillStyle: "red", points:[new Vector2(-1, -1), new Vector2(-1, 1), new Vector2(1, 1), new Vector2(1, -1)]})
        this.addComponent(new LaserController())
        this.transform.scale = new Vector2(4, 4)
    }
}
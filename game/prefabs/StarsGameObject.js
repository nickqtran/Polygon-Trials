class StarsGameObject extends GameObject {
    constructor() {
        super("Stars Game Object")
        this.addComponent(new StarsController())
        this.layer = ""
    }
}

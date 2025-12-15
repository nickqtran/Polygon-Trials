class HighscoreGameObject extends GameObject {
    constructor() {
        super("Highscore Game Object")
        this.addComponent(new Text(), {fillstyle: "white"})
        this.addComponent(new HighscoreController())
        this.transform.position = new Vector2(200,50)
        this.layer = "UI"
    }
}
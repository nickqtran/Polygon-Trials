class HighscoreGameObject extends GameObject {
    constructor() {
        super("Highscore Game Object")
        this.addComponent(new Text())
        this.addComponent(new HighscoreController())
    }
}
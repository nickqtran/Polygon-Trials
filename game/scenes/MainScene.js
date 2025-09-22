class MainScene extends Scene{
    constructor(){
        super()
        //Game-specific code
        //this.gameObjects.push(new TriangleGameObject())
        this.gameObjects.push(new SquareGameObject())
        this.gameObjects.push(new CircleGameObject())
    }
}
class MainScene extends Scene {
    constructor() {
        super();

        this.gameObjects.push(new TriangleGameObject());

        let asteroidManager = new GameObject();
        asteroidManager.addComponent(new AsteroidController());
        this.gameObjects.push(asteroidManager);
    }
}

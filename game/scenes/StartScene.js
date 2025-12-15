class StartScene extends Scene {
    constructor() {
        super();
        this.highScoreGO = new HighscoreGameObject();
        this.startButton = new GameObject("Start Button");
    }

    start() {
        // Display High Score
        this.highScoreGO.transform.position = new Vector2(200, 50);
        this.instantiate(this.highScoreGO);

        // Start Button
        this.startButton.transform.position = new Vector2(250, 200);
        this.startButton.addComponent(new Text());
        this.startButton.getComponent(Text).text = "PLAY";
        this.startButton.getComponent(Text).fillStyle = "white";

        // Button click: load MainScene
        this.startButton.addComponent(new ButtonComponent(() => {
            SceneManager.loadScene(new MainScene(this.highScoreGO.getComponent(HighscoreController)));
        }));

        this.instantiate(this.startButton);
    }
}


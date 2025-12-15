class StartScene extends Scene {
    start() {
        if (!StartScene.highScoreGO) {
            StartScene.highScoreGO = new HighscoreGameObject()
            StartScene.highScoreGO.transform.position = new Vector2(200, 100)
        }

        // Starfield
        this.instantiate(new StarsGameObject())

        // High Score
        this.instantiate(StartScene.highScoreGO)

        // Start Button
        const startButton = new GameObject("Start Button")
        startButton.transform.position = new Vector2(250, 250)
        startButton.addComponent(new Text())
        const textComp = startButton.getComponent(Text)
        textComp.text = "PLAY"
        textComp.fillStyle = "red"

        // Load MainScene
        startButton.addComponent(new ButtonComponent(() => {
            SceneManager.loadScene(new MainScene(StartScene.highScoreGO.getComponent(HighscoreController)))
        }))

        this.instantiate(startButton)
    }
}



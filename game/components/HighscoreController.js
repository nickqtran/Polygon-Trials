class HighscoreController extends Component {
    static highScore = 0

    update() {
        const textComp = this.gameObject.getComponent(Text)
        if (textComp) {
            textComp.text = "High Score: " + HighscoreController.highScore
        }
    }

    checkHighScore(score) {
        if (score > HighscoreController.highScore) {
            HighscoreController.highScore = score
        }
    }
}
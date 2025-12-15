class HighscoreController extends Component {
    highScore = 0

    update() {
        const textComp = this.gameObject.getComponent(Text)
        if (textComp) {
            textComp.text = "High Score: " + this.highScore
        }
    }

    checkHighScore(score) {
        if (score > this.highScore) {
            this.highScore = score
            console.log("New High Score: " + this.highScore)
        }
    }
}
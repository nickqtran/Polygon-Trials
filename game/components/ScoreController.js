class ScoreController extends Component{
    score = 0

    addPoint(points){
        this.score += points
    }

    update(){
        this.gameObject.getComponent(Text).text = "Score: " + this.score
    }
}
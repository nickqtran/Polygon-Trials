class LaserController extends Component{
    start(){
        this.speed = -300
    }
    update(){
        this.transform.position.y += this.speed * Time.deltaTime

        if(this.transform.position.y < -10){
            this.gameObject.destroy()
        }
    }
}

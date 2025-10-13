class LaserController extends Component {
    start() {
        this.speed = 400 // Laser speed
    }

    update() {
        // Move in the direction of rotation (angle in radians)
        this.transform.position.x += Math.cos(this.transform.rotation) * this.speed * Time.deltaTime
        this.transform.position.y += Math.sin(this.transform.rotation) * this.speed * Time.deltaTime

        // Destroy the laser when it goes off of the screen
        if (
            this.transform.position.x < -10 || this.transform.position.x > 600 ||
            this.transform.position.y < -10 || this.transform.position.y > 600
        ) {
            this.gameObject.destroy()
        }
    }
}

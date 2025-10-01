class LaserController extends Component {
    start() {
        if (!this.direction) this.direction = 0; // fallback
        this.speed = 500; // pixels per second
    }

    update() {
        const pos = this.transform.position;
        pos.x += Math.cos(this.direction) * this.speed * Time.deltaTime;
        pos.y += Math.sin(this.direction) * this.speed * Time.deltaTime;

        // Destroy laser if offscreen
        if (pos.x < 0 || pos.x > Engine.canvas.width || pos.y < 0 || pos.y > Engine.canvas.height) {
            this.gameObject.destroy();
        }
    }
}

class Vector2 {
    x
    y
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static zero = new Vector2(0, 0)
    static left = new Vector2(-1, 0)
    static right = new Vector2(1, 0)
    static up = new Vector2(0, -1)
    static down = new Vector2(0, 1)

    plusEquals(other) {
        this.x += other.x
        this.y += other.y
    }
}
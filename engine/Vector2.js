class Vector2 {
    x
    y
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static get zero() {return new Vector2(0, 0)}
    static get left() {return new Vector2(-1, 0)}
    static get right() {return new Vector2(1, 0)}
    static get up() {return new Vector2(0, -1)}
    static get down() {return new Vector2(0, 1)}

    plusEquals(other) {
        this.x += other.x
        this.y += other.y
    }
}
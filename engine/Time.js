class Time {
    static deltaTime = 1/60
    static lastTime = performance.now()

    static update() {
        const now = performance.now()
        Time.deltaTime = (now - Time.lastTime) / 1000
        Time.lastTime = now
    }
    
}
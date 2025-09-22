class AsteroidGameObject extends GameObject {
    constructor(){
        super()
        this.components.push(new AsteroidController())
        
    }

    spawner() {
        
    }
}

import { g } from '../main.js'

class enemy {
    constructor(x, y, width) {
        this.x = x
        this.y = y
        this.width = width
        this.speed = 2
    }


    draw() {
        g.strokeStyle = "white"
        g.fillStyle = "white"
        g.arc(this.x, this.y, this.width, 0, 2 * Math.PI)

    }

    movement() {
        this.y += this.speed
    }
}

export { enemy }
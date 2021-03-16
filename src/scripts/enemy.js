export default class enemy {
    constructor(width, color, gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.width = width
        this.color = color

        this.speed = 2

        this.x = Math.random() * (gameWidth - (width + 20)) + (width + 20); //*To be $ pixels away from the border
        this.y = (gameHeight - gameHeight) - width //* Putting the Y to 0 

    }


    draw(ctx) {

        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(
            this.x,
            this.y,
            this.width,
            0,
            2 * Math.PI)
        ctx.fill()
    }

    move() {
        this.y += this.speed
    }

}


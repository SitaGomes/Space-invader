export default class bullet {

    constructor(x, y, width, color) {
        this.width = width
        this.color = color
        this.y = y
        this.x = x

        this.speed = 5

    }


    draw(ctx) {

        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(
            this.x + 35,
            this.y - 60,
            this.width,
            0,
            2 * Math.PI)
        ctx.fill()
    }


    move() {
        this.y -= this.speed
    }

    destroy() {

    }

}

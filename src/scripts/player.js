export default class player {

    constructor(x, y, width, height, color, gameWidth) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.gameWidth = gameWidth

        this.rectY = this.y - this.height - 10 //*10px of the border
        this.speed = 3
        this.canMove = true


    }

    draw(ctx) {
        ctx.beginPath()
        ctx.fillStyle = this.color

        //*Base rect
        ctx.rect(
            this.x,
            this.rectY,
            this.width,
            this.height
        )
        ctx.closePath()

        //* Middle rect
        ctx.rect(
            this.x + 15,
            this.rectY,
            this.width - 30,
            this.height - 30
        )

        //* Top rect
        ctx.rect(
            this.x + 25,
            this.rectY - 10,
            this.width - 50,
            this.height - 30
        )

        ctx.fill()

    }

    movementChecker() {
        /*
            This won't allow the X
            to change when key's not pressed
        */

        addEventListener('keydown', (e) => {
            this.canMove = e.key

        })

        addEventListener('keyup', () => {
            this.canMove = false
        })
    }


    movePlayer() {

        this.movementChecker()

        switch (this.canMove) {

            case 'ArrowLeft':
                if (this.x > 0) {
                    this.x -= this.speed
                }
                break

            case 'ArrowRight':
                //*Can't go off screen
                if (this.x < (this.gameWidth - this.width)) {
                    this.x += this.speed
                }
                break

            default:
                break
        }
    }


}




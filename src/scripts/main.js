import enemy from './enemy.js'
import player from './player.js'
import bullet from './bullet.js'

const gameBoard = document.querySelector('#game-board')
const g = gameBoard.getContext("2d")

const GAME_WIDTH = gameBoard.width
const GAME_HEIGHT = gameBoard.height

const Player = new player(
    150, //* X
    GAME_HEIGHT, //* Y
    70, //* Width
    20, //* Height
    'cyan',
    GAME_WIDTH
)

const asteroids = []
const bullets = []

let spawnRate = 1000
let bulletSpawnRate = spawnRate - 200

let lastSpawn = 0
let lastBulletSpawn = 0


function updateScreen() {
    const time = Date.now()

    //? Updating screen color
    g.beginPath()
    g.rect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    g.fillStyle = "rgba(0, 35, 80, 0.876)"
    g.fill()


    //! Spawning the asteroids
    if (time > (spawnRate + lastSpawn)) {
        lastSpawn = time
        autoSpawnEnemies()
    }
    moveEnemies()



    //! Spawning bullets
    if (time > ((bulletSpawnRate) + lastBulletSpawn)) {
        lastBulletSpawn = time
        autoSpawnBullets()
    }
    moveBullets()



    //! Spawning the player
    Player.draw(g)
    Player.movePlayer()








    requestAnimationFrame(updateScreen)
}

updateScreen()

function autoSpawnEnemies() {
    asteroids.push(new enemy(25, 'white', GAME_WIDTH, GAME_HEIGHT))

}


function moveEnemies() {
    for (let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i]
        asteroid.move()
        asteroid.draw(g)

    }
}


function autoSpawnBullets() {
    bullets.push(new bullet(Player.x, Player.y, 5, 'red'))

}

function moveBullets() {
    for (let i = 0; i < bullets.length; i++) {
        let bullet = bullets[i]
        bullet.move()
        bullet.draw(g)

    }
}

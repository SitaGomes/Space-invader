import enemy from './move.js/enemy.js'

const gameBoard = document.querySelector('#game-board')
const g = gameBoard.getContext("2d")

const GAME_WIDTH = 400
const GAME_HEIGHT = 600

const asteroids = []

let spawnRate = 1350

let lastSpawn = 0


function updateScreen() {
    const time = Date.now()

    //* Updating the screen color
    g.beginPath()
    g.rect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    g.fillStyle = "rgba(0, 35, 80, 0.876)"
    g.fill()


    //* Creating the asteroid
    if (time > (spawnRate + lastSpawn)) {
        lastSpawn = time
        autoSpawnEnemies()
        console.log(`${lastSpawn} lastpawn`)
        console.log(`${time} data`)
    }

    moveEnemies()

    requestAnimationFrame(updateScreen)
}

updateScreen()

function autoSpawnEnemies() {
    asteroids.push(new enemy(25, 'white', GAME_WIDTH, GAME_HEIGHT))
    console.log('adicionando ao array')
}

function moveEnemies() {
    for (let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i]
        asteroid.move()
        asteroid.draw(g)

    }
}




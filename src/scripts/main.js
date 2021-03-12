import { enemy } from './move.js/enemy.js'

const gameBoard = document.querySelector('#game-board')
const g = gameBoard.getContext("2d")

const asteroid = new enemy(
    Math.floor(Math.random() * 400) + 1,
    50,
    25) //* X, Y, Width


function updateScreen() {

    //* Updating the screen color
    g.beginPath()
    g.rect(0, 0, 400, 600)
    g.fillStyle = "rgba(0, 35, 80, 0.876)"
    g.fill()


    //* Creating the asteroid
    setInterval(function () {
        g.beginPath()
        asteroid.draw()
        asteroid.movement()
        g.fill()
    }, 1)





}

setInterval(updateScreen, 30) //* 30 FPS


export { g }




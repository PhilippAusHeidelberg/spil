input.onButtonPressed(Button.A, function () {
    if (true) {
        game.addScore(1)
        philipp.delete()
        basic.pause(1000)
    }
    if (philipp.isDeleted()) {
        philipp = game.createSprite(2, 2)
    }
})
let philipp: game.LedSprite = null
philipp = game.createSprite(2, 2)
basic.forever(function () {
    philipp.move(1)
    basic.pause(100)
    philipp.ifOnEdgeBounce()
})

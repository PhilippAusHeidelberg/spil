input.onButtonPressed(Button.A, function () {
    game.addScore(1)
    philipp.delete()
    basic.pause(500)
    if (philipp.get(LedSpriteProperty.X) == 2) {
        philipp = game.createSprite(2, 2)
        philipp.delete()
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

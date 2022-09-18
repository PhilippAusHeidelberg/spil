input.onButtonPressed(Button.A, function () {
    if (philipp.get(LedSpriteProperty.X) == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showIcon(IconNames.SmallSquare, 70)
        basic.showIcon(IconNames.Square, 70)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
let philipp: game.LedSprite = null
philipp = game.createSprite(2, 2)
basic.forever(function () {
    philipp.move(1)
    basic.pause(100)
    philipp.ifOnEdgeBounce()
})

basic.forever(function () {
    basic.clearScreen()
    basic.pause(800)
    led.plot(4, 0)
    basic.pause(800)
    led.unplot(4, 0)
    led.plot(3, 0)
    basic.pause(800)
    led.plot(4, 0)
    basic.pause(800)
    basic.clearScreen()
})

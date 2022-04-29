radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("gravidade", receivedNumber)
    led.toggle(1, 0)
    if (receivedNumber <= 150 || receivedNumber >= 2000) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.clearScreen()
    }
})
basic.showString("RECEPTOR GRAVIDADE")
radio.setGroup(43)

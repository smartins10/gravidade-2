radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("gravidade", receivedNumber)
    led.toggle(1, 0)
    if (receivedNumber <= 150 || receivedNumber >= 2400) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showNumber(receivedNumber)
    }
})
basic.showString("RECEPTOR GRAVIDADE")
radio.setGroup(43)

radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("gravidade", receivedNumber)
    led.toggle(1, 0)
})
basic.showString("RECEPTOR GRAVIDADE")
radio.setGroup(43)

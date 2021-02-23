radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("You have")
    basic.showNumber(receivedNumber)
    A += 1
    basic.showString("mail")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("reset")
    basic.showString("reset")
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("You have")
    basic.showNumber(A)
    basic.showString("mail")
})
let A = 0
radio.setGroup(117)
A = 0

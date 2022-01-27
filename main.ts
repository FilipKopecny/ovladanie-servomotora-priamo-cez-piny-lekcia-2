let uhol = 0
input.onButtonPressed(Button.A, function () {
    uhol = 0
    for (let index = 0; index < 5; index++) {
        pins.servoWritePin(AnalogPin.P0, uhol)
        serial.writeLine("uhol je:" + uhol)
        uhol += 45
        basic.pause(5000)
    }
})

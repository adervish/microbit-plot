radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (value == 2) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
})
function getX () {
    return Math.round(4 - joystickbit.getRockerValue(joystickbit.rockerType.Y) / 250)
}
let myX = 0
let myY = 0
radio.setGroup(1)
joystickbit.initJoystickBit()
joystickbit.Vibration_Motor(100)
basic.forever(function () {
    basic.clearScreen()
    myY = getX()
    myX = Math.round(4 - joystickbit.getRockerValue(joystickbit.rockerType.X) / 250)
    if (getX() > 2) {
        radio.sendValue("forword", 1)
    }
    if (getX() < 2) {
        radio.sendValue("back", 2)
    }
    led.plot(myX, myY)
    serial.writeNumbers([joystickbit.getRockerValue(joystickbit.rockerType.X), joystickbit.getRockerValue(joystickbit.rockerType.Y)])
})

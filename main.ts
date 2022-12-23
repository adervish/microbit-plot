let myX = 0
let myY = 0
joystickbit.initJoystickBit()
joystickbit.Vibration_Motor(100)
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        basic.showString("Hello!")
        basic.showString("my name is bit boy.")
    } else {
        basic.clearScreen()
        myY = Math.round(4 - joystickbit.getRockerValue(joystickbit.rockerType.Y) / 250)
        myX = Math.round(4 - joystickbit.getRockerValue(joystickbit.rockerType.X) / 250)
        led.plot(myX, myY)
        serial.writeNumbers([joystickbit.getRockerValue(joystickbit.rockerType.X), joystickbit.getRockerValue(joystickbit.rockerType.Y)])
    }
})

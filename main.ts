joystickbit.initJoystickBit()
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(4 - joystickbit.getRockerValue(joystickbit.rockerType.X) / 250), Math.round(4 - joystickbit.getRockerValue(joystickbit.rockerType.Y) / 250))
    serial.writeNumbers([joystickbit.getRockerValue(joystickbit.rockerType.X), joystickbit.getRockerValue(joystickbit.rockerType.Y)])
    basic.pause(100)
})

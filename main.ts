input.onButtonPressed(Button.A, function () {
    basic.showNumber(minTemperature)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(maxTemperature)
})
let maxTemperature = 0
let minTemperature = 0
minTemperature = 0
maxTemperature = 0
basic.forever(function () {
    if (input.temperature() < minTemperature) {
        maxTemperature = input.temperature()
    } else {
        minTemperature = input.temperature()
    }
})

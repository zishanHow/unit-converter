let inputNum = document.getElementById("input-num")
const convertBtn = document.getElementById("convert-btn")
const lengthPara = document.getElementById("length-para")
const volumePara = document.getElementById("volume-para")
const massPera = document.getElementById("mass-para")
const temperaturePera = document.getElementById("temperature-para")

convertBtn.addEventListener("click", function () {
    length()
    volume()
    mass()
    temperature()
})

function length() {
    let inputValue = inputNum.value
    const meterToFeet = inputValue * 3.281
    const feetToMeter = inputValue / 3.281

    lengthPara.textContent = `${inputValue} Meters = ${meterToFeet.toFixed(3)} Feet | ${inputValue} Feet = ${feetToMeter.toFixed(3)} Meters`
}

function volume() {
    let inputValue = inputNum.value
    const literToGallon = inputValue / 3.785
    const gallonToLiter = inputValue * 3.785

    volumePara.textContent = `${inputValue} Liters = ${literToGallon.toFixed(3)} Gallons | ${inputValue} Gallons = ${gallonToLiter.toFixed(3)} Liters`
}


function mass() {
    let inputValue = inputNum.value
    const kilosToPound = inputValue * 2.205
    const poundToKilos = inputValue / 2.205

    massPera.textContent = `${inputValue} Kilos = ${kilosToPound.toFixed(3)} Pounds | ${inputValue} Pounds = ${poundToKilos.toFixed(3)} Kilos`
}

function temperature() {
    let inputValue = inputNum.value
    const celsiusToFahrenheit = (inputValue * 9 / 5) + 32
    const fahrenheitToCelsius = (inputValue - 32) * 5 / 9

    temperaturePera.textContent = `${inputValue}°C = ${celsiusToFahrenheit.toFixed(3)} Fahrenheit | ${inputValue}°F = ${fahrenheitToCelsius.toFixed(3)} Celsius`
}
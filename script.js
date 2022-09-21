
let inputNum = document.getElementById("input-num")
const convertBtn = document.getElementById("convert-btn")
const lengthPara = document.getElementById("length-para")
const volumePara = document.getElementById("volume-para")
const massPera = document.getElementById("mass-para")


convertBtn.addEventListener("click", function () {
    length()
    volume()
    mass()
})

function length() {
    let inputValue = inputNum.value
    const meterToFeet = inputValue * 3.281
    const feetToMeter = inputValue / 3.281

    lengthPara.textContent = `${inputValue} meters = ${meterToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeter.toFixed(3)} meters`
}

function volume() {
    let inputValue = inputNum.value
    const literToGallon = inputValue / 3.785
    const gallonToLiter = inputValue * 3.785

    volumePara.textContent = `${inputValue} liters = ${literToGallon.toFixed(3)} gallons | ${inputValue} gallons = ${gallonToLiter.toFixed(3)} liters`
}


function mass() {
    let inputValue = inputNum.value
    const kilosToPound = inputValue * 2.205
    const poundToKilos = inputValue / 2.205

    massPera.textContent = `${inputValue} kilos = ${kilosToPound.toFixed(3)} pounds | ${inputValue} pounds = ${poundToKilos.toFixed(3)} kilos`
}
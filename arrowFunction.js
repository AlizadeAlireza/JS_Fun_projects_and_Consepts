// function already create a variable of the sum in this case
function sum(a, b) {
    return a + b
}

let sum2 = (a, b) => a + b // no brackets and no return statements so retrun

function isPositive(number) {
    return number >= 0
}

let isPositive2 = (number) => number >= 0

function randomNumber() {
    return Math.random
}

document.addEventListener("click", function () {
    console.log("click")
})
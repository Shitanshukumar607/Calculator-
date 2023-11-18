let Output = document.getElementById("output")
let Output2 = document.getElementById("output2")

let output1 = ""

function one() {
    let a1 = output1 + "1"
    Output.textContent = a1
    output1 = a1
    Output2.textContent = ""
}

function two() {
    let a2 = output1 + "2"
    Output.textContent = a2
    output1 = a2
    Output2.textContent = ""
}

function three() {
    let a3 = output1 + "3"
    Output.textContent = a3
    output1 = a3
    Output2.textContent = ""
}

function four() {
    let a4 = output1 + "4"
    Output.textContent = a4
    output1 = a4
    Output2.textContent = ""
}

function five() {
    let a5 = output1 + "5"
    Output.textContent = a5
    output1 = a5
    Output2.textContent = ""
}

function six() {
    let a6 = output1 + "6"
    Output.textContent = a6
    output1 = a6
    Output2.textContent = ""
}

function seven() {
    let a7 = output1 + "7"
    Output.textContent = a7
    output1 = a7
    Output2.textContent = ""
}

function eight() {
    let a8 = output1 + "8"
    Output.textContent = a8
    output1 = a8
    Output2.textContent = ""
}

function nine() {
    let a9 = output1 + "9"
    Output.textContent = a9
    output1 = a9
    Output2.textContent = ""
}

function zero() {
    let a0 = output1 + "0"
    Output.textContent = a0
    output1 = a0
    Output2.textContent = ""
}

function doublezero() {
    let a00 = output1 + "00"
    Output.textContent = a00
    output1 = a00
    Output2.textContent = ""
}

function add() {
    let aadd = output1 + "+"
    Output.textContent = aadd
    output1 = aadd
    Output2.textContent = ""
}

function minus() {
    let aminus = output1 + "-"
    Output.textContent = aminus
    output1 = aminus
    Output2.textContent = ""
}

function multiply() {
    let amultiply = output1 + "*"
    Output.textContent = amultiply
    output1 = amultiply
    Output2.textContent = ""
}

function divide() {
    let adivide = output1 + "/"
    Output.textContent = adivide
    output1 = adivide
    Output2.textContent = ""
}

function decimal() {
    let adecimal = output1 + "."
    output1 = adecimal
    Output.textContent = adecimal
    Output2.textContent = ""
}

function deleteone() {
    output1 = output1.slice(0, -1)
    Output.textContent = output1
    Output2.textContent = ""
}

function removeall() {
    output1 = ""
    Output.textContent = output1
    Output2.textContent = ""
}

function equalto() {
    output1 = eval(output1);
    Output.textContent = output1
    Output2.textContent = "Result:"
}
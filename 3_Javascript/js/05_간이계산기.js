let result = 0;


const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")

const resultBox = document.getElementById("resultBox");


function plus() {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    resultBox.innerText = num1 + num2;
}

function minus() {
    resultBox.innerText = Number(input1.value) - Number(input2.value)
}

function multiply() {
    resultBox.innerText = Number(input1.value) * Number(input2.value)
}

function division() {
    resultBox.innerText = Number(input1.value) / Number(input2.value)
}

function mod() {
    resultBox.innerText = Number(input1.value) % Number(input2.value)
}


const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const resultBox = document.getElementById("resultBox");

function calc(op){
    let result = 0;

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    switch(op) {
    case '+' : result = n1 + n2; break;
    case '-' : result = n1 - n2; break;
    case '*' : result = n1 * n2; break;
    case '/' : result = n1 / n2; break;
    case '%' : result = n1 % n2; break;
    }

    resultBox.innerText = result;
}
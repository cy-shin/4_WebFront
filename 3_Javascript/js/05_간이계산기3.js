const resultBox = document.getElementById("resultBox");

function calc(btn){
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
    const op = btn.innerText;

    switch(op) {
        case '+' : result = n1 + n2; break;
        case '-' : result = n1 - n2; break;
        case '*' : result = n1 * n2; break;
        case '/' : result = n1 / n2; break;
        case '%' : result = n1 % n2; break;
        }
    
    resultBox.innerText = result;
}
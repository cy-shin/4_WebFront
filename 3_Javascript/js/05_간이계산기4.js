const resultBox = document.getElementById("resultBox");

function calc(btn){
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
    const op = btn.innerText;
    
    // eval("코드 형식의 문자열")
    // -> 매개변수의 문자열을 JS 코드로 해석, 수행하는 함수
    // -> 속도가 느림.. + 보안 이슈로 인해 사용 지양

    // resultBox.innerText = eval(n1 + op + n2);
    // n1 = 10, n2 = 20, op = '+'인 경우
    // 10 + 20 문자열이 만들어지고 이를 JS로 해석함

    // 해결 방법 : new Function() 사용
    
    //                                  return    10   +    20
    resultBox.innerText = new Function("return" + n1 + op + n2)();

}
// 형변환 확인하기
// (1) querySelector를 이용해서 선택하기
// const btn1 = document.querySelector(".btn1"); -> 한 개만 선택하기
const btns = document.querySelectorAll(".btn1"); // -> 여러 개 동시에 선택하기
btns[0].style.color="blue";

// (2) getElementsByClassName 사용해 배열을 불러온 후 인덱스 번호 이용
// const btn1 = document.getElementsByClassName("btn1");
const btn1 = document.getElementsByClassName("btn1")[1];

btn1.style.color="red";

btn1.addEventListener("click", function(){
    console.log("parseInt('123') : " + parseInt('123'));
    console.log("parseInt('3.14') : " + parseInt('3.14'));
    console.log("----------------------------------------");

    console.log("parseFloat('123') : " + parseFloat('123'));
    console.log("parseFloat('3.14') : " + parseFloat('3.14'));
    console.log("----------------------------------------");

    console.log("Number('123') : " + Number('123'));
    console.log("Number('3.14') : " + Number('3.14'));
    console.log("----------------------------------------");

})

// isNaN(값)
const input2 = document.getElementById("input2");
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", function(){
    if(isNaN(input2.value)) {
        alert("숫자가 아닙니다")
    } else{
        alert("숫자입니다.")
    }
})

// Math 확인
const input3 = document.getElementById("input3");
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function(){
    console.log("Math.ceil : " + Math.ceil(input3.value));
    console.log("Math.floor : " + Math.floor(input3.value));
    console.log("Math.trunc : " + Math.trunc(input3.value));
    console.log("Math.round : " + Math.round(input3.value));
})

// 배경 색 랜덤
document.getElementById("btn4").addEventListener("click", function(){
    const r = parseInt(Math.random()*256);
    const g = parseInt(Math.random()*256);
    const b = parseInt(Math.random()*256);
    // Math.floor나 parseInt 등으로 소수점 제거

    document.getElementsByTagName("body")[0].style.backgroundColor 
    = "rgb(" + r + "," + g + "," +  b + ")";

})
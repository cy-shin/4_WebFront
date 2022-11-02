// id로 접근하기
function fnTest1() {
    // id가 div1인 요소를 얻어와 상수형 변수 div1에 저장

    const div1 = document.getElementById("div1");

    //  접근한 요소의 배경색을 얻어와 변수에 저장
    const bgColor = div1.style.backgroundColor; // 배경색 얻어오기

    if(bgColor == 'red'){
        div1.style.backgroundColor="yellow"
    } else {
        div1.style.backgroundColor="red"
    }
}


// class로 접근하기
function fnTest2(){

    // 요소 여러 개를 한 번에 접근하는 경우 배열 형태로 반환됨
    const arr = document.getElementsByClassName("div2");

    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);

    arr[0].style.backgroundColor="green";
    arr[1].style.backgroundColor="yellow";
    arr[2].style.backgroundColor="red";

    // 자바와 for문 형식 같음
    for(let i=0;i<arr.length; i++) {
        arr[i].innerText = i+1 + "번째 요소 입니다.";
    }

}

// 태그명으로 접근하기
function fnTest3() {

    // 문서 내에 존재하는 모든 li요소를 어덩와 배열 형식으로 반환
    const arr = document.getElementsByTagName("li");

    for(let i=0; i<arr.length; i++) {

        const num = arr[i].innerText;
        // 태그 안에 있는 값을 얻어오기 -> inner

        arr[i].style.backgroundColor = "rgb(100,"+num+",130)";
    }
}

// input 태그 값(value) 얻어오기 / 변경하기
function fnTest4() {

    // input 요소 접근하기

    const input = document.getElementById("inputTest");
    // input 관련 태그에 작성된 값을 나타내는 속성
    // == value

    // input 요소에 작성된 값을 얻어와 alert로 출력
    alert(input.value);

    // input 요소에 "" (빈 문자열) 대입 == 값을 삭제
    input.value = "";
    // *** alert 후 값이 적용됨
}

// name 속성으로 접근하기
function fnTest5(){

    // name 속성값이 "hobby"인 요소를 전부 얻어와 배열 형식으로 반환하기
    const hobby = document.getElementsByName("hobby");

    // console.log(hobby);
    let str = ""; // 체크된 체크박스의 값을 누적할 변수 선언
    let count = 0;

    for(let i=0; i<hobby.length; i++) {
        // .checked 속성
        // 해당 요소가 체크되어있다면 true / 아니면 false
        // (radio, checkbox 전용 속성)

        if(hobby[i].checked ) { // 체크된 경우?
            // console.log(hobby[i].value);

            str += hobby[i].value + " ";
            count++;
        }
    }

    const result5 = document.getElementById("result5");
    
    if(str != "") {// 체크가 된 경우
        result5.innerText = str;

        result5.innerHTML += "<br><br> 선택된 개수 : " + count;
                       // 누적함
    } else {// 체크가 안된 경우
        result5.innerText = "선택된 취미가 없습니다.";
    }
    
    
}


// CSS 선택자로 접근하기
function fnTest6(){

    // id 속성값이 'cssTest'인 요소 하나를 선택
    // (여러 요소가 선택된 경우 첫 번째 요소만 선택됨)
    document.querySelector("#cssTest").style.border = "3px solid green";

    document.querySelector("#cssTest > div").style.backgroundColor="gold";

    // 선택자에 맞는 모든 요소를 선택해 배열 형식으로 반환
    const arr = document.querySelectorAll("#cssTest > div");
    for(let i=0; i<arr.length; i++) {
        arr[i].style.fontSize = "30px";
    }
    
}


// 엔터키가 입력되었을 때
function inputEnter() {

    // 키보드 입력 과정
    // (1) 키 누름 
    // (2) keydown 이벤트
    // (3) input 태그에 입력
    // (4) keypress
    // (5) 손을 떼면 keyup

    // console.log(window.event.key); // 현재 눌러진 키를 확인하기
    // keydown : 모든 키가 눌렸을 때
    // keypress : 영어/숫자/특수문자/띄어쓰기가 눌러지고 있을 때
    // -> 꾹 누르고 있을 경우, 연속적으로 함수가 호출되는 문제 발생
    // --> keyup 이용 (1회만 인식) 

    if(window.event.key == "Enter") { // 눌러진 키가 엔터인 경우
        // 다른 함수를 호출
        readValue();

    }
}

function readValue(){ // 입력된 값을 읽어들여 채팅창에 출력
    
    // 채팅과 관련된 요소 모두 얻어오기
    const bg = document.getElementById("chatting-bg");
    const input = document.querySelector("#chattingInput");


    // 값이 입력된 경우에만 
    if(input.value.trim().length > 0) { 
        
        // 문자열.trim() : 문자열의 좌우 공백을 제거함(중간 공백은 제거 x)
        bg.innerHTML += "<p><span>"+ input.value +"</span></p>";

        // 스크롤을 제일 밑으로 내리기
        // 요소.scrollTop : 요소 내부 현재 스크롤의 위치
        // 요소.scrollTop = 위치 : 스크롤을 특정 위치로 이동
        // 요소.scrollHeight     : 스크롤의 전체 높이

        bg.scrollTop = bg.scrollHeight;

    } else {
        alert("채팅 내용을 입력해주세요")
    }
    
    // 입력한 내용 삭제
    input.value = "";

}

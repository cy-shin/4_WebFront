// window.setTimeout(함수, 지연시간(ms))

const btn1 = document.getElementById("btn1");

// 이벤트 핸들러에서 this를 사용한 경우, this는 이벤트가 발생한 html 요소를 가리킴
// 하지만, window.setTimeout에서 this를 사용하면 기능 setTimeout의 객체인 window가 나옴
// -> this 사용에 주의

// * 비동기식
//   구문을 해석하고, 실행 대기 없이 다음 구문을 해석
btn1.addEventListener("click", function(){
    
    // 0초(버튼 누르자 마자)
    btn1.style.transitionDuration="1s";
    this.style.backgroundColor="red";

    // 3초 후 orange로 변경
    window.setTimeout(function(){
        btn1.style.backgroundColor="orange";
    }, 3000);
    
    // 6초 후 yellow로 변경
    window.setTimeout(function(){
        btn1.style.backgroundColor="yellow";
    }, 6000);

    // 9초 후 green로 변경
    window.setTimeout(function(){
        btn1.style.backgroundColor="green";
    }, 9000);

});

// 현재 시간을 반환하는 함수
function currentTime(){
    const now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // 얻어온 시간 값이 10 미만일 경우 앞에 0을 추가
    if(hour<10) { hour = '0' + hour; }
    if(min<10) { min = '0' + min; }
    if(sec<10) { sec = '0' + sec; }

    return hour + " : " + min + " : " + sec;
}

const clock = document.getElementById("clock");
// 페이지가 로딩되자마자 #clock에 현재 시간 출력
clock.innerText = currentTime();

// #clock에 1초마다 현재 시간을 출력하도록 하는 코드 작성
const interval = window.setInterval(function(){
    clock.innerText = currentTime();
}, 1000);
// 변수 interval에 코드를 저장

// window.clearInterval(setInterval()이 저장된 변수)
document.getElementById("stop").addEventListener("click", function() {
    window.clearInterval(interval);
    clock.style.backgroundColor="coral";
})

// 팝업창 열기
const openPopup1 = document.getElementById("openPopup1");
const openPopup2 = document.getElementById("openPopup2");
const openPopup3 = document.getElementById("openPopup3");

openPopup1.addEventListener("click", function(){
    window.open("09_배열.html");
});

openPopup2.addEventListener("click", function(){
    window.open("09_배열.html", "_blank", "popup");
});

openPopup3.addEventListener("click", function(){
    // 옵션이 지정된 팝업창

    // 옵션 작성 방법 : "K=V, K=V, K=V", 크기 단위 작성 X(px로 고정됨!!)

    const options = "width=400, height=500, top=50, left=100";
    window.open("09_배열.html",  "popupWindow", options)
});


// 팝업창(자식) 열기
document.getElementById("sendChild").addEventListener("click", function () {
    const options = "width=300, height=250, top=50, left=700";
    window.open("팝업.html",  "popupWindow", options)

})
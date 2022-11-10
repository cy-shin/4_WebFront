// 함수를 정적 요소로 작성해 페이지 로딩과 동시에 실행
// function temp(){
//     alert(1);
// }

// temp(); // 함수 호출

// 즉시 실행 함수 확인하기
// > 페이지 로딩 시 바로 수행됨
(function(){
    const str = "점심 메뉴 추천해주세요.";
    console.log(str);

})();

// 위, 아래의 변수 둘 다 이름이 동일하지만 지역변수라서 중복되지 않음

(function(){
    const str = "전 오늘 라면을 먹겟습니다."
    console.log(str);
})();



// 화살표 함수(Arrow Function)

// 1. 기본 형태 ([매개변수]) => {}
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
    alert("화살표 함수 기본 형태입니다.");



});

// 즉시 실행 함수 + 화살표 함수

(() => {
    console.log("즉시 실행 함수 + 화살표 함수")
})();

// 2. 매개변수가 1개 : 매개변수를 감싸고 있는 소괄호 생략 가능
document.getElementById("btn2").addEventListener("click", e => {
    console.log(e);
    // 매개변수 e (또는 event) : 이벤트 관련 정보를 모두 갖고 있는 객체

    // e.target : 이벤트가 발생한 대상(요소)
    console.log(e.target);

    e.target.style.backgroundColor= "red";

    // ***** [화살표 함수 주의 사항] *****
    // -> 화살표 함수를 이벤트 핸들러로 사용하는 경우,
    //    this는 window 객체를 나타내게 된다.
    //    (화살표 함수 내부에서 this는 사용 불가!)
    console.log(this);
});

// 3. {}, return 생략 : () => 값 또는 식
function print(fn){ // fn : 전달 받은 함수
    console.log(fn(2));
}

document.getElementById("btn3").addEventListener("click", () => {

    // 익명함수
    print( function(num){return num * 10} )

    // 화살표 함수
    print( num => num * 100 )

});
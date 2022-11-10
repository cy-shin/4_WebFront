const add = document.getElementById("add")


add.addEventListener("click", function(){
    // div
    const div = document.createElement("div");
    div.classList.add("row");

    // input
    const input = document.createElement("input");
    input.classList.add("in");
    
    // * 요소에 속성을 추가하거나 속성을 변경할 때 사용하는 함수
    // 요소.setAttribute("속성명", "속성값") : 속성 추가
    // 요소.removeAttribute("속성명") : 속성 제거

    // input에 type="number"를 추가
    input.setAttribute("type", "number");

    // span : remove
    const span = document.createElement("span"); // 동적으로 요소 생성
    span.classList.add("remove");

    // span에 클릭 이벤트 동작 추가 (동적 요소에 이벤트 추가)
    span.addEventListener("click", function(){
        // alert("동적 요소에 이벤트가 추가됨");

        // 클릭된 X버튼의 부모 요소(div.row)를 삭제
        // 요소.remove() 해당 요소를 제거
        this.parentElement.remove()
    });

    // span에 &times; 추가
    // * &times; 는 html에서 제공하는 html 요소?
    span.innerHTML = "&times";

    // div > input, span 조립
    div.append(input, span); // 앞에 위치한 변수부터 추가됨

    // .container에 div를 마지막 자식으로 추가
    document.querySelector(".container").append(div);

    input.focus(); // 화면에 추가된 input에 포커스

})

// function remove(){
//     this.addEventListener("click", function(){
//         alert("삭제");
//     })
// }

// 처음 HTML 문서 해석 시 remove라는 클래스를 가진 요소가 존재하지 않음
// 따라서 add.EventListener 외부에, remove 요소에 특정한 기능을 추가하는 구문을 작성해도 적용되지 않음
// -> 정적 요소, 정적 요소가 먼저 로딩된 후에 동적 요소가 추가댐

// * 처음부터 있던 HTML 요소 == 정적 요소
// * JS로 추가되는 요소 == 동적 요소


// 계산하기
// 정적, 동적 요소와 함수 실행 시점 구별하기
// 함수는 호출된 시점의 HTML 화면을 기반으로 해석을 진행
const calc = document.getElementById("calc")

calc.addEventListener("click", function(){
    const inputList = document.getElementsByClassName("in");
    let sum = 0;

    for(let input of inputList){
        sum += Number(input.value); // input 요소에 작성된 값을 누적
        // HTML 요소에서 값을 읽어오면, 읽어온 값은 항상 String -> Number로 형변환해줌(== 데이터 파싱)
    }

    alert("합계 : " + sum);
})
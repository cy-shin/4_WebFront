// 색 출력 영역
// 요소를 얻어와서 변수에 저장
// 클래스명, 태그명, name속성값, queryselectorAll()는 배열 형태로 요소를 가져옴
const container = document.getElementsByClassName("container");
const area      = document.getElementsByClassName("area");
const box       = document.getElementsByClassName("box");
const boxColor  = document.getElementsByClassName("box-color");

container[0].style.display="flex";

// for of문
for(let item of area) {
    // item == area 배열에 담긴 요소르 순차적으로 하나씩 꺼내 저장하는 변수
    item.style.width="150px";
    item.style.height="170px";
    item.style.border="1px solid black";
    item.style.display="flex";
    item.style.flexDirection="column";
}

for(let item of box) {
    // item == area 배열에 담긴 요소르 순차적으로 하나씩 꺼내 저장하는 변수
    item.style.height="150px";
    item.style.borderBottom="1px solid black";
}

for(let item of boxColor) {
    // item == area 배열에 담긴 요소르 순차적으로 하나씩 꺼내 저장하는 변수
    item.style.outline="none";
    item.style.border="none";
}

// change : 포커스를 잃거나 엔터를 입력했을 때, 작성된 값이 이전 값과 다른 경우
// blur : 포커스를 잃었을 때마다

for(let i=0; i<boxColor.length; i++) {
    // boxColor[i].addEventListener("blur", function(){
    //     console.log(boxColor[i].value);
    //     box[i].style.backgroundColor=boxColor[i].value;
    // })
    boxColor[i].addEventListener("change", function(){
        box[i].style.backgroundColor=this.value;
        this.style.color = this.value;
    })
}

// 요소 선택
const btn1 = document.getElementById("btn1");

const print1 = document.getElementById("print1");

const clearBtn = document.getElementById("clearBtn");


// transition-duration
btn1.addEventListener("click", function(){
    const duration = document.getElementById("input1").value;
    print1.innerText = duration;
    for(let item of box) {
        item.style.transitionDuration = duration + "s";
    }
})

// #ckearBtn 클릭 시 box의 배경색, boxColor의 글자색 초기화
clearBtn.addEventListener("click", function(){
    for(let i=0; i<box.length; i++) {
        boxColor[i].value = "";
        box[i].style.backgroundColor = "";
        boxColor[i].style.color = "";
    }
})


// 
container[0].style.width="800px";
container[0].style.flexWrap="wrap";

const add = document.getElementById("add");
const addBox = document.getElementsByClassName("addBox");

addBox[0].style.display="none";

add.addEventListener("click", function(){
    container[0].innerHTML += addBox[0].innerHTML; 
    // innerHTML로 요소 추가 X -> 더 좋은 다른 방법이 있음!
})


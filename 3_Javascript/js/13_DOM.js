// Node 확인하기
document.getElementById("btn1").addEventListener("click", function(){
    
    // 부모 노드 관련
    // - 요소.parentNode : 요소의 부모 노드를 탐색하여 반환
    
    // 자식 노드 관련
    // - 요소.childNodes : 요소의 자식 노드를 모두 반환 -> NodeList 형태(유사배열)로 반환됨
    // - 요소.firstChild : 요소의 첫 번째 자식 노드를 탐색해서 반환
    // - 요소.lastChild : 요소의 마지막 자식 노드를 탐색해서 반환
    // - 요소.childNodes[인덱스] : 인덱스 번째 자식 노드를 탐색해서 반환

    // 형제 노드 관련
    // - 요소.previousSibling : 요소의 이전 형제 노드를 반환함
    // - 요소.nextSibling : 요소의 다음 형제 노드를 반환함
    // - 요소.previousElementSibling 


    // #test의 자식 노드를 모두 얻어와서 확인하려고 함!
    const testNodeList = document.getElementById("test").childNodes;

    console.log(testNodeList);

    // 노드 탐색
    const li1 = document.getElementById("li1");
    console.log(li1.parentNode); // 부모 노드 탐색 ( ul#test )

    // 요소 하나를 기준으로 삼아, 다른 요소를 찾는 것이 정석!
    // #li1의 부모의 배경색을 orange로 변경 ( 노드 탐색 활용 방법 )
    li1.parentNode.style.backgroundColor = "orange";

    // #li1의 부모 노드의 마지막 부분에 "ABCD" 라는 text node 추가
    // 요소.append(요소 또는 노드) : 마지막 자식으로 추가(덧붙이다)
    li1.parentNode.append("ABCD");

    const test = document.getElementById("test");
    // #test의 첫 번째 자식 노드 찾기
    console.log(test.firstChild);

    // #test의 마지막 자식 노드 찾기
    console.log(test.lastChild);

    // #test의 자식 노드 중 5번 인덱스 노드 찾기
    console.log( test.childNodes[5] );

    // #test의 자식 노드 중 5번 인덱스 노드의 마지막 자식으로 "ZZZ" 추가하기
    test.childNodes[5].append("ZZZ");

    // #test의 자식 노드 중 5번 인덱스의 이전 형제 노드
    console.log(test.childNodes[5].previousSibling);
    
    // #test의 자식 노드 중 5번 인덱스의 다음 형제 노드
    console.log(test.childNodes[5].nextSibling);

    // 노드 탐색 구문 연속 작성
    // #test의 자식 노드 중
    // 5번 인덱스의 이전 형제 노드의
    // 이전 형제 노드
    console.log(test.childNodes[5].previousSibling.previousSibling);
    

})

// *** test 해석
// 0 -> 시작 태그 바로 다음부터 시작, 엔터, 탭키
// 1 -> 주석
// 2 -> 띄어쓰기, 탭키
// 3 -> <li id="li1">1번</li>
// 4 -> 줄바꿈, 띄어씀
// 5 -> <li class="cls">2번</li>
// 6 -> 줄바꿈, 띄어씀
// 7 -> 주석
// 8 -> 줄바꿈, 띄어씀
// 9 -> <li style....></li>
// 10 -> 줄바꿈, 띄어씀
// 11 -> <li><a href...></a></li>
// * a태그는 <li>의 자식 노드
// 12 -> 줄바꿈, 띄어씀


// Element(요소) 탐색 확인
document.getElementById("btn2").addEventListener("click", function(){
    // children : 자식 요소만 모두 선택
    // parentElement : 부모 요소 선택

    // firstElementChild : 첫 번째 자식 요소 선택
    // lastElementChild  : 마지막 자식 요소 선택

    // previousElementSibling : 이전 형제 요소 선택
    // nextElementSibling     : 다음 형제 요소 선택

    const test = document.getElementById("test"); // 부모 요소
    const li1 = document.getElementById("li1"); // 자식요소

    // #li1의 부모 요소 탐색
    console.log(li1.parentElement);
    
    // #li1의 부모 요소의 부모 요소 탐색
    console.log(li1.parentElement.parentElement);
    console.log(li1.parentElement.parentElement.parentElement);
    console.log(li1.parentElement.parentElement.parentElement.parentElement); // 최상위가 html이라서 그 이상은 null로 나옴

    // #li의 모든 자식 요소 탐색
    const list = test.children; // 요소만 모여있어서 NodeList가 아니라 HTMLCollection으로 반환됨
    console.log(list);

    // #test의 첫 번째 자식 요소
    console.log(test.firstElementChild);
    
    // #test의 마지막 자식 요소
    console.log(test.lastElementChild);

    // #test의 자식 요소 중 2번 인덱스
    console.log(list[2]);

    // #test의 자식 요소 중 2번 인덱스의 이전 형제 요소 클릭 시
    // 작성된 내용을 alert로 출력
    
    list[2].previousElementSibling.addEventListener("click", function(){
        alert(this.innerText)

        // 이벤트가 발생한 요소의 다음, 다음 형제 요소의 배경 색을 red로
        this.nextElementSibling.nextElementSibling.style.backgroundColor="red";
    })

})

// innerHTML : 3
const btn3 = document.getElementById("btn3")
const div3 = document.getElementById("div3")

let count3 = 1;

btn3.addEventListener("click", function(){
    if(count3 <= 10) {
        const input = "<input type='text'>";
        div3.innerHTML += "<div>"+count3+input+"</div>";
        count3++;
    }
});

// createElement()
const btn4 = document.getElementById("btn4")
const div4 = document.getElementById("div4")

let count4 = 1;

btn4.addEventListener("click", function(){
    if(count4 <= 10) {
        // document.createElement("태그명") -> 해당 태그 요소를 생성하여 반환함!!
        // 이때, 요소가 생성되지만 화면에 바로 추가되지 않는다.
        const div = document.createElement("div");
        const input = document.createElement("input");

        // #div4 > div > input

        // div의 내용으로 count4 추가 후 1 증가
        div.innerText = count4;
        count4++;

        // input을 div의 마지막 자식으로 추가
        // 요소A.append(노드 또는 요소B)
        // -> 요소A의 마지막 자식으로 노드 또는 요소B 추가
        div.append(input);

        // #div4의 마지막 자식으로 추가
        div4.append(div);
    }

})
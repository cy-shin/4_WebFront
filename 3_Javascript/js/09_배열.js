// 배열 확인
document.getElementById("btn1").addEventListener("click", function(){

    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ['사과', '딸기', '바나나'];

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    // 배열에 존재하지 않는 인덱스에 값 대입
    // -> 자동으로 추가되면서 길이 증가
    arr1[0] = '깁밥';
    arr1[1] = 5000;
    console.log(arr1);
    arr1[2] = true;

    // 중간 인덱스를 건너뛰면, 건너 뛴 부분은 empty로 남음
    arr1[5] = true; // 더 추가 가능
    console.log(arr1);

    // for문으로 배열 요소 반복 접근하기
    // // 1. 일반 for문 - 배열, 컬렉션
    // for(let i=0; i<arr4.length; i++) {
    //     console.log(arr4[i]);
    // }

    // 2. 배열.array.forEach(funtcion(item, index){ 반복 수행 코드 }) <- 배열에서만!
    // - item : 현재 접근중인 요소
    // - index : 현재 인덱스 

    // * 배열과 컬렉션을 구분할 것!
    // 예) 여러 요소를 얻어오는 경우(getElementsByName 등) HTMLcollection, NodeList에 해당하며
    //     배열이 아니어서 forEach()문을 사용할 수 없음
    arr4.forEach(function(a, i) {
    console.log(i + " t " + a);
    })

    // 3. for(item of 배열 또는 컬렉션) {} - 배열, 컬렉션
    // * 구체적으로는 symbol iterator를 가지고 있는 객체에 사용할 수 있음
    for(let item of arr4){ // arr4에서 item을 하나씩 꺼내어 담는다
        console.log(item);
    }
    

    const list1 = document.getElementsByTagName("li");
    // HTMLCollection(5) [li, li, li, li, li]
    // prototype 안에 symbol iterator가 있음
    
    const list2 = document.querySelector("#test > li");
    // NodeList(5) [li, li, li, li, li]
    // prototype 안에 symbol iterator가 있음

    // Collection과 List는 유사 배열

    let sum = 0;
    let sum2 = 0;

    for(let item of list1){
        sum += Number(item.innerText);
        sum2 += item;
        // 그냥 item을 바로 꺼내면, [object HTMLLIElement]가 출력됨
    }

    console.log(sum);
    console.log(sum2);

    // 4. for(let key in 객체) - js 객체용 for문
});


// 배열 관련 함수 확인
document.getElementById("btn2").addEventListener("click", function(){
    // 비어있는 배열 생성
    const arr = []; // == new Array()

    // 배열.push(값) : 배열 마지막 요소로 추가
    arr.push("초밥");
    arr.push("우육면");
    arr.push("쌀국수");
    arr.push("삽겹살");

    console.log(arr);
    // 배열.toString() : 배열 요소 사이 "," 추가한 문자열로 반환
    console.log(arr.toString());
    // console.log(arr); toString()은 생략해도 똑같이 나옴

    // 배열.pop() : 배열의 마지막 요소를 꺼내와 반환
    const temp = arr.pop();
    console.log("temp : " + temp);
    console.log("arr : " + arr.toString());

    // 배열.indexOf("값") : 일치하는 값을 가진 요소의 index를, 없으면 -1을 반환

    console.log("초밥 인덱스 : " + arr.indexOf("초밥"));
    console.log("갈비가 arr에 있나요? : " + (arr.indexOf("갈비") != -1))

    // 배열.sort() : 배열 내 요소를 오름차순으로 정렬(문자열을 기준)
    console.log(arr.sort());

    // 숫자 정렬의 문제점과 해결 방법
    const numArr = [5, 3, 2, 35, 10, 1];
    // -> 오름차순으로 정렬하면 1, 2, 3, 5, 10, 35로 나와야 하는데..
    
    console.log(numArr.sort());
    // -> sort()는 숫자도 문자열처럼 분석, 첫째 자리의 글자부터 비교함
    // -> 따라서 1, 10, 2, 3, 35, 5로 정렬됨

    console.log("숫자 정렬하기! : " + numArr.sort(function(a,b){return a-b;}))
    
    // 여기에 function(a,b){return a-b}라는 함수는 
    // a와 b의 값을 빼고 값이 양수가 나오면 배열에서 자리를 교체하고 음수가 나오면 교체하지 않는다

    // sort() 함수는 원본 배열의 순서를 정렬 -> 원본 훼손 발생함
    // -> 깊은 복사를 이용해 해결 가능함
    console.log(numArr);

    // 배열.join("구분자")
    console.log(numArr.join("!"));

    // ****************************** //

});

// 로또 번호 생성

document.getElementById("btn3").addEventListener("click", function(){
    const lotto = []; // 빈 배열
    while(lotto.length < 6) { // 배열 요소가 6개 미만일 때 반복하는 반복문
        const ran = parseInt(Math.random() *45 + 1);
        if(lotto.indexOf(ran) == -1) {
            lotto.push(ran);
        }
    }
    lotto.sort(function (a, b) {return a - b;})
    console.log("로또번호 : " + lotto);
})

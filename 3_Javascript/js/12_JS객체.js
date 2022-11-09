// 객체 생성
document.getElementById("btn1").addEventListener("click",function(){

    // {} 객체 생성 및 다루기
    
    // *** (중요) ***
    // JS 객체의 key는 무조건 string (묵시적으로 string)
    // -> key 작성 시 "", '', (따옴표 X) 모두 string으로 인식
    // * 홑따옴표를 표시해주는게 좋음

    const brand = "스타벅스";
    // * 지역변수가 전역변수보다 우선순위 높음!

    const product = { // 객체
        "pName" : "텀블러",
        'brand' : "투썸플레이스",
        color   : ["red", "black", "silver"],
        price   : 30000,

        'information' : function(){ // 객체 내의 기능, 함수 ( = 자바의 메서드와 유사함! )
            console.log(brand); 
            // 객체 내부 함수에서 변수명을 작성하면 
            // 해당 객체의 변수(key)가 아닌 전역변수가 선택된다.
            // 왜? 같은 객체의 변수(key)를 선택하는 방법이 별도로 존재하기 때문
            
            // ** 객체 내부에서 this == 현재 객체(const product) **
            console.log(this.brand);
            console.log(this.pName);
            console.log(this.color);
            console.log(this.price);
        }
    }    

    console.log(product);

    // 객체 기능 호출하기
    // 함수이므로 괄호까지 있어야 기능 실행, 괄호 없으면 모양만 출력
    product.information();

    // 객체가 가지고 있는 값 출력하기
    const div1 = document.getElementById("div1");

    div1.innerHTML = ""; // 이전 내용 모두 삭제

    // 객체의 값을 얻어오거나 대입하는 방법 ( 둘 다 숙지 )

    // 1) 얻어오기 : 객체명.key
    //               객체명['key']

    // 2) 대입하기 : 객체명.key = 값
    //               객체명['key'] = 값
    // * 대괄호 사용 시 반드시 ''를 입력해 string임을 인식시켜야 함

    div1.innerHTML += "product.pName : " + product.pName + "<br>";
    div1.innerHTML += "product.brand : " + product.brand + "<br>";
    div1.innerHTML += "product.color : " + product.color + "<br>";
    div1.innerHTML += "product.price : " + product.price + "<br>";
    div1.innerHTML += "<hr>"

    // product.price 값 변경
    product.price = 25000;
    div1.innerHTML += "product.price : " + product.price + "<br>"
    div1.innerHTML += "<hr>"

    // JS 객체에 없는 key에 값 대입하기
    // -> 객체에 key:value가 추가됨
    product.capacity = "550ml";
    console.log(product);
    div1.innerHTML += "product.capacity : " + product.capacity + "<br>";
    div1.innerHTML += "<hr>";

    // 객체의 key 제거 방법
    // -> delete 객체변수명.key

    // 객체명['key'] 방법으로
    // 객체가 가지고 있는 모든 값 출력하기
    // -> for in 구문(객체 전용 for문)
    div1.innerHTML += "product['capacity'] : " + product['capacity'] + "<br>";


    // for(let key in 객체명) : 매 바퀴마다 객체의 K(key)를 하나씩 얻어와
    //                          Key 변수에 저장

    for(let key in product){
        // 객체의 key는 모두 string == 'pName', 'price'
        // product.'pName'; 불가
        div1.innerHTML += product[key] + "<br>";
    }

})
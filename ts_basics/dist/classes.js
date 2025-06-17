"use strict";
// 클래스는 객체를 생성하는 설계도로 볼 수 있다.
// 클래스 내부에는 다양한 타입이 사용가능하다.
// 클래스 내부에 정의된 함수를 메서드라 한다.
class Car {
    constructor(color) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
}
const car99 = new Car("red");
car99.start();
console.log(car99.color);
//접근 제한자
// -public: 클래스 내부와 외부에서 모두 사용 가능
// -private: 클래스 내부에서만 사용 가능
// -protected: 클래스 내부와 상속받은 클래스에서만 사용 가능
class Car98 {
    constructor(color) {
        this.name = "car";
        this.color = color;
    }
    start() {
        console.log("start");
    }
}
class MynewCar extends Car98 {
    constructor(color) {
        super(color); // 상속받은 값 사용
    }
    showName() {
        console.log(this.name);
    }
}
const mynewCar = new MynewCar("red");
console.log(mynewCar);
mynewCar.showName();
// 정적 멤버변수(static): this가 아닌 클래스 이름을 사용하여 접근
class Car97 {
    constructor(color) {
        this.name = "car";
        this.color = color;
    }
    start() {
        console.log("start");
        console.log(Car97.wheels);
    }
}
Car97.wheels = 4;
const oo = new Car97("red");
console.log(oo.color);
oo.start();
// 추상 클래스: new 키워드를 사용하여 직접적으로 사용이 안되고 상속을 통해서만 가능
class Car96 {
    constructor(color) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
}
class MyNewCar4 extends Car96 {
    constructor(color) {
        super(color);
    }
    someNewFunction() {
        console.log("상속 이외의 로직 적용");
    }
}
const mnc4 = new MyNewCar4("red");
console.log(mnc4);
mnc4.someNewFunction();

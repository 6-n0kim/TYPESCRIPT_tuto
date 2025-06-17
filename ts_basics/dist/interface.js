"use strict";
let user4 = {
    name: 'junyoung',
    age: 20,
    gender: 'male',
    birthYear: 2004
};
user4.name = 'John';
// user4.birthYear = 2006; // 오류
console.log(user4);
let myGrade = {
    1: "A",
    2: "C",
    3: "F",
};
console.log(myGrade);
const myFoo = (a, b) => a + b;
const adult = (age) => age > 18;
// implements 키워드로 상속
class MyCar {
    start() {
        console.log("start");
    }
    constructor(color) {
        this.wheels = 4;
        this.color = color;
    }
    ;
}
const myCar = new MyCar('blue');
console.log(myCar);
myCar.start();
const myYourCar = {
    door: 4,
    color: "red",
    wheels: 4,
    start() {
        console.log("start");
    },
    stop() {
        console.log("stop");
    }
};
const myGift = {
    name: "myBag",
    price: 1000,
    color: "black",
    wheels: 4,
    start() {
        console.log("start");
    }
};
console.log(myGift);

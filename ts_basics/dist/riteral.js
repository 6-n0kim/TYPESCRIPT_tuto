"use strict";
let user1 = 'junyoung';
let user2;
user2 = "hi";
user2 = 2;
const user3 = {
    name: user1,
    job: "developer"
};
console.log(user3.name);
const aStudent = {
    name: user1,
    grade: 3,
};
console.log(aStudent);
// 유니언 타입으로 인터페이스를 정의
function getGift(gift) {
    console.log(gift.color);
}
getGift({
    name: "mobile",
    color: "red",
    call: () => {
        console.log("call");
    }
});
const bagMobile = {
    name: user1,
    color: "red",
    price: 2000,
    open() { }
};

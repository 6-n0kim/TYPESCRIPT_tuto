"use strict";
// 제네릭은 클래스나 함수, 인터페이스를 다양한 타입으로 재사용 할 수 있게 해준다.
// function getArray(arr: number[] | string[] | boolean[]): number {
//     return arr.length;
// }
function getArray(arr) {
    return arr.length;
}
console.log(getArray([1, 2, 3, 4, 5]));
console.log(getArray([`1`, '2', "3", '4', "5"]));
console.log(getArray([true, false, true]));
const m1 = {
    name: "macar",
    price: 1000,
    option: {
        color: "red",
        wheels: 4,
    }
};
const m2 = {
    name: "macar",
    price: 1000,
    option: "full option"
};

"use strict";
// String
let car = "BMW";
car = "3";
//number
let num = 1;
num = 2;
// array
// let arr1: Array<number> = [1, 2, 3];
let arr1 = [1, 2, 3]; // 이 방식을 더 많이 사용
let arr2 = ['1', '2', '3'];
arr1.push(4);
arr2.push("5");
// tuple
let person; // 순서가 바뀌면 안댐
person = ['junyoung', 20];
console.log(person);
// enum
var Os;
(function (Os) {
    Os[Os["Windows"] = 0] = "Windows";
    Os[Os["Ios"] = 1] = "Ios";
    Os[Os["Android"] = 2] = "Android";
})(Os || (Os = {}));
let myOs;
myOs = Os.Windows;
console.log(myOs);
var Os2;
(function (Os2) {
    Os2[Os2["Windows"] = 10] = "Windows";
    Os2[Os2["Ios"] = 11] = "Ios";
    Os2[Os2["Android"] = 12] = "Android";
})(Os2 || (Os2 = {}));
let myOs2;
myOs2 = Os.Windows;
console.log(Os['Ios']);
console.log(Os[1]);

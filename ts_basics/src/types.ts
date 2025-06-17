// String

let car: string = "BMW";

car = "3";

//number
let num: number = 1;
num = 2

// array
// let arr1: Array<number> = [1, 2, 3];
let arr1: number[] = [1, 2, 3];   // 이 방식을 더 많이 사용
let arr2: string[] = ['1','2','3']

arr1.push(4)
arr2.push("5")

// tuple
let person: [string, number];  // 순서가 바뀌면 안댐
person = ['junyoung', 20];
console.log(person)

// enum
enum Os{
    Windows, Ios, Android,
}

let myOs: Os;
myOs = Os.Windows;
console.log(myOs);

enum Os2{
    Windows = 10,
    Ios,
    Android,
}

let myOs2: Os;
myOs2 = Os.Windows;
console.log(Os['Ios']);
console.log(Os[1]);
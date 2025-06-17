// 제네릭은 클래스나 함수, 인터페이스를 다양한 타입으로 재사용 할 수 있게 해준다.

// function getArray(arr: number[] | string[] | boolean[]): number {
//     return arr.length;
// }

function getArray<T>(arr: T[]): number {
    return arr.length;
}

console.log(getArray<number>([1, 2, 3, 4, 5]))
console.log(getArray<string>([`1`, '2', "3", '4', "5"]))
console.log(getArray<boolean>([true, false, true]))

// 인터페이스를 이용한 제네릭
interface MyCar3<T> {
    name: string,
    price: number,
    option:T,
}

const m1: MyCar3<object> = {
    name: "macar",
    price: 1000,
    option: {
        color: "red",
        wheels: 4,       
    }
}

const m2: MyCar3<string> = {
    name: "macar",
    price: 1000,
    option: "full option"
}
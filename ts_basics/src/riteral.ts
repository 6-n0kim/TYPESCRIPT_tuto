let user1 = 'junyoung';
let user2: string | number;
user2 = "hi"
user2 = 2;

// 커스텀 타입: 직접 만든 타입(type, interface)


// job 종류 한정
type job = "designer" | "developer" | "teacher"
interface User{
    name: string;
    job: job;
}

const user3: User = {
    name : user1,
    job : "developer"
}

console.log(user3.name)

interface studentScore{
    name: string;
    grade: 1 | 2 | 3;
}

const aStudent: studentScore = {
    name: user1,
    grade: 3,
}

console.log(aStudent)

// 함수를 포함한 인터페이스

interface Bag{
    name: "bag",
    color: string,
    open():void
}

interface Mobile{
    name: "mobile",
    color: string,
    call():void
}

// 유니언 타입으로 인터페이스를 정의
function getGift(gift: Bag | Mobile) {
    console.log(gift.color)
}

getGift({
    name: "mobile",
    color: "red",
    call: () => {
        console.log("call")
    }
});


// 교차 타입 : 여러 타입을 합쳐서 사용. & 연산자 사용
interface Bag1{
    name: string,
    open():void
}

interface Mobile1{
    name: string,
    color: string,
    price: number
}

const bagMobile: Bag1 & Mobile1 = {
    name: user1,
    color: "red",
    price: 2000,
    open() { }

}
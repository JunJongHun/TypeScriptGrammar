// 1. literal type
// 범용적인 string, number 타입이 아닌 정확한 형태의 값을 타입으로 지정할 수 있다.

let number: 1 = 1;
// number = 2; // 에러

let string: "hello" = "hello";
// string = "hello2"; // 에러

let boolean: true = true;
// boolean = false; // 에러

// 2. Union Type
// 하나 이상의 타입을 허용할 때 사용한다.

let union: string | number = "hello";
union = 1;

// 3. as const
// Object나 Array 내부의 프로퍼티들의 값을 literal처럼 정확히 지정할 때 사용한다.

const numbers = [1,2,3] // number[]
const numbers1 = [1,2,3] as const // [1,2,3]

const obj = {x:1, y:2} // {x:number, y:number}
const obj1 = {x:1, y:2} as const // {x:1, y:2}

// 4. Generic
// 타입을 마치 함수의 파라미터처럼 사용할 수 있다.

// generic을 사용하지 않은 경우
function wrap(param: any) {
    return param;
}

let wrapped = wrap(10); // any

// generic을 사용한 경우
function wrapGeneric<T>(param: T): T {
    return param;
}

let wrapped1 = wrapGeneric<number>(10); // number

// api 응답 타입을 generic으로 지정한 경우
type ApiResponseType<T> = {
    status: number;
    data: T;
}


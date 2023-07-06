// 1. Boolean
// 2. Number
// 3. String
// 4. Array
// 5. Tuple
// 6. Object
// 7. Optional
// 8. Type Alias
// 9. Interface
// 10. Any

// 1. Boolean
// 가장 기본적인 데이터 타입으로 true와 false 값을 가질 수 있다.

const isDone:boolean = false;

// 2. Number
// 모든 숫자를 포함하는 자료형이다. 10진수, 16진수, 2진수, 8진수, 실수 등을 포함한다.

const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010; // 2진수
const octal: number = 0o744; // 8진수
const underscoreNum: number = 1_000_000; // 1000000

// 3. String
// 문자열을 나타내는 자료형이다.

const color: string = "blue";

// 4. Array
// 배열을 나타내는 자료형이다.

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // 제네릭 배열 타입

// 5. Tuple
// 튜플은 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현한다.
// 모든 인덱스의 타입이 정해져 있지 않아도 된다.

let x: [string, number] = ["hello", 10];
// x = [10, "hello"]; // 오류

// 6. Object
// 객체를 나타내는 자료형이다.

const point: {x:number, y:number} = {x:1, y:1};

// const point2: {x:number, y:number} = {x:1}; // y 프로퍼티가 없음, 에러

// 7. Optional
// 객체의 프로퍼티 중에서 일부만 값을 받고 싶을 때 사용한다.
// ?를 붙여서 사용한다.

const point2: {x:number, y?:number} = {x:1, y:2}; // y 프로퍼티가 옵셔널, 에러 발생 X
const point3: {x:number, y?:number} = {x:1}; // y 프로퍼티가 옵셔널, 에러 발생 X

// 8. Type Alias
// 특정 타입이나 인터페이스를 참조할 수 있는 타입을 의미한다.

type PointType = {x:number, y:number};

const startPoint: PointType = {x:1, y:2};

const endPoint: PointType = {x:3, y:4};

// 9. Interface
// 객체의 타입을 정의할 수 있는 자료형이다.

interface PointInterface {
    x: number;
    y: number;
}

const startPoint2: PointInterface = {x:1, y:2};

const endPoint2: PointInterface = {x:3, y:4};

// 10. Any
// 어떤 타입이어도 상관없는 타입이다.
// Any 타입은 기존 자바스크립트와의 호환성을 위해 남아있는 타입이다.
// Any 타입을 남발하면 타입스크립트를 사용하는 의미가 없어진다. 가급적 사용하지 말자.

let data:any = 1;
data = "1"
data = null;
data = undefined;
data = [];
data = {};
data = false;



// value로 1이 할당되었기에 age의 타입을 number로 추론해서 지정
let age = 1;

// 두개의 number를 받아서 그 둘을 더한 값을 리턴하기에 리턴값을 number로 추론 후 지정
function sum(x: number, y: number) {
	return x + y;
}
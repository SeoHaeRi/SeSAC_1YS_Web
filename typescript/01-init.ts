// 변수
// 키워드 변수이름: 타입 = 값;
// 타입표기 (type annotation)
const str: string = "string";
const num: number = 1;
const bool: boolean = true;

// object
const arr1: number[] = [1, 2, 3];
const arr2: string[] = ["a", "w", "e"];
const arr3: Array<number> = [1, 2, 3];
// concat은 string에 쓸 수 있어서 arr2만 됨
console.log(arr2[0].concat("!"));

// tuple
// 길이가 고정되고 값을 바꿀 수 없는 것
const arr4: [boolean, string] = [true, "t"];
console.log(arr4[1].concat("!"));

// enum
// 어떤 특정 값들을 열거하는 집합
// 집합 안에 있는 값들만 들어갈 수 있음
enum Names {
  sesac,
  "새싹",
}
const name1: Names = Names.sesac;

// any : 최대한 안 쓰는게 좋다, 모든 타입에 대해서 허용한다
// void : undefined 와 null 만 들어갈 수 있는 타입 (함수 리턴 타입으로 많이 사용)
// never : 절대 끝이 나지 않는 것에 쓰임
function neverEnd(): never {
  while (true) {
    // if (num == 3) {
    // break 있으면 안됨
    //   break;
    // }
  }
}

////////////////////////////
// 함수
// (매개변수: 타입) : <return>
// function 함수 이름 (매개변수)
function sum1(a: number, b: number): number {
  return a + b;
}
console.log(sum1(1, 2));
// console.log(sum1('1', 2));

// ? 하면 지정 타입 or undefined가 될 수 있는 것
function sum2(a: number, b?: number): number {
  if (b == undefined) return a;
  else return a + b;
}

// interface
interface Student {
  name: string;
  age: number;
  nickname?: string;
}

const student1: Student = {
  name: "이름1",
  age: 20,
};

// class 클래스 이름 {
// 변수명: 타입;
// constructor(변수 : 타입) {
//   this.변수명 = 변수
// }
// }

class Person {
  id: string;
  constructor(name: string, age: number) {
    this.id = name + age;
  }
}

const person1 = new Person("이름3", 30);
console.log(person1.id);

interface Shape {
  width: number;
  getLength(): number;
}

class Square implements Shape {
  readonly width: number;
  height: number;
  getLength(): number {
    return this.width;
  }
}

const square1 = new Square();

class Person2 {
  constructor(public name: string, private age: number) {
    this.name = name;
    this.age = age;
  }
}
const person3 = new Person2("a", 1);
console.log(person3.name);
// age X

// 제네릭 (Generic)
function getText<T>(text: T): T {
  return text;
}
console.log(getText<string>("a"));
console.log(getText<number>(2));

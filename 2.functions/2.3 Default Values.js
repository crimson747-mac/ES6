// default Value: 직접 입력하는 방식
function sayHello(name = "anonymous") {
  return "hello " + name;
}

console.log(sayHello("Tree"));
console.log(sayHello());

// default Value2: 변수를 만들어서 입력하는 방식
const DEFAULT = "anonymous";
const sayHi = (name = DEFAULT) => "Hi " + name;

console.log(sayHi("crimson"));
console.log(sayHi());

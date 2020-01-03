// default Value
function sayHello(name = "anonymous") {
  return "hello " + name;
}

console.log(sayHello("Tree"));
console.log(sayHello());

// default Value2
const DEFAULT = "anonymous";
const sayHi = (name = DEFAULT) => "Hi " + name;

console.log(sayHi("crimson"));
console.log(sayHi());

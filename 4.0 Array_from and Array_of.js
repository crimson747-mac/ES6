// Array.of() => 요소를 배열로 만든다.
const friends = Array.of('tree', 'crimson', 'zero');

console.log(friends);

// Array.from()
const buttons = document.querySelectorAll('btn');

// array-like-objects (HTML Collection) => Array
const buttons = Array.from(buttons);
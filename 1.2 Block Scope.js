if (true) {
  var nice = "nice";
  // => block scope 가 아니기 때문에 {중괄호} 밖에서도 살아있음
  // 오직 function () {중괄호} 에서만 scope 개념이 존재한다.

  const hello = "hello";
  let hi = "hi";
  // => 모든 block scopr가 존재하기 때문에 {중괄호} 밖에서는 존재하지 않음
  // => 정상
}

console.log(nice); // => 가능
console.log(hello); // => 불가능
console.log(hi); // => 불가능

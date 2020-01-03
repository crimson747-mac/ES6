// 기존
function nameOf(args) {
  return null;
}

const function1 = function(args) {
  return null;
};

const names = ["tree", "crimson", "space"];

const moon = names.map(function(item) {
  return item + " 🌕";
});

// Arrow Function 1
// item 만 사용할 경우 () 는 필요 없다.
const sun = names.map((item, index) => {
  return item + " 💥: " + index;
});

// Arrow Function 2: implicit return => 같은 줄에 뭘 적던지 간에 리턴된다.
//=> 중괄호를 주가하면 implicit return 속성은 사라진다.
const sun2 = names.map(item => item + " 💥");

console.log(moon);
console.log(sun);
console.log(sun2);

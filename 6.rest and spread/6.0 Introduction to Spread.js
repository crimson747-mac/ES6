// spread: ... => array가 아닌 그 안의 값들을 가져온다.
const friends = [1, 2, 3, 4];
const family = ["a", "b", "c"];

console.log(friends);
console.log(...friends);

// 가져온 값들을 이용해서 새로운 배열을 만들 수 있다.
console.log([...friends, ...family]);

const crimson = {
  name: "tree",
  age: 27
};

const zero = {
  id: "phantom",
  pw: 10
};

console.log({ ...crimson, ...zero });

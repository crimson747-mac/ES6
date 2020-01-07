const friends = ["tree", "crimson"];

//기존의 배열을 복사해서 새로운 배열을 만드는데 사용한다.
const newFriends = ["zero", ...friends];

console.log(newFriends);

const tree = {
  username: "crimson"
};
// 기존의 객체에서 새로운 property를 추가하는 방법이다.
console.log({ ...tree, password: 1212 });

// 조건부로 object에 값을 넣는 방법
const lastName = prompt("Last name here");
//const user = {username:"tree", age:24, lastNme: lastname !== "" ? lastName:undefined};
const user = {
  username: "tree",
  age: 27,
  ...(lastName !== "" && { lastName })
};
console.log(user);

// spread

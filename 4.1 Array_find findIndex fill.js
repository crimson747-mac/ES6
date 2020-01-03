// 1. find()
// return first element on the right condition
const friends = [
    "crimson747@naver.com",
    "lynn@naver.com",
    "zero@gmail.com",
    "rlaskadn1234@hanmail.net"
]

const result = friends.find(friend => friend.includes("@naver.com"));
console.log(result)

// 2. findIndex() - it starts from zero
const indexResult = friends.findIndex(friend => friend.includes("@gmail.com"));

console.log(indexResult)
// 1. Array.find()
// return first element on the right condition
const friends = [
    "crimson747@naver.com",
    "lynn@naver.com",
    "zero@gmail.com",
    "rlaskadn1234@hanmail.net"
]

const result = friends.find(friend => friend.includes("@naver.com"));
console.log(result)

// 2. Array.findIndex() - it starts from zero
const indexResult = friends.findIndex(friend => friend.includes("@gmail.com"));

console.log(indexResult)

// 3. Array.fill(content, start, before)
friends.fill("*".repeat(5), 1, 3);
console.log(friends)
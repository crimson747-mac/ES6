// 1. includes
const isEmail = email => email.includes("@naver.com");

console.log(isEmail("crimson747@naver.com"));

// 2. repeat
const CC_NUMBER = "5181";

const displayName = `${"*".repeat(10)}${CC_NUMBER}`;
console.log(displayName);

// 3. startsWith & endWith
const id = "Mr. Crimson";

console.log(id.startsWith("Mr"));
console.log(id.endsWith("Crimson"));

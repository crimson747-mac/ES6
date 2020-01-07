// Rest Parameters: 값을 압축해서 받을 수 있다.
const infiniteARgs = (...zero) => {
  console.log(zero);
};
infiniteARgs("1", 2, 3, "4");

const bestFriendsMaker = (firstOne, ...rest) => {
  console.log(`My best friend is ${firstOne}`);
  console.log(rest);
};
bestFriendsMaker("crimson", "tree", "zero", "phantom", "zard");

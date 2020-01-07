// property를 완전히 날리면서 object를 만드는 방법
const user = {
  name: "crimson",
  age: 24,
  password: 1212
};

const killPassword = ({ password, ...rest }) => rest;

const cleanUser = killPassword(user);
console.log(cleanUser);

// default값을 가지는 property를 가지고 object를 생성하기
const user2 = {
  name: "nico",
  age: 24,
  password: 1212
};

const setCountry = ({ country = "KR", ...rest }) => ({
  country,
  ...rest
});

console.log(setCountry(user));

// renaming property
const user3 = {
  NAME: "alpha",
  age: 27,
  password: 12345
};

const rename = ({ NAME: name, ...rest }) => ({ name, ...rest });
console.log(rename(user3));

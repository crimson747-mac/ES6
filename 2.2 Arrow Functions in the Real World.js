const email = [
  "crimson747@naver.com",
  "Arc8485@gmail.com",
  "rlaskadn1234@hanmail.net",
  "nico@nomad.com",
  "crimson@naver.com",
  "Arc@gmail.com",
  "rlaskadn@hanmail.net",
  "nicolas@nomad.com"
];

//find() 원하는 조건의 첫 번째 값을 넘려준다.
const foundMail = email.find(item => item.includes("@gmail.com"));
console.log(foundMail);

//filter() 제공된 함수의 조건을 만족하는 모든 엘리먼트로 새로운 array를 만든다.
const noGmail = email.filter(email => !email.includes("@gmail"));
console.log(noGmail);

//forEach() array에 들어있는 모든 요소를 한 번씩 실행하는 함수
const seperate = [];
email.forEach(email => {
  seperate.push(email.split("@")[0]);
});
console.log(seperate);

//map() 반환된 element들로 새로운 array를 만들어 준다.
const clean = email.map(email => email.split("@")[0]);
console.log(clean);

//map() object를 리턴하는 방법 객체를 생성하고 () 로 감싼다.
const cleaned = email.map((email, index) => ({
  username: email.split("@")[0],
  index: index
}));
console.table(cleaned);

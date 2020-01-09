const p1 = new Promise(resolve => {
  setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "Second");
});

const p3 = new Promise(resolve => {
  setTimeout(resolve, 3000, "Third");
});

// 3개 모두 값을 반환하길 기다렸다가 인자의 순서대로 resolve를 배열로 만들어준다.
// 인자로 넘긴 Promise중 하나라도 reject가 발생하면 에러를 생성한다.
// motherPromise에만 catch를 생성해도 된다.
const motherPromise = Promise.all([p1, p2, p3]);

motherPromise
  .then(values => console.log(values))
  .catch(err => console.log(err));

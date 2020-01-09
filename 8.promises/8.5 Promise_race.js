const p1 = new Promise(resolve => {
  setTimeout(resolve, 10000, "First");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 5000, "I love JS");
});

const p3 = new Promise(resolve => {
  setTimeout(resolve, 3000, "Third");
});

// Promise.race는 인자들 중 하나라도 resolve 되거나 reject되면 된다.
// 또한 가장 빠른요소가 결과를 정한다.
const motherPromise = Promise.race([p1, p2, p3]);

motherPromise
  .then(values => console.log(values))
  .catch(err => console.log(err));

// === 같다.
Promise.race([p1, p2, p3])
  .then(values => console.log(values))
  .catch(err => console.log(err));

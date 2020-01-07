const button = document.querySelector("button");

button.addEventListener("click", function() {
  this.style.backgroundColor = "red"; // this: button을 가리킨다.
});

// button.addEventListener("click", () => {
//   console.log(this); // this: window 를가리킨다.
//   this.style.backgroundColor = "red";
// });

//=> arrow function은 this를 이벤트로 부터 가지고 있지 않다.
//=> window를 가지고 있음.

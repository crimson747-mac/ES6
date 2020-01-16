class Counter {
  constructor({ initalNumber = 0, counterId, plusId, minusId }) {
    this.count = initalNumber;
    this.counter = document.getElementById(counterId);
    this.counter.innerTest = initalNumber;
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEventListener();
  }

  addEventListener = () => {
    console.log(this); // => 여기서의 this는 class를 가라킨다.
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  };

  increase = () => {
    this.count = this.count + 1;
    this.repaintCount();
    console.log(this);
    //여기서의 this는 Btn element요소를 가리킨다. => arrow function을 사용하면 된다.
  };

  decrease = () => {
    this.count = this.count - 1;
    this.repaintCount();
  };
  repaintCount = () => {
    this.counter.innerText = this.count;
  };
}

new Counter({ counterId: "crimson", plusId: "plus", minusId: "minus" });
new Counter({ counterId: "crimson2", plusId: "plus", minusId: "minus2", initalNumber=70 });

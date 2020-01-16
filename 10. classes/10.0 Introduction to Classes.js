//class는 blueprint(청사진)
class User {
  constructor(name) {
    this.username = name;
  }
  sayHello() {
    console.log(`Hello, I'm ${this.username}`);
  }
}

const user = new User("crimson");

console.log(user.username);
user.sayHello();

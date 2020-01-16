// 클래스에서의 this는 클래스 그 자체를 가리킨다.
class User {
  constructor(options) {
    this.username = options.username;
    this.lastName = options.lastName;
    this.email = options.email;
    this.password = options.password;
  }
  sayHello() {
    console.log(`Hello, I'm ${this.username}`);
  }
  getProfile() {
    console.log(`${this.username} ${this.email} ${this.password}`);
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("Can't change password");
    }
  }
}

const user = new User({
  username: "crimson",
  lastName: "Zero",
  email: "crimson@naver.com",
  password: "5573"
});

// 상속받은 class 새롭게 constructor를 생성할 경우 상속받은 contructor를 잃어버린다.
// => 방법 super() 함수를 사용하여 User 클래스를 호출하여 사용한다.
class Admin extends User {
  constructor({ username, lastName, email, password, superAdmin, isActive }) {
    super({ username, lastName, email, password });
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }
  deleteWebsite() {
    console.log("Deleting the whole website...");
  }
}

const admin = new Admin({
  username: "crimson",
  lastName: "Zero",
  email: "crimson@naver.com",
  password: "5573",
  superAdmin: true,
  isActive: true
});

console.log(admin.email);
admin.sayHello();

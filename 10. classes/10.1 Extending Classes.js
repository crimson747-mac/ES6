// 클래스에서의 this는 클래스 그 자체를 가리킨다.
class User {
  constructor(name, lastName, email, password) {
    this.username = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
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

const user = new User("crimson", "Zero", "crimson@naver.com", "5573");

console.log(user.password);
user.getProfile();

user.updatePassword("hello", "5573");
console.log(user.password);

//상속받은 class 새롭게 constructor를 생성할 경우 상속받은 contructor를 잃어버린다.
class Admin extends User {
  constructor(superAdmin) {
    this.superAdmin = this.superAdmin;
  }
  deleteWebsite() {
    console.log("Deleting the whole website...");
  }
}

const admin = new Admin("crimson", "Zero", "crimson@naver.com", "5573", true);

admin.deleteWebsite();

console.log(admin.email);

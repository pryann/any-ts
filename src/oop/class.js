class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  sayHello() {
    console.log(`Hello, ${this.name}`)
  }
}

const user = new User('John', 'john@gmail,com')
const user2 = new User('John', 'john@gmail,com')
console.log(user)
user.sayHello()

// // Constructor function
// function User(name, email) {
//   this.name = name;
//   this.email = email;
// }

// // Methods on prototype
// User.prototype.sayHello = function() {
//   console.log(`Hello, ${this.name}`);
// };

// const user = new User('John', 'john@gmail,com');
// console.log(user);
// user.sayHello();

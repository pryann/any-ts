class User {
  #gender

  constructor(name, email, gender) {
    this.name = name
    this.email = email
    this.#gender = gender
  }

  login() {
    console.log(`Logged in, ${this.email}`)
  }

  logUser() {
    console.log(`User: ${this.name}, ${this.email}`)
    this.#logGender()
  }

  #logGender() {
    console.log(`Gender: ${this.#gender}`)
  }
}

class Admin extends User {
  constructor(name, email, gender, privileges) {
    super(name, email, gender)
    this.privileges = privileges
  }

  banUser(user) {
    console.log(`User ${user.name} has been banned`)
  }

  // Overriding the logUser method
  // logUser() {
  //   console.log(`Admin: ${this.name}, ${this.email}, ${this.privileges.join(', ')}`)
  // }

  logUser() {
    super.logUser()
    console.log(`Privileges: ${this.privileges.join(', ')}`)
  }
}

const user = new User('John', 'john@gmail,com', 'male')
const admin = new Admin('Jane', 'jane@gmail,com', 'male', ['create', 'delete'])
console.log(admin)
admin.login()
admin.logUser()

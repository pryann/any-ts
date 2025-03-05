class User {
  constructor(name) {
    this.name = name
  }

  // can not use "name" because it will cause a stack overflow
  // get name() {
  //   return this.name
  // }

  get firstName() {
    return this.name.split(' ')[0]
  }

  set firstName(value) {
    this.name = `${value} ${this.name.split(' ')[1]}`
  }

  get lastName() {
    return this.name.split(' ')[1]
  }

  set lastName(value) {
    this.name = `${this.name.split(' ')[0]} ${value}`
  }
}

const user = new User('Jane Doe')
console.log(user.name)
console.log(user.firstName)
user.firstName = 'John'
console.log(user.name)

class User2 {
  // constructor(name) {
  //   this._name = name
  // }

  // get name() {
  //   return this._name.toLocaleUpperCase()
  // }

  constructor(name) {
    this.name = name
  }

  get getName() {
    return this.name.toLocaleUpperCase()
  }
}

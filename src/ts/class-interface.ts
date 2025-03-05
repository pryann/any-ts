interface IUser {
  name: string
  age: number
  logUserInfo(): void
}

interface IAdmin extends IUser {
  privilegs: string[]
}

// const user: IUser = {
//   name: 'John',
//   age: 30,
//   logUserInfo() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`)
//   },
// }

class User2 implements IUser {
  name: string
  age: number
  hobbies: string[]

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name
    this.age = age
    this.hobbies = hobbies
  }

  logUserInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
  }
}

class Admin implements IUser, IAdmin {
  name: string
  age: number
  privilegs: string[]

  constructor(name: string, age: number, privilegs: string[]) {
    this.name = name
    this.age = age
    this.privilegs = privilegs
  }

  logUserInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
    console.log(`Name: ${this.name}, Age: ${this.age}`)
  }
}

class User {
  public name: string
  public age: number
  protected email: string
  private password: string
  static readonly maxAge = 100
  // #password: string

  constructor(name: string, age: number, email: string, password: string) {
    this.name = name
    this.age = age
    this.email = email
    this.password = password
    // this.#password = password
  }
}

// Exlude
type Available = 'small' | 'medium' | 'large'
type NotAvailable = Exclude<Available, 'large'>

const size: NotAvailable = 'small'

// Extract
type MostPopularSizes = Extract<Available, 'medium' | 'large'>
const popularSize: MostPopularSizes = 'medium'

type User = {
  readonly id: number
  name: string
  age: number
}

// Pick
type UserPartial = Pick<User, 'name' | 'age'>

const userPartial: UserPartial = {
  // id: 1,
  name: 'John Doe',
  age: 30,
  // hobbies: ['reading', 'running'],
}

// Omit
type UserOmit = Omit<User, 'id'>

const userPartial2: UserOmit = {
  // id: 1,
  name: 'John Doe',
  age: 30,
  // hobbies: ['reading', 'running'],
}

// Partial
type UserUpdate = Partial<User>
const userUpdate: UserUpdate = {
  name: 'John Doe',
}

// Readonly
type UserReadonly = Readonly<User>

// ReturnType
// type AuthService = {
//   login: (email: string, password: string) => User
//   logout: () => void
// }

type AuthService = ReturnType<typeof createAuthService>

function createAuthService() {
  function hashPassword(password: string): string {
    return password
  }

  function verifyPassword(password: string): boolean {
    return true
  }

  return {
    login(email: string, password: string): User {
      return {
        id: 1,
        name: 'John Doe',
        age: 30,
      }
    },
    logout(): void {},
  }
}

function createAuthController(authService: AuthService) {}

const authService = createAuthService()
createAuthController(authService)

class AuthServiceClass {
  // #hashPassword(password: string): string {
  //   return password
  // }

  // #verifyPassword(password: string): boolean {
  //   return true
  // }

  private hashPassword(password: string): string {
    return password
  }

  private verifyPassword(password: string): boolean {
    return true
  }

  public login(email: string, password: string): User {
    return {
      id: 1,
      name: 'John Doe',
      age: 30,
    }
  }

  public logout(): void {}
}

const authServiceClass = new AuthServiceClass()
// authServiceClass.#hashPassword('password')

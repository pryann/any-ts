// alias
type ID = number
type Name = string

const id: ID = 1
const userName: Name = 'John Doe'

// literal
type Direction = 'left' | 'right' | 'up' | 'down'
type HttpStatus = 200 | 201 | 204

const responseStatus: HttpStatus = 200
const gameController: Direction = 'up'

// arrays
type Matrix = number[][]
type Vector = number[]
type StringArray = string[]

const matrix: Matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

// tuple
type RgbColor = [number, number, number]
type Coordinates = [number, number]

const location: Coordinates = [10, 20]

// objects
type User = {
  id: number
  name: string
  age: number
  hobbies: string[]
}

const user: User = {
  id: 1,
  name: 'John Doe',
  age: 30,
  hobbies: ['reading', 'running'],
}

// user.id = '2' // Error: Type 'string' is not assignable to type 'number'

// union
type BirthDate = Date | string

let dateOfBirth: BirthDate = new Date()
dateOfBirth = '1990-01-01'

type ErrorResponse = {
  status: number
  error: string
}

type SuccessResponse = {
  status: number
  data: string
}

type ApiResponse = ErrorResponse | SuccessResponse

// intersection
type BaseSchema = {
  readonly id: number // read-only property
  createdAt: Date
  updatedAt: Date
}

type UserSchema = BaseSchema & {
  name: string
  email: string
  fallbackEmail?: string // optional property
}

const user2: UserSchema = {
  id: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'John Doe',
  email: 'user@mail.com',
}

// user2.id = 2


// function
type DiscountFunction = (price: number, discount: number) => number

const addDiscount: DiscountFunction = (price, discount) => price - price * discount

addDiscount(100, 0.1) // 90
// addDiscount('100', '10')
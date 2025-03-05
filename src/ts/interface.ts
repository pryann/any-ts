interface User {
  readonly id: number
  name: string
  email: string
  age?: number
}

// type  User = {
//   readonly id: number
//   name: string
//   email: string
//   age?: number
// }

const user: User = {
  id: 1,
  name: 'John',
  email: 'johnnyboy@cookie.com',
}

// -----------------------------------------

// type BaseUser = {
//   readonly id: number
//   createdAt: Date
//   updatedAt: Date
// }

// type SiteUser = BaseUser & {
//   name: string
//   email: string
//   age?: number
// }

interface BaseUser {
  readonly id: number
  createdAt: Date
  updatedAt: Date
}

interface SiteUser extends BaseUser {
  name: string
  email: string
  age?: number
}

// -----------------------------------------

// type StringDictionary = {
//   [key: string]: string
// }

interface StringDictionary {
  [key: string]: string
}

const dict: StringDictionary = {
  key1: 'value1',
  key2: 'value2',
}

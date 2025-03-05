// function getFirstElementOfAnArray(arr: any[]): any {
//   return arr[0]
// }

function getFirstElementOfAnArray<T>(arr: T[]): T {
  return arr[0]
}

const arr = [10, 20, 30]
const firstElement = getFirstElementOfAnArray(arr)
const strArray = ['Hello', 'World']
const firstStrElement = getFirstElementOfAnArray(strArray)

async function fetchData<T>(url: string): Promise<T[]> {
  const result = await fetch(url)
  return result.json()
}

// type User = {
//   id: number
//   name: string
//   email: string
//   age?: number
// }

type BaseResponse = {
  userId: number
  id: number
  title: string
}

type Post = BaseResponse & { body: string }

type Todo = BaseResponse & { completed: boolean }

async function main(): Promise<void> {
  const todos = await fetchData<Todo>('https://jsonplaceholder.typicode.com/todos')
  const posts = await fetchData<Post>('https://jsonplaceholder.typicode.com/posts')
  console.log(todos)
  console.log(posts)
}

main()

function combine<T, U>(input1: T, input2: U): [T, U] {
  return [input1, input2]
}

const combined = combine(1, 'mail@mail.hu')

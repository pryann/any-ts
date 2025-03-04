interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const url = 'https://jsonplaceholder.typicode.com/todos'
const completedColor = 'lightgreen'
const notCompletedColor = 'transparent'

async function fetchTodos(): Promise<Todo[]> {
  const response: Response = await fetch(url)
  return response.json() as Promise<Todo[]>
}

function getRowBackgroundColor(completed: boolean): string {
  return completed ? completedColor : notCompletedColor
}

function createRow(todo: Todo): string {
  const { id, title, completed } = todo
  return `
  <tr data-id="${id}" style="background-color: ${getRowBackgroundColor(completed)}">
    <td>
      <input type="checkbox" ${completed ? 'checked' : ''} data-id="${id}" />
    </td>
    <td>${title}</td>
  </tr>`
}

function renderTable(todos: Todo[]): void {
  const rows = todos.map(createRow).join('')
  const tbody: HTMLTableSectionElement | null = document.querySelector('tbody')
  if (tbody) {
    tbody.innerHTML = rows
  }
}

function handleTodoStateChange(event: Event): void {
  const checkbox = event.target as HTMLInputElement
  const todoId = checkbox.dataset.id || ''
  const row: HTMLTableRowElement | null = document.querySelector(`tr[data-id="${todoId}"]`)
  if (row) {
    row.style.backgroundColor = getRowBackgroundColor(checkbox.checked)
  }
}

function attachTodoStatusChangeListener(): void {
  const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach((checkbox: HTMLInputElement) => {
    checkbox.addEventListener('change', handleTodoStateChange)
  })
}

async function init(): Promise<void> {
  const todos: Todo[] = await fetchTodos()
  renderTable(todos)
  attachTodoStatusChangeListener()
}

init()

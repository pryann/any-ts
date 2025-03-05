import { completedColor, notCompletedColor, url } from './consts'
import type { Todo } from './types'

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

function handleTodoStateChange(event: Event): void {
  const checkbox = event.target as HTMLInputElement
  const row: HTMLTableRowElement | null = document.querySelector(`tr[data-id="${checkbox.dataset.id}"]`)
  if (row) {
    row.style.backgroundColor = getRowBackgroundColor(checkbox.checked)
  }
}

export function renderTable(todos: Todo[]): void {
  try {
    const rows: string = todos.map(createRow).join('')
    const tbody = document.querySelector('tbody') as HTMLTableSectionElement
    tbody.innerHTML = rows
  } catch (error) {
    console.log('Show toast notification/ alert to user')
    // alert('Shit happens')
  }
}

export function attachTodoStatusChangeListener() {
  const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach((checkbox: HTMLInputElement) => {
    checkbox.addEventListener('change', handleTodoStateChange)
  })
}

export async function fetchTodos(): Promise<Todo[]> {
  const todos: Response = await fetch(url)
  const data: Todo[] = await todos.json()
  return data
}

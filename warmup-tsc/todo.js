import { completedColor, notCompletedColor, url } from './consts.js'
function getRowBackgroundColor(completed) {
  return completed ? completedColor : notCompletedColor
}
function createRow(todo) {
  const { id, title, completed } = todo
  return `
        <tr data-id="${id}" style="background-color: ${getRowBackgroundColor(completed)}">
          <td>
            <input type="checkbox" ${completed ? 'checked' : ''} data-id="${id}" />
          </td>
          <td>${title}</td>
        </tr>`
}
function handleTodoStateChange(event) {
  const checkbox = event.target
  const row = document.querySelector(`tr[data-id="${checkbox.dataset.id}"]`)
  if (row) {
    row.style.backgroundColor = getRowBackgroundColor(checkbox.checked)
  }
}
export function renderTable(todos) {
  try {
    const rows = todos.map(createRow).join('')
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = rows
  } catch (error) {
    console.log('Show toast notification/ alert to user')
    // alert('Shit happens')
  }
}
export function attachTodoStatusChangeListener() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleTodoStateChange)
  })
}
export async function fetchTodos() {
  const todos = await fetch(url)
  const data = await todos.json()
  return data
}

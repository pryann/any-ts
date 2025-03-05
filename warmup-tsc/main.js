import { attachTodoStatusChangeListener, fetchTodos, renderTable } from './todo.js'
async function init() {
  const todos = await fetchTodos()
  renderTable(todos)
  attachTodoStatusChangeListener()
}
init()

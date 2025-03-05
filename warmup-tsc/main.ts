import { attachTodoStatusChangeListener, fetchTodos, renderTable } from './todo'
import { Todo } from './types'

async function init(): Promise<void> {
  const todos: Todo[] = await fetchTodos()
  renderTable(todos)
  attachTodoStatusChangeListener()
}

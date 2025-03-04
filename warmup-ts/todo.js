const url = 'https://jsonplaceholder.typicode.com/todos';
const completedColor = 'lightgreen';
const notCompletedColor = 'transparent';
async function fetchTodos() {
    const response = await fetch(url);
    return response.json();
}
function getRowBackgroundColor(completed) {
    return completed ? completedColor : notCompletedColor;
}
function createRow(todo) {
    const { id, title, completed } = todo;
    return `
  <tr data-id="${id}" style="background-color: ${getRowBackgroundColor(completed)}">
    <td>
      <input type="checkbox" ${completed ? 'checked' : ''} data-id="${id}" />
    </td>
    <td>${title}</td>
  </tr>`;
}
function renderTable(todos) {
    const rows = todos.map(createRow).join('');
    const tbody = document.querySelector('tbody');
    if (tbody) {
        tbody.innerHTML = rows;
    }
}
function handleTodoStateChange(event) {
    const checkbox = event.target;
    const todoId = checkbox.dataset.id || '';
    const row = document.querySelector(`tr[data-id="${todoId}"]`);
    if (row) {
        row.style.backgroundColor = getRowBackgroundColor(checkbox.checked);
    }
}
function attachTodoStatusChangeListener() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', handleTodoStateChange);
    });
}
async function init() {
    const todos = await fetchTodos();
    renderTable(todos);
    attachTodoStatusChangeListener();
}
init();

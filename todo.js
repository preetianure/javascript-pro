const todoNameInput = document.getElementById('todo-name');
const todoDescriptionInput = document.getElementById('todo-description');
const   
 todoList = document.getElementById('todo-list');

let todos = [];

function addTodo() {
    const todoName = todoNameInput.value.trim();
    const todoDescription = todoDescriptionInput.value.trim();
    if (todoName !== '') {
        const todo = {
            name: todoName,
            description: todoDescription
        };
        todos.push(todo);
        renderTodos();
        todoNameInput.value = '';
        todoDescriptionInput.value = '';
    }
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.classList.add('todo-item');   

        li.textContent = `${todo.name}: ${todo.description}`;
        // Add buttons or elements for update and delete here
        todoList.appendChild(li);
    });
}
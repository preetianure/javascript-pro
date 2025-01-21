document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteBtn">Delete</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';

    // Add event listener to the delete button
    const deleteBtn = listItem.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });
});
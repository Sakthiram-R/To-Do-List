// Adding event listener to the Add button
document.getElementById('add-task-btn').addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    // Check if input is empty
    if (taskValue === '') {
        alert('Please enter a task');
        return;
    }

    // Reference to the task list
    const taskList = document.getElementById('task-list');

    // Create new list item for the task
    const listItem = document.createElement('li');
    listItem.className = 'task-item';

    // Create span to hold the task text
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;

    // Toggle completion by clicking on task text
    taskText.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    // Append task text and delete button to the list item
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);

    // Add the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field after adding task
    taskInput.value = '';
}

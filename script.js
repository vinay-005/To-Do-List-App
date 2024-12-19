// Get references to the input field and the task list container
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    // Get the value entered in the input field and trim whitespace
    const taskText = taskInput.value.trim();

    // If the input is empty, show an alert and exit the function
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item for the task
    const taskItem = document.createElement('li');

    // Create a span element to hold the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText; // Set the text content to the task

    // Add an onclick event to toggle the "completed" class when the task is clicked
    taskSpan.onclick = function () {
        taskSpan.parentElement.classList.toggle('completed'); // Toggle the completed state
    };

    // Create a delete button to remove the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'; // Set the button's text

    // Add an onclick event to remove the task from the list when clicked
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem); // Remove the task's list item from the parent list
    };

    // Append the task text (span) and the delete button to the list item
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);

    // Add the completed task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field for a new task
    taskInput.value = '';
}

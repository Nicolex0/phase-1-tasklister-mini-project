document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve the value of the task description input field
    const taskDescription = document.getElementById('new-task-description').value;

    // Create a new task item with the retrieved value
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;

    // Append the new task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field after adding the task
    document.getElementById('new-task-description').value = '';
  });

  // Implement additional features as needed (e.g., task deletion, priority selection, sorting, editing)
});


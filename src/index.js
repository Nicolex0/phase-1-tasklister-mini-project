document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const taskDescription = document.getElementById('new-task-description').value;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;

    taskList.appendChild(taskItem);

    document.getElementById('new-task-description').value = '';
  });

  taskItem.innerHTML = taskDescription + '<button class="delete-btn">Delete</button>';
taskItem.querySelector('.delete-btn').addEventListener('click', function() {
    taskItem.remove();
});

const prioritySelect = document.getElementById('priority');
prioritySelect.addEventListener('change', function() {
    const selectedPriority = prioritySelect.value;
    taskItem.classList.remove('high', 'medium', 'low');
    taskItem.classList.add(selectedPriority);
});

function sortTasks() {
  const tasks = Array.from(taskList.children);
  tasks.sort((a, b) => {
      // Implement your sorting logic here
      // For example, compare priority values
      // Return -1 if a should come before b, 1 if a should come after b, or 0 if they're equal
  });
  taskList.innerHTML = '';
  tasks.forEach(task => taskList.appendChild(task));
}

taskItem.addEventListener('dblclick', function() {
  const newText = prompt('Enter new task description:');
  if (newText !== null) {
      taskItem.textContent = newText;
  }
});

});


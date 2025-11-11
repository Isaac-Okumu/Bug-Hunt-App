document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('addBtn');
  const taskList = document.getElementById('taskList');

  // Bug 1: localStorage saving is missing (tasks won't persist)

  addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    // Bug 2: No validation for empty input
    const li = document.createElement('li');
    li.textContent = taskText;

    // Bug 3: delete button might not remove the correct task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  });
});

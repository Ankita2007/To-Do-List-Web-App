document.getElementById('form-task').addEventListener('submit', saveTask);

function saveTask(e) {
 
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
 
 
  let task = {
    title,
    description
  };
 
  if (localStorage.getItem('task') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('task', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('task'));
    tasks.push(task);
    localStorage.setItem('task', JSON.stringify(tasks));
  }
 
  getTasks();
 
                      // Reset form
  document.getElementById('form-task').reset();
  e.preventDefault();
 
}
 
                      // Delete To-Do 
function deleteTask(title) {
 
  let tasks = JSON.parse(localStorage.getItem('task'));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
 
  localStorage.setItem('task', JSON.stringify(tasks));
  getTasks();
}
 
                    // Show To-Do List
function getTasks() {
 
  let tasks = JSON.parse(localStorage.getItem('task'));
  let tasksView = document.getElementById('task');
  tasksView.innerHTML = '';
 
  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;
 
    tasksView.innerHTML +=
    `<div class="decor">
    <div class="container">
    <p>${title}</p>
    </div>
    <div class="container">
     <p>${description}</p>
      </div>
      <a href="#" onclick="deleteTask('${title}')">X</a>
     `;
  }
 
}
 
getTasks();
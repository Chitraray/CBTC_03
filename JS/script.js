document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const completedTaskList = document.getElementById("completed-task-list");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(taskInput.value);
    taskInput.value = "";
  });

  function addTask(task) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
            <span class="task-text">${task}</span>
            <span class="task-time">${new Date().toLocaleString()}</span>
            <button class="complete-btn">Complete</button>
        `;

    const completeBtn = taskItem.querySelector(".complete-btn");
    completeBtn.addEventListener("click", () => completeTask(taskItem));

    taskList.appendChild(taskItem);
  }

  function completeTask(taskItem) {
    taskItem.querySelector(".complete-btn").remove();
    taskItem.querySelector(".task-time").textContent =
      new Date().toLocaleString();
    completedTaskList.appendChild(taskItem);
  }
});

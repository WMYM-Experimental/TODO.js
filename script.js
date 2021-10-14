document.getElementById('tasks').style.visibility = 'hidden';

document.querySelector("#push").onclick = function () {
  if (document.querySelector("#new-task input").value.length == 0) {
    alert("Enter a Task c:");
  } else {
    document.getElementById('tasks').style.visibility = 'visible';
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskName">
                ${document.querySelector("#new-task input").value}
                </span>
                <button class="delete">
                    <span class="material-icons material-icons-outlined">
                    delete
                    </span>
                </button>
            </div>
    `;
  }

  let currentTasks = document.querySelectorAll(".delete");
  for (let index = 0; index < currentTasks.length; index++) {
    currentTasks[index].onclick = function () {
      this.parentNode.remove();
    };
  }

  let tasks = document.querySelectorAll(".task");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].onclick = function () {
      this.classList.toggle("completed");
    };
  }

  document.querySelector("#new-task input").value = "";

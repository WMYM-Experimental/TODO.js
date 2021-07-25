document.querySelector("#push").onclick = function () {
  if (document.querySelector("#new-task input").value.length == 0) {
    alert("Enter a Task c:");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div id="tasks">
                <span id="taskName">
                ${document.querySelector("#new-task input").value}
                </span>
                <button class="delete">
                    <span class="material-icons material-icons-outlined">
                    delete_forever
                    </span>
                </button>
            </div>
    `;
  }
};

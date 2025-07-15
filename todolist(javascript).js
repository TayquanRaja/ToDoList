function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <span class="task-text">${taskText}</span>
    <span class="task-actions">
      <button><i class="fas fa-pencil"></i></button>
      <button><i class="fas fa-trash"></i></button>
    </span>
  `;

  const [editBtn, deleteBtn] = li.querySelectorAll("button");

  deleteBtn.addEventListener('click', () => li.remove());

  editBtn.addEventListener('click', () => {
    const newTask = prompt("Edit task:", taskText);
    if (newTask) {
      li.querySelector(".task-text").textContent = newTask;
    }
  });

const checkbox=li.querySelector(".task-checkbox");
checkbox.addEventListener("change",()=>{
  li.classList.toggle("completed",checkbox.checked);
});

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

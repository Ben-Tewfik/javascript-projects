const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const container = document.querySelector(".list");
const tasksCreated = document.querySelector(".container-created-tasks span");
const emptyList = document.querySelector(".empty-list");
let createdTasks = 0;
form.addEventListener("submit", e => {
  e.preventDefault();
  let inputValue = input.value;
  if (inputValue !== "") {
    const element = document.createElement("div");
    element.classList.add("task-list");
    element.innerHTML = `<div class="task">
    <label for="check" class="task-label">
      <input type="checkbox" class="class-check" id="check" />
    </label>
    <p>${inputValue}</p>
    <button class="delete-btn">
      <i class="fa-regular fa-trash-can"></i>
    </button>
  </div>`;
    container.appendChild(element);
    // increment created tasks
    createdTasks++;
    tasksCreated.textContent = createdTasks;
    // delete btn
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", e => {
      const item = e.currentTarget.parentElement.parentElement;
      container.removeChild(item);
      createdTasks--;
      tasksCreated.textContent = createdTasks;
    });
  }
});

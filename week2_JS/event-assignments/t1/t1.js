// array for todo list
const todoList = [
  {
    id: 1,
    task: "Learn HTML",
    completed: true,
  },
  {
    id: 2,
    task: "Learn CSS",
    completed: true,
  },
  {
    id: 3,
    task: "Learn JS",
    completed: false,
  },
  {
    id: 4,
    task: "Learn TypeScript",
    completed: false,
  },
  {
    id: 5,
    task: "Learn React",
    completed: false,
  },
];

const ul = document.querySelector("ul");
const dialog = document.querySelector("dialog");
const addBtn = document.querySelector(".add-btn");
const form = dialog.querySelector("form");
const inputField = form.querySelector("input");

function renderTodo(todo) {
  const li = document.createElement("li");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `todo-${todo.id}`;
  checkbox.checked = todo.completed;

  const label = document.createElement("label");
  label.htmlFor = `todo-${todo.id}`;
  label.textContent = todo.task;

  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    console.log(todoList);
  });

  deleteBtn.addEventListener("click", () => {
    const index = todoList.findIndex((item) => item.id === todo.id);

    if (index !== -1) {
      todoList.splice(index, 1);
      ul.removeChild(li);
      console.log(todoList);
    }
  });

  li.append(deleteBtn, checkbox, label);
  ul.appendChild(li);
}

function renderList() {
  ul.innerHTML = "";
  todoList.forEach(renderTodo);
}

addBtn.addEventListener("click", () => {
  dialog.showModal();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = inputField.value.trim();

  if (!task) {
    return;
  }

  const newTodo = {
    id: Date.now(),
    task,
    completed: false,
  };

  todoList.push(newTodo);
  console.log(todoList);

  renderTodo(newTodo);
  form.reset();
  dialog.close();
});

renderList();

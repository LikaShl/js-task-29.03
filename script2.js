// 2. Завдання:
// Створити список справ, до якого можна:
// - Додати новий елемент
//  - Видалити елемент
//  - Задати що пункт виконано
// Методи:
// document.createElement,
// el.appendChild

let addNewTaskBtn = document.getElementById("addNewTaskBtn");
addNewTaskBtn.addEventListener("click", function () {
  let todoList = document.getElementById("todoList");
  let newTask = document.createElement("li");
  todoList.appendChild(newTask);
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newTask.appendChild(checkbox);
  let todoText = document.createElement("span");
  newTask.appendChild(todoText);
  let newTaskAdd = document.getElementById("newTaskAdd");
  todoText.innerText = ` ${newTaskAdd.value} `;
  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  newTask.appendChild(removeBtn);
  newTaskAdd.value = "";

  removeBtn.addEventListener("click", function () {
    removeBtn.parentElement.remove();
  });

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      todoText.style.textDecoration = "line-through";
    }
  });
});


import { Todo } from "../classes";
import { todoList } from "../index";

const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const buttonDelete = document.querySelector(".clear-completed");
const ulFilters = document.querySelector(".filters");
const anchorFilter = document.querySelectorAll('.filtro');
export const crearTodoHtml = (todo) => {
  const htmlTodo = `	<li class="${todo.completed ? "completed" : ""}" data-id="${
    todo.id
  }">
    <div class="view">
        <input class="toggle" type="checkbox" ${
          todo.completed ? "checked" : ""
        }>
        <label>${todo.task}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`;

  const div = document.createElement("div");
  div.innerHTML = htmlTodo;

  divTodoList.append(div.firstElementChild); //no añadimos el div, sino solo el <li>

  return div.firstElementChild;
};

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    const newTodo = new Todo(txtInput.value);

    todoList.addTodo(newTodo);
    crearTodoHtml(newTodo);
    txtInput.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  const nameElement = event.target.localName; //saber el elemento concreto en el que he hecho click
  const todoElement = event.target.parentElement.parentElement;
  const todoId = todoElement.getAttribute("data-id");

  if (nameElement.includes("input")) {
    todoList.toggleCheked(todoId);
    todoElement.classList.toggle("completed");
  } else if (nameElement.includes("button")) {
    todoList.deleteTodo(todoId);
    divTodoList.removeChild(todoElement);
  }
});

buttonDelete.addEventListener("click", () => {
  todoList.deleteAllCheked();
  //for inverso
  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const elemento = divTodoList.children[i];
    if (elemento.classList.contains("completed")) {
      divTodoList.removeChild(elemento);
    }
  }
});

ulFilters.addEventListener("click", (event) => {
  if (!event.target.text) {
    return;
  }

  anchorFilter.forEach(elem => elem.classList.remove('selected'));
  event.target.classList.add('selected');

  for (const element of divTodoList.children) {
    element.classList.remove("hidden");
    const isCompleted = element.classList.contains("completed");

    switch (event.target.text) {
      case "Pendientes":
        if (isCompleted) {
          element.classList.add("hidden");
        }

        break;

      case "Completados":
        if (!isCompleted) {
          element.classList.add("hidden");
        }

        break;
    }
  }
});

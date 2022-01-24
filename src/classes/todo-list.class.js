import { Todo } from ".";

export class TodoList {
  constructor() {
    this.getLocalStorage();
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.addLocalStorage(todo);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((item) => item.id != id);
  }

  toggleCheked(id) {
    this.todos = this.todos.map((item) => {
      if (item.id == id) {
        item.completed = !item.completed;
      }
      return item;
    });
  }

  deleteAllCheked() {
    this.todos = this.todos.filter((item) => !item.completed);
  }

  addLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  getLocalStorage() {
    this.todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    this.todos = this.todos.map(item => Todo.fromJson(item));
  }
}

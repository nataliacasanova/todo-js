export class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(id) {}

  toggleCheked(id) {}

  deleteAllCheked() {}
}

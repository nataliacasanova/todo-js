export class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(id) {}

  toggleCheked(id) {
    this.todos = this.todos.map((item) => {
      if (item.id == id) {
        item.completed = !item.completed;
      }
      return item;
    });
  }

  deleteAllCheked() {}
}

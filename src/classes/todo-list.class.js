export class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
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
}

import {Todo, TodoList} from './classes';
import { crearTodoHtml} from './js/componentes'
import './styles.css';

export const todoList = new TodoList();
const task = new Todo('Acabar curso JS');

todoList.addTodo(task);

crearTodoHtml(task);

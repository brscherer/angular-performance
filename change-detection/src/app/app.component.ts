import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];

  constructor() {}

  toggleFirst(): void {
    // will not work when OnPush is on TodoList, because directly mutates an element of the list.
    // todos reference will not change, so not triggering changes;
    this.todos[0].completed = !this.todos[0].completed;

    // this will work because we are changing the reference of todos
    /* const [first, ...rest] = this.todos;
    first.completed = !first.completed;
    this.todos = [first, ...rest]; */
  }

  addTodo(): void {
    // this will work because we are changing todos reference with a new array
    const newTodos = [...this.todos];
    newTodos.push(new Todo(newTodos.length, `To Do: ${newTodos.length}`, false));
    this.todos = newTodos;
  }

}

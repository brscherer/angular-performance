import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  // with OnPush, the toggleFirstItem button will never work, because the ref is the same
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: any[];

  constructor() { }

  ngOnInit(): void {}

  onToggle(todo): void {
    todo.completed = !todo.completed;
  }
}

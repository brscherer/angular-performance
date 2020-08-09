import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  // with OnPush, the toggleFirstItem button will never work, because the ref is the same
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  todo: Todo;

  @Output()
  toggle = new EventEmitter<any>();

  onToggle(): void {
    // this will always work, even with OnPush detection, because change detection detects event emitters
    this.toggle.emit(this.todo);
  }
}

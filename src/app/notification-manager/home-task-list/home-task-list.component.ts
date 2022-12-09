import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectDoneHome,
  selectTodoHome,
  homeTaskActions
} from '../../home-task.state';

/*
  Components now pass and receive information between themselves
  and the store
*/
@Component({
  selector: 'home-task-list',
  templateUrl: './home-task-list.component.html'
})
export class HomeTaskListComponent {
  done: Observable<string[]>;
  todo: Observable<string[]>;

  checkbox = 'check_box';
  outline = 'check_box_outline_blank';

  constructor(private store: Store) {
    this.done = store.select(selectDoneHome);
    this.todo = store.select(selectTodoHome);
  }

  taskCompleted(task: string) {
    this.store.dispatch(homeTaskActions.taskCompleted({ task }));
  }

  taskReset(task: string) {
    this.store.dispatch(homeTaskActions.taskReset({ task }));
  }
}

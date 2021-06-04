import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';
import { ListsComponent } from './lists/lists.component';


@NgModule({
  declarations: [
    TodoComponent,
    ListsComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
	  FormsModule
  ]
})
export class TodoModule { }

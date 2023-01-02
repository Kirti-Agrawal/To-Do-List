import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { todoFeatures } from 'src/app/todo.model';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoInput! : todoFeatures;
 @Output() todoDelete: EventEmitter<todoFeatures> = new EventEmitter();
@Output() todoChecked : EventEmitter<todoFeatures>  = new EventEmitter();
 
  constructor() {

   }

  ngOnInit(): void {

  }

  onDelete(todoInput:todoFeatures){
this.todoDelete.emit(todoInput);           ////vo pura hi element send can send onl number also

  }

  onChangeDone(todoInput:todoFeatures){
    console.log(todoInput);
    this.todoChecked.emit(todoInput);
  }

}

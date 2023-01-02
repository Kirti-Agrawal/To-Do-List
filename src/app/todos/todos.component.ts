import { Component, OnInit } from '@angular/core';
import { todoFeatures } from '../todo.model';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
        
  public todoList: todoFeatures[] = [
  ];


  constructor() {


   
  }

  ngOnInit(): void {
    const items = JSON.parse(localStorage.getItem("todoListLocal")); 
    if (items == null) {  //////check for first time length null
      this.todoList = [];
    }
    else {
      this.todoList = items;
    }
  }

  onDelete(deleteItem: todoFeatures) {
    let index = this.todoList.indexOf(deleteItem);  //seedha object compare
    this.todoList.splice(index, 1);
    localStorage.setItem("todoListLocal", JSON.stringify(this.todoList));

  }

  onAdd(addItem: todoFeatures) {
    console.log("event");
    this.todoList.unshift(addItem);
    localStorage.setItem("todoListLocal", JSON.stringify(this.todoList));
  }

  onCheckbox(checkItem:todoFeatures){
    console.log(checkItem);
 let index= this.todoList.indexOf(checkItem);
this.todoList[index].isActive =  !this.todoList[index].isActive;
localStorage.setItem("todoListLocal", JSON.stringify(this.todoList));
console.log(checkItem);
  }
}

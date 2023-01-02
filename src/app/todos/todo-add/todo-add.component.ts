import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { todoFeatures } from 'src/app/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  errorMode: boolean = false;
addItem: todoFeatures;

@Output() todoAdd: EventEmitter<todoFeatures> = new EventEmitter();

// @ViewChild('addForm', {static:false}) addtodoForm: NgForm;
  constructor() { }

  ngOnInit(): void {
  }



onSubmit(form: NgForm){
  console.log(form);
  this.addItem = {
    sno:1,
    title:form.value.title,
    desc:form.value.desc,
    isActive:true

  };
  console.log(this.addItem);
  
  if((this.addItem.title == '' || this.addItem.title == undefined) && (this.addItem.desc == '' || this.addItem.desc == undefined)){
    this.errorMode = true;        /////'' or undefined me thoda
  }
  else{
    this.errorMode = false;
    this.todoAdd.emit(this.addItem);
    this.onCancel(form);
  }


}
onCancel(form:NgForm){
  form.reset();
}
}

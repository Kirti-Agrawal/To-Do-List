import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAboutComponent } from './todo-about/todo-about.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: '', redirectTo: '/todos' , pathMatch: 'full'},
  {path : 'todos' , component :TodosComponent},
  {path: 'about' , component : TodoAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

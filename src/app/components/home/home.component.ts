import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/models/TodoList';
import { OuterService } from 'src/services/outer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todoList: TodoList[] = [];
  todo: TodoList = new TodoList();

  constructor(private _outerService: OuterService) { }

  ngOnInit() {
    this.getAlltodo()
  }
  getAlltodo() {
    this._outerService.getAllTodoTask().subscribe((res) => {
      // @ts-ignore
      this.todoList = res;
      console.log(res)
    }, (err) => {
      console.log(err)
    })
  }
  
  createTask() {
    console.log(this.todo)
    this._outerService.addTaskTodo(this.todo).subscribe((res) => {
      console.log(res)
      alert("Successfully Added");
      this.getAlltodo();
    })

  }
}

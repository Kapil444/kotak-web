import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Requests } from "src/app/models/Requests";
import { Observable } from "rxjs";
import { TodoList } from "src/app/models/TodoList";

@Injectable({
    providedIn: 'root'
})
export class OuterService {
    request: Requests = new Requests();
    constructor(private _http: HttpClient) { }
    
    addTaskTodo(todo: TodoList): Observable<Response> {
        return this._http.post<Response>(this.request.host + this.request.todo_task, todo);
    }
    getAllTodoTask(): Observable<Response> {
        return this._http.get<Response>(this.request.host + this.request.todo_task);
    }
    updateTodoTask(todo : TodoList): Observable<Response> {
        return this._http.put<Response>(this.request.host + this.request.todo_task+"/"+todo.id, todo);
    }
    deleteTodoList(id): Observable<Response> {
        return this._http.delete<Response>(this.request.host + this.request.todo_task+"/"+id);
    }
}
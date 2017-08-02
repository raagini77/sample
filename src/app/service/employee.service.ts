import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService{
    private _Url: string ="https://jsonplaceholder.typicode.com/posts";
    constructor(private _http: Http){}
    getEmployees(){
        return this._http.get(this._Url)
        .map((response:Response ) => response.json());
    }
}
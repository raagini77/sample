import { Component, OnInit } from '@angular/core';
import { EmployeeService } from  './../service/employee.service';

@Component({
    selector: 'app-employee',
    templateUrl:"./employee.component.html"
})
export class EmployeeComponent implements OnInit {
    employees:any= [];
    constructor(private _employeeService:EmployeeService){}
    ngOnInit(){
         this._employeeService.getEmployees()
         .subscribe(result => this.employees = result);
    }
}
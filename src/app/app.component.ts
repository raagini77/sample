import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { ProductService } from './service/product.service';
import { ChildComponent } from './child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService, ProductService]
})
export class AppComponent {
  
}
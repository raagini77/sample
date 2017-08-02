import { Component } from '@angular/core';
@Component({
    selector: 'app-registration',
    templateUrl:"./registration.component.html",
    styles:[`input.ng-invalid{border-left:5px solid red;}
        input.ng-valid{border-
            left:5px solid green;}`
    ]
})  
export class RegistrationComponent {
    public myName:any;

    submitted: boolean = false;
    onSubmit(value:any){
    
        console.log(value);
        this.submitted= true;
    }
 
}
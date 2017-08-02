import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl:"./login.component.html",
   styles: [`input.ng-invalid{border-left:5px solid red;}
   input.ng-valid{border-left:5px solid green;}`]  
})  
export class LoginComponent {

    userForm = new FormGroup({

    })

    onSubmit(){
        console.log(this.userForm.value);
    }
 
}
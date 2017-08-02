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

      name: new FormControl('Raagini', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl(),
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-z]+@[a-z]+\.(com|co.in)$')]),
      address: new FormGroup({
          street: new FormControl(null, Validators.required),
           city: new FormControl(null, Validators.required),
            postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))

      })

    });
    onSubmit(){
        console.log(this.userForm.value);
    }
 
}
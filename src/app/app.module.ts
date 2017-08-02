import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { RegistrationComponent } from './Forms/registration.component';
import { LoginComponent } from './Forms/login.component';
import { AboutComponent } from './about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContactComponent } from './contact.component';
import { EmployeeService } from './service/employee.service';
import { ProductService } from './service/product.service';
import { ChildComponent } from './child.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    EmployeeComponent,
    HomeComponent,
    AboutComponent,
    RegistrationComponent,
    LoginComponent,
    ContactComponent,
    ChildComponent

  
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
          {path:'home',component:HomeComponent},
          {path:'Aboutus',component:AboutComponent},
          {path:'product',component:ProductComponent},
          {path:'employee',component:EmployeeComponent},
          {path:'registration',component:RegistrationComponent},
          {path:'Login',component:LoginComponent},
          {path:'contactus',component:ContactComponent},
    ])
 
  ],
  providers: [EmployeeService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

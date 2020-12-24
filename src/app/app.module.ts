import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';
import { EditEmployeeDetailsComponent } from './edit-employee-details/edit-employee-details.component';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import {MaterialComponents} from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialComponents,
    BrowserAnimationsModule
  ],


  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    ViewEmployeeDetailsComponent,
    EditEmployeeDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeDetailsComponent } from './edit-employee-details/edit-employee-details.component';
import { config } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [

{path:'',component:LoginComponent},
{path:'loginsuccess',component:LoginsuccessComponent},
{path:'register',component:RegistrationComponent},
{path:'addEmployee',component:AddEmployeeComponent},
{path:'editEmployee/:id',component:EditEmployeeDetailsComponent},
{path:'editEmployee',component:EditEmployeeDetailsComponent},
{path:'viewEmployee/:id',component:ViewEmployeeDetailsComponent},
{path:'viewEmployee',component:ViewEmployeeDetailsComponent},
{path:'employeeList',component:EmployeeListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

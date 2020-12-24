import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import {Router} from '@angular/router';
import { EmployeeService } from '../employee.service';
import {MatSnackBar} from  '@angular/material/snack-bar';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private router:Router,private empService:EmployeeService,private snackbar:MatSnackBar) { }
  emp=new Employee();

  ngOnInit(): void {
  }

  validateAndSubmit(){
    if(this.emp.employeeName == null)
      this.snackbar.open('Name is required','Dismiss',{duration:2000,verticalPosition: 'top',horizontalPosition: 'right',panelClass: ["custom-style"]});
    else if(this.emp.employeeAge == null)
      this.snackbar.open('Age is required','Dismiss',{duration:2000,verticalPosition: 'top',horizontalPosition: 'right',panelClass: ["custom-style"]});
    else if(this.emp.employeeDesignation == null)
      this.snackbar.open('Designation is required','Dismiss',{duration:2000,verticalPosition: 'top',horizontalPosition: 'right',panelClass: ["custom-style"]});
    else if(this.emp.employeeEmailId == null)
      this.snackbar.open('Email id is required','Dismiss',{duration:2000,verticalPosition: 'top',horizontalPosition: 'right',panelClass: ["custom-style"]});
    else if(this.emp.employeeSalary == null)
      this.snackbar.open('Salary is required','Dismiss',{duration:2000,verticalPosition: 'top',horizontalPosition: 'right',panelClass: ["custom-style"]});
    else
      this.submitEmployeeForm();
  }

  submitEmployeeForm()
{
 
  console.log(this.emp);
  this.empService.AddEmployeeRecord(this.emp).subscribe(
  
   data=>{
     console.log('sucessfully inserted');
     this.snackbar.open('Record Added Successfully','Dismiss',{duration:2000});
   }
     
     ,
   error=>{
     
    console.log('error occured')
    this.snackbar.open('Record Insertion Unsucessful !!','Dismiss',{duration:2000});
   } 
   
  )
  this.goToEmployeeList();
}
goToEmployeeList()
{
  window.location.reload();
}

}

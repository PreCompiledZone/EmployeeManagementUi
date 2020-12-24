import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import {MatSnackBar} from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-edit-employee-details',
  templateUrl: './edit-employee-details.component.html',
  styleUrls: ['./edit-employee-details.component.css']
})
export class EditEmployeeDetailsComponent implements OnInit {

  constructor(private router:Router,private empService:EmployeeService,private route:ActivatedRoute,private snackBar:MatSnackBar)
  { }

  emp=new Employee();
  ngOnInit() {
   let id=parseInt(this.route.snapshot.paramMap.get('id'));
   this.empService.fetchEmployeeById(id).subscribe(
 
    data=>{this.emp=data},   
    error=>console.log("exception occured")
   )
  }

  updateEmployeeForm(){

    this.empService.AddEmployeeRecord(this.emp).subscribe(
  
      data=>{
        console.log('sucessfully updated')
        this.snackBar.open('Record Updation Sucessful','Dismiss',{duration:2000});

      },
      error=>{console.log('error occured')
      this.snackBar.open('Error Updating Details','Dismiss',{duration:2000});
    }
     )
   this.goToEmployeeList();
  }

  goToEmployeeList()
{
  this.router.navigate(['employeeList']);
}
}

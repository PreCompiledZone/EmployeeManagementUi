import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import {MatDialog} from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private empService:EmployeeService,private router:Router,private route:ActivatedRoute,private dialog:MatDialog,
    private snackBar:MatSnackBar) { 
 
  }

  public emp:Employee[];
  ngOnInit() {

    
    this.empService.fetchEmployeeList().subscribe(
   
      data=>this.emp=data,
      error=>console.log("exception occured!!")
    ) 
   
    this.reloadData();
  }

  private reloadData()
  {
    this.empService.fetchEmployeeList().subscribe(
   
      data=>this.emp=data,
      error=>console.log("exception occured!!")
    ) 

  }

  goToHome()
  {
    this.router.navigate(['']);
  }

  goToAddEmployee()
  {
    this.dialog.open(AddEmployeeComponent);
  this.reloadData();
  //  this.router.navigate(['addEmployee']);

  }
   
  goToEditEmployee(id:number)
  {
    console.log(id);
   // this.dialog.open(EditEmployeeComponent);
    this.router.navigate(['editEmployee',id]);

  }

  goToViewEmployee(id:number)
  {
    console.log(id);
    this.router.navigate(['viewEmployee',id]);

  }
  deleteEmployee(id:number)
  {
    
    
    this.empService.deleteEmployeeById(id).subscribe(
   
     data=>{ console.log("deleted")
      
     this.snackBar.open('Item Deletion Successful','Dismiss',{duration:2000})
    
    },
     error=>{console.log("error occured")
     this.snackBar.open('Item Deletion UnSuccessful','Dismiss',{duration:2000});
  }
    );
   
    this.router.navigate(['employeeList']);
    
    this.empService.getRefreshNeeded().subscribe(()=>{

      this.reloadData();

    });

    this.reloadData();
    
   
    
  }
   


}

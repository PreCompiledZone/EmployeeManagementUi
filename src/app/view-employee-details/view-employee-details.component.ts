import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-employee-details',
  templateUrl: './view-employee-details.component.html',
  styleUrls: ['./view-employee-details.component.css']
})
export class ViewEmployeeDetailsComponent implements OnInit {

  constructor(private router:Router,private empService:EmployeeService,private route:ActivatedRoute) { }
  emp=new Employee();

  ngOnInit() {

    let id=parseInt(this.route.snapshot.paramMap.get('id'));
   this.empService.fetchEmployeeById(id).subscribe(
 
    data=>{this.emp=data},   
    error=>console.log("exception occured")
   )
  }

  goToEmployeeList()
{
  this.router.navigate(['employeeList']);
}

}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable ,Subject} from 'rxjs';
import { Employee } from './employee';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _url="http://localhost:8085/employee-management-api/v1/employees";
  
  constructor(private _http:HttpClient) { }

  private refreshNeeded=new Subject<void>();

  getRefreshNeeded()
  {
    return this.refreshNeeded;
  }

  fetchEmployeeList():Observable<any>
  {
    return this._http.get(this._url);
  }

  AddEmployeeRecord(emp:Employee):Observable<Employee>
  {
    return this._http.post<Employee>("http://localhost:8085/employee-management-api/v1/employee",emp);
  }

  fetchEmployeeById(id:number):Observable<Employee>{
   
    return this._http.get<Employee>("http://localhost:8085/employee-management-api/v1/"+id);

  }

  deleteEmployeeById(id:number):Observable<void>{
    return this._http.delete<void>("http://localhost:8085/employee-management-api/v1/"+id)
    .pipe(tap(()=>{

      this.refreshNeeded.next();

     })
    );


  }

    

  
  


}

import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient} from '@angular/common/http';
import { Observable ,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  _url="http://localhost:8085/manager";

  loginUserFromRemote(user:User):Observable<any>
  {
    return this._http.get(this._url+"/login?email="+user.email+"&password="+user.password);
  }

  registerFromRemote(user:User):Observable<User>
  {
    return this._http.post<User>(this._url+"/register",user);
  }
  

}

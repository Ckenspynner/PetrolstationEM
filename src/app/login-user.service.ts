import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from './user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  //Declear the baseUrl variable
  private baseUrl="http://localhost:9001/user/login";
  
  //Pass instance of the httpclient to the constructor
  constructor(private httpClient:HttpClient) { }

  //Create login method for login users
  //Pass an object to it, not its obsverable type
   loginUser(userlogin: UserLogin):Observable<object>{
    console.log(userlogin);
    return this.httpClient.post(`${this.baseUrl}`,userlogin);
   }

}

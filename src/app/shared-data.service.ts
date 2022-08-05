import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
/*
  constructor(private http:HttpClient) { }

  //passes the creadentials to the local host
public login(username:string,password:string){
  const headers = new HttpHeaders({Authorization: 'Basic'+btoa(username+":"+password)})
  return this.http.get("http://localhost:9001/",{headers,responseType:'text' as 'json'})
}

  //Gets the Users
  public getUser(username:string,password:string){
    username="1"
    password="2"
    const headers = new HttpHeaders({Authorization: 'Basic'+btoa(username+":"+password)})
    return this.http.get("http://localhost:9001/getUser",{headers})
  }
*/
}

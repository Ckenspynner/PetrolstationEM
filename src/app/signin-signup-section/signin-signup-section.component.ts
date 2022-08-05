import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserService } from '../login-user.service';
import { SharedDataService } from '../shared-data.service';
import { UserLogin } from '../user-login';

@Component({
  selector: 'app-signin-signup-section',
  templateUrl: './signin-signup-section.component.html',
  styleUrls: ['./signin-signup-section.component.css']
})
export class SigninSignupSectionComponent implements OnInit {

  //Creating user login object
  UserLogin:UserLogin =new UserLogin();

  constructor(
    //Injects the service,router
    private router: Router,
    private loginuserService:LoginUserService
  ) { }

  ngOnInit(): void {
  }

  //Login function
  userLogin(){

    this.loginuserService.loginUser(this.UserLogin).subscribe(data=>{
      alert("Login successful");
      this.router.navigate(['/Home']);
    },error=>alert(" Login Unsuccessful"));
   
  }
}

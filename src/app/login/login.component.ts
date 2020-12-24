import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { RegistrationService } from '../registration.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../User';
import {MatSnackBar} from  '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  isValid:boolean;

  user=new User();

  constructor(private registrationService:RegistrationService,private router:Router,private activatedRoute:ActivatedRoute,private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  validateLogin(){
    if(this.user.email == null)
      this.snackbar.open('Email id is required','Dismiss',{duration:2000,verticalPosition: 'top',horizontalPosition: 'right',panelClass: ["custom-style"]});
    else if(this.user.password == null)
      this.snackbar.open('Password is required','Dismiss',{duration:2000});
    else
      this.loginUser();
  }

  loginUser(){
    console.log("### inside login method ###")

    

    this.registrationService.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log(data)
        if(data==true)
        {
          this.router.navigate(['employeeList'])
        }else{
          this.snackbar.open('Login failed','Dismiss',{duration:2000});
        }
      },
      error => {
        console.error("Invalid credentials")
        this.snackbar.open('User Not Exist','Dismiss',{duration:2000});
        }
      )
  }

  registerUser()
  {
    this.router.navigate(['register'])
  }

}

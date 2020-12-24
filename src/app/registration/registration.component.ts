import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User';
import {MatSnackBar} from  '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user=new User();

  constructor(private registrationService:RegistrationService,private router:Router,private activatedRoute:ActivatedRoute,private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  validateRegister()
  {
    if(this.user.email == null)
      this.snackbar.open('Email id is required','Dismiss',{duration:2000,verticalPosition: 'top',horizontalPosition: 'right',panelClass: ["custom-style"]});
    else if(this.user.password == null)
      this.snackbar.open('Password is required','Dismiss',{duration:2000,verticalPosition: 'top',horizontalPosition: 'right',panelClass: ["custom-style"]});
    else if(this.user.firstname == null)
      this.snackbar.open('First name is required','Dismiss',{duration:2000,verticalPosition: 'top',horizontalPosition: 'right',panelClass: ["custom-style"]});
    else if(this.user.lastname == null)
      this.snackbar.open('Last name is required','Dismiss',{duration:2000,verticalPosition: 'top',horizontalPosition: 'right',panelClass: ["custom-style"]});
    else if(this.user.address == null)
      this.snackbar.open('Address is required','Dismiss',{duration:2000,verticalPosition: 'top',horizontalPosition: 'right',panelClass: ["custom-style"]});  
    else if(this.user.city == null)
      this.snackbar.open('City id is required','Dismiss',{duration:2000,verticalPosition: 'top',horizontalPosition: 'right',panelClass: ["custom-style"]});
    else
      this.registerUser();
  }

  registerUser(){
    console.log("### inside register method ###")
    this.registrationService.registerFromRemote(this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['']);
      },
      error => {
        this.snackbar.open('Email id already registered','Dismiss',{duration:2000});
        console.error("Unable to register");

      }
    )
  }


  cancle()
  {
    this.router.navigate([''])
  }
}

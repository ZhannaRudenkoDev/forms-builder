import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {v4 as uuidv4} from 'uuid';
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  success = false;
  errMessage = ''

  userSignUp= new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  constructor(private authService: AuthenticationService, private router: Router) { }

  onSubmit(): void {
    console.log(this.userSignUp.get('password')?.value);
    if(this.userSignUp.valid) {
      this.authService.signUp({
        username: this.userSignUp.get('username')?.value!,
        email: this.userSignUp.get('email')?.value!,
        password: this.userSignUp.get('password')?.value!,
        token: uuidv4(),
      }).subscribe({
        next: () => {
          this.success = true
          this.router.navigate(['/log-in']);
        },
        error: (err) => {
          if (err.error.code == 11000)
            this.errMessage = 'User already exists!! Try something else.'
          else
            this.errMessage = 'Something went wrong!!'
        }
      })
    } else {
      this.errMessage = 'Please enter valid values'
    }
  }

  ngOnInit(): void {
  }

}

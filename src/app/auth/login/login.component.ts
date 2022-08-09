import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {setUser} from "../store/user/user.actions";
import {getUsers} from "../store/user/user.selector";
import {map, tap} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  success = false;
  errMessage = ''

  constructor(private authService: AuthenticationService,
              private router: Router,
              private store$: Store<User>) { }

  userLogin = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  onSubmit(): void {
    if(this.userLogin.valid) {
      this.authService.logIn( this.userLogin.value.email!, this.userLogin.value.password!)
        .subscribe(user => {
        if(user) {
          this.success = true;
          this.store$.dispatch(setUser(user));
          this.router.navigate(['/'])
        } else {
          this.errMessage = "Can't find the user"
        }
      }, error => this.errMessage = 'Something went wrong: ' + error);
    } else {
      this.errMessage = 'Please enter valid values'
    }
  }

  ngOnInit(): void {

  }

}

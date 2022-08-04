import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {UserState} from "../interfaces";
import {Store} from "@ngrx/store";
import {logIn} from "../reducers/user/user.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private store$: Store<UserState>) { }

  onSubmit(): void {
    //console.log(this.user);
    const curUser = {
      email: this.user.email,
      password: this.user.password
    };
    this.store$.dispatch(logIn(curUser));
  }

  ngOnInit(): void {
  }

}

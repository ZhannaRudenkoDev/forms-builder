import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {User} from "../models/user";
import {select, Store} from "@ngrx/store";
import {setUser} from "../reducers/user/user.actions";
import {Observable} from "rxjs";
import {InputInterface} from "../interfaces";
import {createInput} from "../reducers/form/form.selector";
import {getUser, getUsers} from "../reducers/user/user.selector";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userName$: Observable<string>  = this.store$.pipe(select(getUser));

  constructor(private authService: AuthenticationService,
              private store$: Store<User>,
              private http: HttpClient) { }

  logOut() {
    this.authService.logout();
    this.store$.dispatch(setUser({
      username: 'user',
      email: '',
      password: '',
      token: ''
    }));
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.authService.logIn().subscribe(users => {
        const user: User = users.find((user: User) => {
          return user.token === localStorage.getItem('token');
        });
        console.log(user);
        if (user) {
          this.store$.dispatch(setUser(user));
        }
      })
    }

  }


}

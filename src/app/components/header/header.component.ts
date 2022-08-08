import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AuthenticationService} from "../../auth/services/authentication.service";
import {User} from "../../auth/models/user";
import {getUser} from "../../auth/store/user/user.selector";
import {setUser} from "../../auth/store/user/user.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userName$: Observable<string>  = this.store$.pipe(select(getUser));

  constructor(private authService: AuthenticationService,
              private store$: Store<User>,) { }

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

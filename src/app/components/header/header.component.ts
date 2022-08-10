import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable, Subject, takeUntil} from "rxjs";
import {AuthenticationService} from "../../auth/services/authentication.service";
import {User} from "../../auth/models/user";
import {getUser} from "../../auth/store/user/user.selector";
import {setUser} from "../../auth/store/user/user.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public userName$: Observable<string>  = this.store$.pipe(select(getUser));
  destroy$: Subject<boolean> = new Subject<boolean>();


  constructor(private authService: AuthenticationService,
              private store$: Store<User>,) { }

  logOut() {
    this.authService.logout()
    this.store$.dispatch(setUser({
      username: 'user',
      email: '',
      password: '',
      token: ''
    }));
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.authService.logInWithToken()
        .pipe(takeUntil(this.destroy$))
        .subscribe(user => {
        console.log(user);
        if (user) {
          this.store$.dispatch(setUser(user));
        }
      })
    }

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


}

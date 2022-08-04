import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { tap } from 'rxjs/operators';

import {AuthenticationService} from "../services/authentication.service";
import {logIn, logInFailure, logInSuccess} from "../reducers/user/user.actions";
import {map, Observable, switchMap, of} from "rxjs";
import {User} from "../models/user";


@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthenticationService,
    private router: Router,
  ) {}

  logIn$: Observable<any> = createEffect(
    () => this.actions.pipe(
      ofType(logIn),
      map((user: any) => user),
      switchMap(payload => {
        return this.authService.logIn(payload.email, payload.password)
      }),

    ));
}

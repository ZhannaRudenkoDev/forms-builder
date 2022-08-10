import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {Observable, of, switchMap} from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {AuthenticationService} from "../services/authentication.service";
import {lohInFailure, lohInSuccess, setUser} from "./user/user.actions";
import {User} from "../models/user";
import {Action} from "@ngrx/store";
//import { AuthService } from '../services/auth.service';
import * as fromActions from './user/user.actions';


@Injectable()
export class AuthEffects {

  /*checkStatus$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.setUser),
    switchMap(action =>
    this.authService.logIn(action.email!, action.password!).pipe(
      map(() => fromActions.lohInSuccess),
      catchError(() => of(fromActions.lohInFailure))
    ))
  ));*/

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) {}
}

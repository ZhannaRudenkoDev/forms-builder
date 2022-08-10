import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user";

export const setUser = createAction('[User] Set', props<User>());

export const lohInSuccess = createAction('[User] Success');
export const lohInFailure = createAction('[User] Failure');

/*checkStatus$ = createEffect(() =>
     this.actions$.pipe(
      ofType(setUser.type),
      switchMap(action =>
          this.authService.logIn(action.email!, action.password!).pipe(
          map(() => lohInSuccess),
          catchError(() => of(lohInFailure))
        );
      ));
  );
*/



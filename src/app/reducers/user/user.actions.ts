import {createAction, props} from "@ngrx/store";

export const logIn = createAction('[Auth] Login', props<any>());
export const logInSuccess = createAction('[Auth] Login Success', props<any>());
export const logInFailure = createAction('[Auth] Login Failure');


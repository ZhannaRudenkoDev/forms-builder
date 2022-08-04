import {createReducer, on} from "@ngrx/store";
import {UserState} from "../../interfaces";
import {logInFailure, logInSuccess} from "./user.actions";


export const userNode = 'user';

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
}

export const userReducer = createReducer(
  initialState,
  on(
  logInSuccess,
  (state, userPayload) => ({
    ...state,
    isAuthenticated: true,
    user: {
      token: userPayload.token,
      email: userPayload.email
    },
    errorMessage: null
  })
  ),
  on(
    logInFailure,
    (state) => ({
      ...state,
      errorMessage: 'Incorrect email and/or password.'
    })
  ),
)

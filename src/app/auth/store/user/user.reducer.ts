import {createReducer, on} from "@ngrx/store";
import {User} from "../../models/user";
import {lohInFailure, lohInSuccess, setUser} from "./user.actions";


export const userNode = 'user';

const initialState: User = {
  username: 'user',
  email: '',
  password: '',
  token: '',
  success: false
}

export const userReducer = createReducer(
  initialState,
  on(
    setUser,
    (state, user) => ({...state, ...user})
  ),
  on(
    lohInSuccess,
    (state) => ({...state, success: true})
  ),
  on(
    lohInFailure,
    (state) => ({...state, success: false})
  ),
)

import {createReducer, on} from "@ngrx/store";
import {User} from "../../models/user";
import {setUser} from "./user.actions";


export const userNode = 'user';

const initialState: User = {
  username: 'user',
  email: '',
  password: '',
  token: ''
}

export const userReducer = createReducer(
  initialState,
  on(
    setUser,
    (state, user) => ({...state, ...user})
  ),

)

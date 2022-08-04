import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import  {formNode, formReducer} from "./form/form.reducer";
import {FormInterface, UserState} from "../interfaces";
import {userNode, userReducer} from "./user/user.reducer";


export interface State {
  [formNode]: FormInterface;
  [userNode]: UserState;
}

export const reducers: ActionReducerMap<State, any> = {
  [formNode]: formReducer,
  [userNode]: userReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

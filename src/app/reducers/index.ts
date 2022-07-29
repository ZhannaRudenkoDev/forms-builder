import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import  {formNode, formReducer} from "./form/form.reducer";
import {FormInterface} from "../interfaces";



export interface State {
  [formNode]: FormInterface;
}

export const reducers: ActionReducerMap<State, any> = {
  [formNode]: formReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

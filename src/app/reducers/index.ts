import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import  {formNode, formReducer} from "./form/form.reducer";
import {FormInterface, FormStyleInterface} from "../interfaces";
import {FormActions} from "./form/form.actions";



export interface State {
  [formNode]: FormInterface;
}

export const reducers: ActionReducerMap<State, any> = {
  [formNode]: formReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

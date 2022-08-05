import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user";

export const setUser = createAction('[User] Set', props<User>());

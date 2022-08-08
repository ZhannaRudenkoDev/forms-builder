import {Action, createAction, props} from "@ngrx/store";
import {
  ButtonElement,
  CheckBoxElement,
  FormStyle,
  InputElement,
  SelectElement,
  TextAreaElement
} from "../../interfaces";


export const inputAdd = createAction('[FORM].inputADD', props<InputElement>());
export const inputUpdate = createAction('[FORM].inputUpdate', props<InputElement>());
export const inputDelete = createAction('[FORM].inputDelete', props<{id: string}>());


export const selectAdd = createAction('[FORM].selectADD', props<SelectElement>());
export const selectUpdate = createAction('[FORM].selectUpdate', props<SelectElement>());
export const selectAddOption = createAction('[FORM].selectAddOption', props<{
  id: string,
  option: string
}>());
export const selectDelete = createAction('[FORM].selectDelete', props<{id: string}>());


export const textAreaAdd = createAction('[FORM].textAreaADD', props<TextAreaElement>());
export const textAreaUpdate = createAction('[FORM].textAreaUpdate', props<TextAreaElement>());
export const textAreaDelete = createAction('[FORM].textAreaDelete', props<{id: string}>());


export const checkBoxAdd = createAction('[FORM].checkBoxADD', props<CheckBoxElement>());
export const checkBoxUpdate = createAction('[FORM].checkBoxUpdate', props<CheckBoxElement>());
export const checkBoxDelete = createAction('[FORM].checkBoxDelete', props<{id: string}>());


export const buttonAdd = createAction('[FORM].buttonADD', props<ButtonElement>());
export const buttonUpdate = createAction('[FORM].buttonUpdate', props<ButtonElement>());
export const buttonDelete = createAction('[FORM].buttonDelete', props<{id: string}>());


export const formStyleAdd = createAction('[FORM].formStyleADD', props<FormStyle>());






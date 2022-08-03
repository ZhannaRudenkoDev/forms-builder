import {Action, createAction, props} from "@ngrx/store";
import {
  InputInterface,
  SelectInterface,
  TextAreaInterface,
  CheckBoxInterface,
  ButtonInterface, FormStyleInterface
} from "../../interfaces";


export const inputADD = createAction('[FORM].inputADD', props<InputInterface>());
export const inputUpdate = createAction('[FORM].inputUpdate', props<InputInterface>());

export const selectADD = createAction('[FORM].selectADD', props<SelectInterface>());
export const selectUpdate = createAction('[FORM].selectUpdate', props<SelectInterface>());
export const selectAddOption = createAction('[FORM].selectAddOption', props<{
  id: string,
  option: string
}>());

export const textAreaADD = createAction('[FORM].textAreaADD', props<TextAreaInterface>());
export const textAreaUpdate = createAction('[FORM].textAreaUpdate', props<TextAreaInterface>());

export const checkBoxADD = createAction('[FORM].checkBoxADD', props<CheckBoxInterface>());
export const checkBoxUpdate = createAction('[FORM].checkBoxUpdate', props<CheckBoxInterface>());

export const buttonADD = createAction('[FORM].buttonADD', props<ButtonInterface>());
export const buttonUpdate = createAction('[FORM].buttonUpdate', props<ButtonInterface>());

export const formStyleADD = createAction('[FORM].formStyleADD', props<FormStyleInterface>());


// old style code
/*export const enum formActionsType {
  inputADD = '[FORM].inputADD',
  selectADD = '[FORM].selectADD',
  textAreaADD = '[FORM].textAreaADD',
  checkBoxADD = '[FORM].checkBoxADD',
  buttonADD = '[FORM].buttonADD',
  formStyleADD = '[FORM].formStyleADD',
  inputUpdate = '[FORM].inputUpdate',
  textAreaUpdate = '[FORM].textAreaUpdate',
  buttonUpdate = '[FORM].buttonUpdate',
  checkBoxUpdate = '[FORM].checkBoxUpdate',
  selectAddOption = '[FORM].selectAddOption',
  selectUpdate = '[FORM].selectUpdate',
}


export class InputAddAction implements Action {
  readonly type = formActionsType.inputADD;
  constructor(public payload: InputInterface) {}
}

export class InputUpdateAction implements Action {
  readonly type = formActionsType.inputUpdate;
  constructor(public payload: InputInterface) {}
}

export class SelectAddAction implements Action {
  readonly type = formActionsType.selectADD;
  constructor(public payload: SelectInterface) {}
}

export class SelectAddOptionAction implements Action {
  readonly type = formActionsType.selectAddOption;
  constructor(public payload: {
    id: string,
    option: string
  }) {}
}

export class SelectUpdateAction implements Action {
  readonly type = formActionsType.selectUpdate;
  constructor(public payload: SelectInterface) {}
}

export class TextAreaAddAction implements Action {
  readonly type = formActionsType.textAreaADD;
  constructor(public payload: TextAreaInterface) {}
}

export class TextAreaUpdateAction implements Action {
  readonly type = formActionsType.textAreaUpdate;
  constructor(public payload: TextAreaInterface) {}
}

export class CheckBoxAddAction implements Action {
  readonly type = formActionsType.checkBoxADD;
  constructor(public payload: CheckBoxInterface) {}
}

export class CheckBoxUpdateAction implements Action {
  readonly type = formActionsType.checkBoxUpdate;
  constructor(public payload: CheckBoxInterface ) {}
}

export class ButtonAddAction implements Action {
  readonly type = formActionsType.buttonADD;
  constructor(public payload: ButtonInterface) {}
}
export class ButtonUpdateAction implements Action {
  readonly type = formActionsType.buttonUpdate;
  constructor(public payload: ButtonInterface) {}
}

export class FormStyleAddAction implements Action {
  readonly type = formActionsType.formStyleADD;
  constructor(public payload: FormStyleInterface) {}
}

export type FormActions = InputAddAction
  | SelectAddAction
  | TextAreaAddAction
  | CheckBoxAddAction
  | ButtonAddAction
  | FormStyleAddAction
  | InputUpdateAction
  | TextAreaUpdateAction
  | ButtonUpdateAction
  | CheckBoxUpdateAction
  | SelectAddOptionAction
  | SelectUpdateAction;*/



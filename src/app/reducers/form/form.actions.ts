import {Action} from "@ngrx/store";
import {
  InputInterface,
  SelectInterface,
  TextAreaInterface,
  CheckBoxInterface,
  ButtonInterface, FormStyleInterface
} from "../../interfaces";
import {AbstractControl, FormControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from "@angular/forms";

export const enum formActionsType {
  inputADD = '[FORM].inputADD',
  selectADD = '[FORM].selectADD',
  textAreaADD = '[FORM].textAreaADD',
  checkBoxADD = '[FORM].checkBoxADD',
  buttonADD = '[FORM].buttonADD',
  formStyleADD = '[FORM].formStyleADD'
}

export class InputAddAction implements Action {
  readonly type = formActionsType.inputADD;
  constructor(public payload: InputInterface) {}
}

export class SelectAddAction implements Action {
  readonly type = formActionsType.selectADD;
  constructor(public payload: SelectInterface) {}
}

export class TextAreaAddAction implements Action {
  readonly type = formActionsType.textAreaADD;
  constructor(public payload: TextAreaInterface) {}
}

export class CheckBoxAddAction implements Action {
  readonly type = formActionsType.checkBoxADD;
  constructor(public payload: CheckBoxInterface) {}
}

export class ButtonAddAction implements Action {
  readonly type = formActionsType.buttonADD;
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
  | FormStyleAddAction;


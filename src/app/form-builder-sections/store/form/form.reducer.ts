import {
  buttonAdd,
  buttonDelete,
  buttonUpdate,
  checkBoxAdd,
  checkBoxDelete,
  checkBoxUpdate,
  formStyleAdd,
  inputAdd,
  inputDelete,
  inputUpdate,
  selectAdd,
  selectAddOption,
  selectDelete,
  selectUpdate,
  textAreaAdd,
  textAreaDelete,
  textAreaUpdate
} from "./form.actions";
import {createReducer, on} from "@ngrx/store";
import {FormElement} from "../../interfaces";

export const formNode = 'form';

const initialState: FormElement = {
  formGeneral: {
    formLabel: '',
    colorRGB: '',
    borderColorRGB: '',
    backgroundRGB: '',
    borderStyle: '',
  },
  inputs: [],
  selects: [],
  textAreas: [],
  checkBoxes: [],
  buttons: [],
  formList: []
}

export const formReducer = createReducer(
  initialState,
  on(
    inputAdd,
    (state, input) => ({ ...state,
      inputs: [...state.inputs, input],
      formList: [...state.formList, { id: input.id, field: 'Input'}] })
  ),
  on(
    inputDelete,
    (state, {id}) => ({ ...state,
      inputs: [...state.inputs.filter((input) => input.id !== id)],
      formList: [...state.formList.filter((field) => field.id !== id)]})
  ),
  on(
    selectAdd,
    (state, select) => ({ ...state,  selects: [...state.selects, select],
      formList: [...state.formList, { id: select.id, field: 'Select'}]})
  ),
  on(
    selectDelete,
    (state, {id}) => ({ ...state,
      selects: [...state.selects.filter((select) => select.id !== id)],
      formList: [...state.formList.filter((field) => field.id !== id)]})
  ),
  on(
    textAreaAdd,
    (state, textArea) => ({ ...state,  textAreas: [...state.textAreas, textArea],
      formList: [...state.formList, { id: textArea.id, field: 'Textarea'}]})
  ),
  on(
    textAreaDelete,
    (state, {id}) => ({ ...state,
      textAreas: [...state.textAreas.filter((textArea) => textArea.id !== id)],
      formList: [...state.formList.filter((field) => field.id !== id)]})
  ),
  on(
    checkBoxAdd,
    (state, checkBox) => ({ ...state,  checkBoxes: [...state.checkBoxes, checkBox],
      formList: [...state.formList, { id: checkBox.id, field: 'Checkbox'}]})
  ),
  on(
    checkBoxDelete,
    (state, {id}) => ({ ...state,
      checkBoxes: [...state.checkBoxes.filter((checkBox) => checkBox.id !== id)],
      formList: [...state.formList.filter((field) => field.id !== id)]})
  ),
  on(
    buttonAdd,
    (state, button) => ({ ...state,  buttons: [...state.buttons, button],
      formList: [...state.formList, { id: button.id, field: 'Button'}]})
  ),
  on(
    buttonDelete,
    (state, {id}) => ({ ...state,
      buttons: [...state.buttons.filter((button) => button.id !== id)],
      formList: [...state.formList.filter((field) => field.id !== id)]})
  ),
  on(
    formStyleAdd,
    (state, form) => ({ ...state,  formGeneral: {...state.formGeneral, ...form} })
  ),

  on(
    inputUpdate,
    (state, inputUpdate) => ({ ...state,  inputs: [...state.inputs.map(input => {
          return input.id === inputUpdate.id ? inputUpdate : input;
        })] })
  ),
  on(
    textAreaUpdate,
    (state, textAreaUpdate) => ({ ...state,  textAreas: [...state.textAreas.map(textArea => {
          return textArea.id === textAreaUpdate.id ? textAreaUpdate : textArea;
        })] })
  ),
  on(
    buttonUpdate,
    (state, buttonUpdate) => ({ ...state,  buttons: [...state.buttons.map(button => {
          return button.id === buttonUpdate.id ? buttonUpdate : button;
        })] })
  ),
  on(
    checkBoxUpdate,
    (state, checkBoxUpdate) => ({ ...state,  checkBoxes: [...state.checkBoxes.map(checkBox => {
          return checkBox.id === checkBoxUpdate.id ? checkBoxUpdate : checkBox;
        })] })
  ),
  on(
    selectUpdate,
    (state, selectUpdate) => ({ ...state,  selects: [...state.selects.map(select => {
          return select.id === selectUpdate.id ? selectUpdate : select;
        })] })
  ),
  on(
    selectAddOption,
    (state, option) => ({ ...state,  selects: [...state.selects.map(select => {
            return select.id === option.id
              ? {...select, selectAddOption: [...select.selectAddOption, option.option]}
              : select;
          })]}
    )),
);

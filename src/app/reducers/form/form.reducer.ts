import {FormInterface} from "../../interfaces";
import {
  buttonADD, buttonUpdate,
  checkBoxADD, checkBoxUpdate,
  formStyleADD,
  inputADD, inputUpdate,
  selectADD, selectAddOption, selectUpdate,
  textAreaADD, textAreaUpdate
} from "./form.actions";
import {createReducer, on} from "@ngrx/store";

export const formNode = 'form';

const initialState: FormInterface = {
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
  buttons: []
}

export const formReducer = createReducer(
  initialState,
  on(
    inputADD,
    (state, input) => ({ ...state,  inputs: [...state.inputs, input] })
  ),
  on(
    selectADD,
    (state, select) => ({ ...state,  selects: [...state.selects, select] })
  ),
  on(
    textAreaADD,
    (state, textArea) => ({ ...state,  textAreas: [...state.textAreas, textArea] })
  ),
  on(
    checkBoxADD,
    (state, checkBox) => ({ ...state,  checkBoxes: [...state.checkBoxes, checkBox] })
  ),
  on(
    buttonADD,
    (state, button) => ({ ...state,  buttons: [...state.buttons, button] })
  ),
  on(
    formStyleADD,
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


// old style code
/*
export const formReducer = (state = initialState, action: FormActions) => {
  switch(action.type) {
    case formActionsType.inputADD:
      return {
        ...state,
        inputs: [...state.inputs, action.payload]
      }
    case formActionsType.selectADD:
      return {
        ...state,
        selects: [...state.selects, action.payload]
      }
    case formActionsType.textAreaADD:
      return {
        ...state,
        textAreas: [...state.textAreas, action.payload]
      }
    case formActionsType.checkBoxADD:
      return {
        ...state,
        checkBoxes: [...state.checkBoxes, action.payload]
      }
    case formActionsType.buttonADD:
      return {
        ...state,
        buttons: [...state.buttons, action.payload]
      }
    case formActionsType.formStyleADD:
      return {
        ...state,
        formGeneral: {...state.formGeneral, ...action.payload}
      }
    case formActionsType.inputUpdate:
      const updatedInput = state.inputs.map(input => {
        return input.id === action.payload.id ? action.payload : input;
      })
      return {
        ...state,
        inputs: [...updatedInput]
      }
    case formActionsType.textAreaUpdate:
      const updatedTextArea = state.textAreas.map(textArea => {
        return textArea.id === action.payload.id ? action.payload : textArea;
      })
      return {
        ...state,
        textAreas: [...updatedTextArea]
      }
    case formActionsType.buttonUpdate:
      const updatedButton = state.buttons.map(button => {
        return button.id === action.payload.id ? action.payload : button;
      })
      return {
        ...state,
        buttons: [...updatedButton]
      }
    case formActionsType.checkBoxUpdate:
      const updatedCheckBox = state.checkBoxes.map(checkBox => {
        return checkBox.id === action.payload.id ? action.payload : checkBox;
      })
      return {
        ...state,
        checkBoxes: [...updatedCheckBox]
      }
    case formActionsType.selectAddOption:
      const updatedSelectOption = state.selects.map(select => {
        return select.id === action.payload.id
          ? {...select, selectAddOption: [...select.selectAddOption, action.payload.option]}
          : select;
      })
      return {
        ...state,
        selects: [...updatedSelectOption]
      }
    case formActionsType.selectUpdate:
      const updatedSelect = state.selects.map(select => {
        return select.id === action.payload.id ? action.payload : select;
      })
      return {
        ...state,
        selects: [...updatedSelect]
      }
    default:
      return {...state};
  }
}
*/

import {FormInterface} from "../../interfaces";
import {FormActions, formActionsType} from "./form.actions";

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
    default:
      return {...state};
  }
}

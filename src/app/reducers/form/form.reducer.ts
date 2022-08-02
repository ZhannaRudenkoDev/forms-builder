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
    default:
      return {...state};
  }
}

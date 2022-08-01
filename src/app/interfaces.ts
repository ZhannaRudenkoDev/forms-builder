import {FormControl, Validators} from "@angular/forms";

export interface FormStyleInterface {
  formLabel: string,
  colorRGB?: string,
  borderColorRGB?: string,
  backgroundRGB?: string,
  borderStyle?: string,
}


export interface InputInterface {
  id: string,
  inputLabel: string,
  inputPlaceholder: string,
  inputWidth?: number,
  inputHeight?: number,
  inputFontSize?: number,
  inputFontWeight?: number,
  inputColor?: string,
  inputBorderType?: string,
  inputCheckRequired?: boolean
}
export interface SelectInterface {
  id: string,
  selectLabel: string,
  selectWidth?: number,
  selectHeight?: number,
  selectFontSize?: number,
  selectFontWeight?: string,
  selectColor?: string,
  selectBorderType?: string,
  selectCheckRequired?: boolean,
  selectAddOption?: string[],
}

export interface TextAreaInterface {
  id: string,
  textAreaLabel: string,
  textAreaPlaceholder: string,
  textAreaWidth?: number,
  textAreaHeight?: number,
  textAreaFontSize?: number,
  textAreaFontWeight?: number,
  textAreaColor?: string,
  textAreaBorderType?: string,
  textAreaCheckRequired?: boolean
}

export interface CheckBoxInterface {
  id: string,
  checkBoxLabel: string,
  checkBoxFontSize?: number,
  checkBoxFontWeight?: number,
  checkBoxColor?: string,
  checkBoxCheckRequired?: boolean,
}

export interface ButtonInterface {
  id: string,
  buttonLabel: string,
  buttonWidth?: number,
  buttonHeight?: number,
  buttonFontSize?: number,
  buttonFontWeight?: string,
  buttonColor?: string,
  buttonBorderType?: string,
  buttonCheckRequired?: boolean,
}

export interface FormInterface {
  formGeneral: FormStyleInterface,
  inputs: InputInterface[],
  selects: SelectInterface[],
  textAreas: TextAreaInterface[],
  checkBoxes: CheckBoxInterface[],
  buttons: ButtonInterface[]
}

export interface FieldOBJ {
  field: string,
  id: string
}


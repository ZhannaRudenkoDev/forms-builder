export interface User {
  id: number,
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  token?: string,
}

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
  inputWidth?: string,
  inputHeight?: string,
  inputFontSize?: string,
  inputFontWeight?: string,
  inputColor?: string,
  inputBorderType?: string,
  inputCheckRequired?: boolean
}

export interface SelectInterface {
  id: string,
  selectLabel: string,
  selectWidth?: string,
  selectHeight?: string,
  selectFontSize?: string,
  selectFontWeight?: string,
  selectColor?: string,
  selectBorderType?: string,
  selectCheckRequired?: boolean,
  selectAddOption: string[],
}

export interface TextAreaInterface {
  id: string,
  textAreaLabel: string,
  textAreaPlaceholder: string,
  textAreaWidth?: string,
  textAreaHeight?: string,
  textAreaFontSize?: string,
  textAreaFontWeight?: string,
  textAreaColor?: string,
  textAreaBorderType?: string,
  textAreaCheckRequired?: boolean
}

export interface CheckBoxInterface {
  id: string,
  checkBoxLabel: string,
  checkBoxTitle: string,
  checkBoxFontSize?: string,
  checkBoxFontWeight?: string,
  checkBoxColor?: string,
  checkBoxCheckRequired?: boolean,
}

export interface ButtonInterface {
  id: string,
  buttonLabel: string,
  buttonWidth?: string,
  buttonHeight?: string,
  buttonFontSize?: string,
  buttonFontWeight?: string,
  buttonColor?: string,
  buttonColorBackground?: string,
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


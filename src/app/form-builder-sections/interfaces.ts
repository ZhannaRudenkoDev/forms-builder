export interface FormStyle {
  formLabel: string,
  colorRGB?: string,
  borderColorRGB?: string,
  backgroundRGB?: string,
  borderStyle?: string,
}

export interface InputElement {
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

export interface SelectElement {
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

export interface TextAreaElement {
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

export interface CheckBoxElement {
  id: string,
  checkBoxLabel: string,
  checkBoxTitle: string,
  checkBoxFontSize?: string,
  checkBoxFontWeight?: string,
  checkBoxColor?: string,
  checkBoxCheckRequired?: boolean,
}

export interface ButtonElement {
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

export interface FormElement {
  formGeneral: FormStyle,
  inputs: InputElement[],
  selects: SelectElement[],
  textAreas: TextAreaElement[],
  checkBoxes: CheckBoxElement[],
  buttons: ButtonElement[],
  formList: FieldElement[]
}

export interface FieldElement {
  field: string,
  id: string,
  select?: boolean
}


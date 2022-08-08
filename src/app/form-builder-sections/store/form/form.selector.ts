import {createFeatureSelector, createSelector} from "@ngrx/store";
import {formNode} from "./form.reducer";
import {
  ButtonElement,
  CheckBoxElement,
  FieldElement,
  FormElement, FormStyle,
  InputElement,
  SelectElement,
  TextAreaElement
} from "../../interfaces";

export const selectorContFeature = createFeatureSelector<FormElement>(formNode);

export const createInput = createSelector(
  selectorContFeature,
  (state: FormElement) : InputElement[] => state.inputs
)
export const createFormList = createSelector(
  selectorContFeature,
  (state: FormElement) : FieldElement[] => state.formList
)
export const createSelect = createSelector(
  selectorContFeature,
  (state: FormElement) : SelectElement[] => state.selects
)
export const createTextArea = createSelector(
  selectorContFeature,
  (state: FormElement) : TextAreaElement[] => state.textAreas
)
export const createCheckBoxes = createSelector(
  selectorContFeature,
  (state: FormElement) : CheckBoxElement[] => state.checkBoxes
)
export const createButtons = createSelector(
  selectorContFeature,
  (state: FormElement) : ButtonElement[] => state.buttons
)

export const createFormStyle = createSelector(
  selectorContFeature,
  (state: FormElement) : FormStyle => state.formGeneral
)

export const getInputById = (id: string) => createSelector(selectorContFeature,
  (allItems) => {
  if (allItems.inputs) {
    return allItems.inputs.find(item => {
      return item.id === id;
    });
  } else {
    return {
      id: '',
      inputLabel: '',
      inputPlaceholder: '',
      inputWidth: '',
      inputHeight: '',
      inputFontSize: '',
      inputFontWeight: '',
      inputColor: '',
      inputBorderType: '',
      inputCheckRequired: false
    };
  }
});

export const getTextAreaById = (id: string) => createSelector(selectorContFeature,
  (allItems) => {
    if (allItems.textAreas) {
      return allItems.textAreas.find(item => {
        return item.id === id;
      });
    } else {
      return {
        id: '',
        textAreaLabel: '',
        textAreaPlaceholder: '',
        textAreaWidth: '',
        textAreaHeight: '',
        textAreaFontSize: '',
        textAreaFontWeight: '',
        textAreaColor: '',
        textAreaBorderType: '',
        textAreaCheckRequired: false
      };
    }
  });

export const getButtonById = (id: string) => createSelector(selectorContFeature,
  (allItems) => {
    if (allItems.buttons) {
      return allItems.buttons.find(item => {
        return item.id === id;
      });
    } else {
      return {
        id: '',
        buttonLabel: '',
        buttonWidth: '',
        buttonHeight: '',
        buttonFontSize: '',
        buttonFontWeight: '',
        buttonColor: '',
        buttonColorBackground: '',
        buttonBorderType: '',
        buttonCheckRequired: '',
      };
    }
  });

export const getCheckBoxById = (id: string) => createSelector(selectorContFeature,
  (allItems) => {
    if (allItems.checkBoxes) {
      return allItems.checkBoxes.find(item => {
        return item.id === id;
      });
    } else {
      return {
        id: '',
        checkBoxLabel: '',
        checkBoxTitle: '',
        checkBoxFontSize: '',
        checkBoxFontWeight: '',
        checkBoxColor: '',
        checkBoxCheckRequired: '',
      };
    }
  });

export const getSelectById = (id: string) => createSelector(selectorContFeature,
  (allItems) => {
    if (allItems.selects) {
      return allItems.selects.find(item => {
        return item.id === id;
      });
    } else {
      return {
        id: '',
        selectLabel: '',
        selectWidth: '',
        selectHeight: '',
        selectFontSize: '',
        selectFontWeight: '',
        selectColor: '',
        selectBorderType: '',
        selectCheckRequired: false,
        selectAddOption: [],
      };
    }
  });

export const getSelectOptionsById = (id: string) => createSelector(selectorContFeature,
  (allItems) => {
    let item: string[] | undefined;
    if (allItems.selects) {
      allItems.selects.forEach(select => {
        if(select.id === id) {
          item = select.selectAddOption;
        }
      })
      return item!;
    } else {
      return [];
    }
  });


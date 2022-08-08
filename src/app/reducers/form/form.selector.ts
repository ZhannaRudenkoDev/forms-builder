import {createFeatureSelector, createSelector} from "@ngrx/store";
import {formNode} from "./form.reducer";
import {
  ButtonInterface,
  CheckBoxInterface, FieldOBJ,
  FormInterface, FormStyleInterface,
  InputInterface,
  SelectInterface,
  TextAreaInterface
} from "../../interfaces";

export const selectorContFeature = createFeatureSelector<FormInterface>(formNode);

export const createInput = createSelector(
  selectorContFeature,
  (state: FormInterface) : InputInterface[] => state.inputs
)
export const createFormList = createSelector(
  selectorContFeature,
  (state: FormInterface) : FieldOBJ[] => state.formList
)
export const createSelect = createSelector(
  selectorContFeature,
  (state: FormInterface) : SelectInterface[] => state.selects
)
export const createTextArea = createSelector(
  selectorContFeature,
  (state: FormInterface) : TextAreaInterface[] => state.textAreas
)
export const createCheckBoxes = createSelector(
  selectorContFeature,
  (state: FormInterface) : CheckBoxInterface[] => state.checkBoxes
)
export const createButtons = createSelector(
  selectorContFeature,
  (state: FormInterface) : ButtonInterface[] => state.buttons
)

export const createFormStyle = createSelector(
  selectorContFeature,
  (state: FormInterface) : FormStyleInterface => state.formGeneral
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


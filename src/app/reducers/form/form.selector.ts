import {createFeatureSelector, createSelector} from "@ngrx/store";
import {formNode} from "./form.reducer";
import {
  ButtonInterface,
  CheckBoxInterface,
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


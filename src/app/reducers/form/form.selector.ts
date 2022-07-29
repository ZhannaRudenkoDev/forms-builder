import {createFeatureSelector, createSelector} from "@ngrx/store";
import {formNode} from "./form.reducer";
import {
  ButtonInterface,
  CheckBoxInterface,
  FormInterface,
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

/*export const createUpdated = createSelector(
  selectorContFeature,
  (state: CountState) : number => state.updated
)*/

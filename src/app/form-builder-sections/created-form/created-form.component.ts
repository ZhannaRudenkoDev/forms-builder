import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {v4 as uuidv4} from 'uuid';
import {Observable, Subject, takeUntil} from "rxjs";
import {select, Store} from "@ngrx/store";

import {
  createCheckBoxes,
  createFormList, createFormStyle,
  createInput,
  createSelect,
  createTextArea, getButtonById, getCheckBoxById,
  getInputById, getSelectById, getSelectOptionsById, getTextAreaById
} from "../store/form/form.selector";
import {
  buttonAdd,
  checkBoxAdd,
  inputAdd, saveForm,
  selectAdd,
  textAreaAdd,
} from "../store/form/form.actions";
import {
  CheckBoxElement,
  FieldElement,
  FormElement,
  FormStyle,
  InputElement,
  SelectElement,
  TextAreaElement
} from "../interfaces";
import {Fields} from "../enums";


@Component({
  selector: 'app-created-form',
  templateUrl: './created-form.component.html',
  styleUrls: ['./created-form.component.scss'],
})

export class CreatedFormComponent implements OnInit, OnDestroy {

  fields: string[] = [];
  fieldObj: FieldElement[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  /*public inputs$: Observable<InputElement[]> = this.store$.pipe(select(createInput));
  public selects$: Observable<SelectElement[]> = this.store$.pipe(select(createSelect));
  public textArea$: Observable<TextAreaElement[]> = this.store$.pipe(select(createTextArea));
  public checkbox$: Observable<CheckBoxElement[]> = this.store$.pipe(select(createCheckBoxes));*/

  public form$: Observable<FormStyle> = this.store$.pipe(select(createFormStyle),
                                                          takeUntil(this.destroy$));
  public formList$: Observable<FieldElement[]> = this.store$.pipe(select(createFormList),
                                                            takeUntil(this.destroy$));

  displaySaveButton() : boolean {
    let displayFlag: boolean = false;
    this.formList$.subscribe(items => {
      items.length ? displayFlag = true : displayFlag = false;
    })
    return displayFlag;
  }

  saveForm() {
    this.store$.dispatch(saveForm());
    this.store$.subscribe(item => console.log(item));
  }


  public formStyles: FormStyle = {formLabel: "Form label"};

  @Output() fieldStyleEvent = new EventEmitter<FieldElement>();

  getSelectOptions(id: string) {
    return this.store$.pipe(
      select(getSelectOptionsById(id)),
      takeUntil(this.destroy$));
  }

  getInputStyle(id: string, type: string) {
    let inputStyle: string = '';
    let labelText: string = '';
    let placeholderText: string = '';
    let requireStyle: boolean = false;
    this.store$.select(getInputById(id))
      .pipe(takeUntil(this.destroy$))
      .subscribe((item) => {
        inputStyle = 'width: ' + item?.inputWidth + '; height: ' + item?.inputHeight +
                     '; border-style: ' + item?.inputBorderType + '; color: ' + item?.inputColor +
                      '; font-size: ' + item?.inputFontSize + '; font-weight: ' + item?.inputFontWeight;
        labelText = item?.inputLabel + '';
        requireStyle = !!item?.inputCheckRequired;
        placeholderText = item?.inputPlaceholder + '';
      });
    if(type === 'input') {
      return inputStyle;
    } else if(type === 'label') {
      return labelText;
    } else if(type === 'placeholder') {
      return placeholderText;
    } else if(type === 'required') {
      return requireStyle;
    }
    return;
  }

  getSelectStyle(id: string, type: string) {
    let selectStyle: string = '';
    let labelText: string = '';
    let labelStyle: string = '';
    let requireStyle: boolean = false;
    this.store$.select(getSelectById(id))
      .pipe(takeUntil(this.destroy$))
      .subscribe((item) => {
        selectStyle = 'width: ' + item?.selectWidth + '; height: ' + item?.selectHeight +
          '; border-style: ' + item?.selectBorderType + '; background-color: ' + item?.selectColor +
          '; font-size: ' + item?.selectFontSize + '; font-weight: ' + item?.selectFontWeight;
        labelStyle = 'font-size: ' + item?.selectFontSize + '; font-weight: ' + item?.selectFontWeight;
        labelText = item?.selectLabel + '';
        requireStyle = !!item?.selectCheckRequired;
      });
    if(type === 'select') {
      return selectStyle;
    } else if(type === 'label') {
      return labelText;
    } else if(type === 'labelStyle') {
      return labelText;
    } else if(type === 'required') {
      return requireStyle;
    }
    return;
  }

  getTextAreaStyle(id: string, type: string) {
    let textAreaStyle: string = '';
    let labelText: string = '';
    let placeholderText: string = '';
    let requireStyle: boolean = false;
    this.store$.select(getTextAreaById(id))
      .pipe(takeUntil(this.destroy$))
      .subscribe((item) => {
        textAreaStyle = 'width: ' + item?.textAreaWidth + '; height: ' + item?.textAreaHeight +
          '; border-style: ' + item?.textAreaBorderType + '; color: ' + item?.textAreaColor +
          '; font-size: ' + item?.textAreaFontSize + '; font-weight: ' + item?.textAreaFontWeight;
        labelText = item?.textAreaLabel + '';
        requireStyle = !!item?.textAreaCheckRequired;
        placeholderText = item?.textAreaPlaceholder + '';
      });
    if(type === 'textArea') {
      return textAreaStyle;
    } else if(type === 'label') {
      return labelText;
    } else if(type === 'placeholder') {
      return placeholderText;
    } else if(type === 'required') {
      return requireStyle;
    }
    return;
  }

  getButtonStyle(id: string, type: string) {
    let buttonStyle: string = '';
    let labelText: string = '';
    let requireStyle: boolean = false;
    this.store$.select(getButtonById(id))
      .pipe(takeUntil(this.destroy$))
      .subscribe((item) => {
        buttonStyle = 'width: ' + item?.buttonWidth + '; height: ' + item?.buttonHeight +
          '; border-style: ' + item?.buttonBorderType + '; color: ' + item?.buttonColor +
          '; font-size: ' + item?.buttonFontSize + '; font-weight: ' + item?.buttonFontWeight +
           '; background-color: ' + item?.buttonColorBackground;
        labelText = item?.buttonLabel + '';
        requireStyle = !!item?.buttonCheckRequired;
      });
    if(type === 'button') {
      return buttonStyle;
    } else if(type === 'label') {
      return labelText;
    } else if(type === 'required') {
      return requireStyle;
    }
    return;
  }

  getCheckBoxStyle(id: string, type: string) {
    let checkBoxStyle: string = '';
    let labelText: string = '';
    let titleText: string = '';
    let requireStyle: boolean = false;
    this.store$.select(getCheckBoxById(id))
      .pipe(takeUntil(this.destroy$))
      .subscribe((item) => {
        checkBoxStyle = 'color: ' + item?.checkBoxColor +
          '; font-size: ' + item?.checkBoxFontSize + '; font-weight: ' + item?.checkBoxFontWeight;
        labelText = item?.checkBoxLabel + '';
        titleText = item?.checkBoxTitle + '';
        requireStyle = !!item?.checkBoxCheckRequired;
      });
    if(type === 'checkBox') {
      return checkBoxStyle;
    } else if(type === 'label') {
      return labelText;
    } else if(type === 'required') {
      return requireStyle;
    } else if(type === 'title') {
      return titleText;
    }
    return;
  }



  get id() {
    return uuidv4();
  }

  getField(field: FieldElement) {
    this.fieldStyleEvent.emit(field);
    field.select = !field.select;
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      ); } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    const addField: FieldElement = {
      field: event.container.data[event.currentIndex],
      id: event.container.data[event.currentIndex] + uuidv4()
    }


    if(addField.field === Fields.input) {
      this.store$.dispatch(inputAdd({
        id: addField.id,
        inputLabel: 'Input label',
        inputPlaceholder: 'Input placeholder'
      }));
    } else if(addField.field === Fields.select) {
      this.store$.dispatch(selectAdd({
        id: addField.id,
        selectLabel: 'Select',
        selectAddOption: []
      }));
    } else if(addField.field === Fields.textArea) {
      this.store$.dispatch(textAreaAdd({
        id: addField.id,
        textAreaLabel: 'Textarea',
        textAreaPlaceholder: 'Input placeholder'
      }));
    } else if(addField.field === Fields.checkBox) {
      this.store$.dispatch(checkBoxAdd({
        id: addField.id,
        checkBoxLabel: 'label',
        checkBoxTitle: 'CheckBox Title'
      }));
    } else if(addField.field === Fields.button) {
      this.store$.dispatch(buttonAdd({
        id: addField.id,
        buttonLabel: 'Button label',
      }));
    }

  }

  constructor(private store$: Store<FormElement>) { }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    this.form$
      .subscribe(value => {
      this.formStyles = value;
    })
  }

}

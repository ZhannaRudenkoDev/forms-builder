import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {v4 as uuidv4} from 'uuid';
import {Observable} from "rxjs";
import {
  FormInterface,
  InputInterface,
  FieldOBJ,
  SelectInterface,
  TextAreaInterface,
  CheckBoxInterface, ButtonInterface, FormStyleInterface
} from "../interfaces";

import {select, Store} from "@ngrx/store";

import {
  createButtons,
  createCheckBoxes, createFormList, createFormStyle,
  createInput,
  createSelect,
  createTextArea, getButtonById, getCheckBoxById,
  getInputById, getSelectById, getSelectOptionsById, getTextAreaById
} from "../reducers/form/form.selector";
import {
  buttonADD,
  checkBoxADD,
  inputADD,
  selectADD,
  textAreaADD,
} from "../reducers/form/form.actions";


@Component({
  selector: 'app-created-form',
  templateUrl: './created-form.component.html',
  styleUrls: ['./created-form.component.scss']
})

export class CreatedFormComponent implements OnInit {

  fields: string[] = [];
  fieldObj: FieldOBJ[] = [];

  public inputs$: Observable<InputInterface[]> = this.store$.pipe(select(createInput));
  public selects$: Observable<SelectInterface[]> = this.store$.pipe(select(createSelect));
  public textArea$: Observable<TextAreaInterface[]> = this.store$.pipe(select(createTextArea));
  public checkbox$: Observable<CheckBoxInterface[]> = this.store$.pipe(select(createCheckBoxes));
  public form$: Observable<FormStyleInterface> = this.store$.pipe(select(createFormStyle));
  public formList$: Observable<FieldOBJ[]> = this.store$.pipe(select(createFormList));


  public formStyles: FormStyleInterface = {formLabel: "Form label"};

  @Output() fieldStyleEvent = new EventEmitter<FieldOBJ>();

  getSelectOptions(id: string) {
    return this.store$.pipe(select(getSelectOptionsById(id)));
  }

  getInputStyle(id: string, type: string) {
    let inputStyle: string = '';
    let labelText: string = '';
    let placeholderText: string = '';
    let requireStyle: boolean = false;
    this.store$.select(getInputById(id))
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

  getField(field: FieldOBJ) {
    this.fieldStyleEvent.emit(field);
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
    const addField: FieldOBJ = {
      field: event.container.data[event.currentIndex],
      id: event.container.data[event.currentIndex] + uuidv4()
    }


    if(addField.field === 'Input') {
      this.store$.dispatch(inputADD({
        id: addField.id,
        inputLabel: 'Input label',
        inputPlaceholder: 'Input placeholder'
      }));
      this.inputs$.subscribe(item => {
        console.log(item);
      })
    } else if(addField.field === 'Select') {
      this.store$.dispatch(selectADD({
        id: addField.id,
        selectLabel: 'Select',
        selectAddOption: []
      }));
    } else if(addField.field === 'Textarea') {
      this.store$.dispatch(textAreaADD({
        id: addField.id,
        textAreaLabel: 'Textarea',
        textAreaPlaceholder: 'Input placeholder'
      }));
    } else if(addField.field === 'Checkbox') {
      this.store$.dispatch(checkBoxADD({
        id: addField.id,
        checkBoxLabel: 'label',
        checkBoxTitle: 'CheckBox Title'
      }));
    } else if(addField.field === 'Button') {
      this.store$.dispatch(buttonADD({
        id: addField.id,
        buttonLabel: 'Button label',
      }));
    }

  }

  constructor(private store$: Store<FormInterface>) { }

  ngOnInit(): void {
    this.form$.subscribe(value => {
      this.formStyles = value;
    })
  }

}

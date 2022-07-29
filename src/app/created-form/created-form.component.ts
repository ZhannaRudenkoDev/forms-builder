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
  CheckBoxInterface, ButtonInterface
} from "../interfaces";

import {select, Store} from "@ngrx/store";

import {
  createButtons,
  createCheckBoxes,
  createInput,
  createSelect,
  createTextArea
} from "../reducers/form/form.selector";
import {
  ButtonAddAction,
  CheckBoxAddAction,
  InputAddAction,
  SelectAddAction,
  TextAreaAddAction
} from "../reducers/form/form.actions";


@Component({
  selector: 'app-created-form',
  templateUrl: './created-form.component.html',
  styleUrls: ['./created-form.component.scss']
})

export class CreatedFormComponent implements OnInit {

  fields: string[] = [];
  fieldObj: FieldOBJ[] = []

  public inputs$: Observable<InputInterface[]> = this.store$.pipe(select(createInput));
  public selects$: Observable<SelectInterface[]> = this.store$.pipe(select(createSelect));
  public textArea$: Observable<TextAreaInterface[]> = this.store$.pipe(select(createTextArea));
  public checkbox$: Observable<CheckBoxInterface[]> = this.store$.pipe(select(createCheckBoxes));
  public button$: Observable<ButtonInterface[]> = this.store$.pipe(select(createButtons));

  @Output() fieldStyleEvent = new EventEmitter<FieldOBJ>();

  getInputStyle() {
    return 'border: 1px solid pink';
  }

  get id() {
    return uuidv4();
  }

  getField(field: FieldOBJ) {
    this.fieldStyleEvent.emit(field);
    if(field.field === 'Input') {
      this.store$.dispatch(new InputAddAction({
        id: field.id,
        inputLabel: '',
        inputPlaceholder: ''
      }));
    } else if(field.field === 'Select') {
      this.store$.dispatch(new SelectAddAction({
        id: field.id,
        selectLabel: '',
      }));
    } else if(field.field === 'Textarea') {
      this.store$.dispatch(new TextAreaAddAction({
        id: field.id,
        textAreaLabel: '',
        textAreaPlaceholder: ''
      }));
    } else if(field.field === 'Checkbox') {
      this.store$.dispatch(new CheckBoxAddAction({
        id: field.id,
        checkBoxLabel: '',
      }));
    } else if(field.field === 'Button') {
      this.store$.dispatch(new ButtonAddAction({
        id: field.id,
        buttonLabel: '',
      }));
    }
    this.inputs$.subscribe(value => {
      console.log(value);
    })
    this.selects$.subscribe(value => {
      console.log(value);
    })
    this.textArea$.subscribe(value => {
      console.log(value);
    })
    this.checkbox$.subscribe(value => {
      console.log(value);
    })
    this.button$.subscribe(value => {
      console.log(value);
    })

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
    this.fieldObj.push({
      field: event.container.data[event.currentIndex],
      id: uuidv4()
    })
  }

  constructor(private store$: Store<FormInterface>) { }

  ngOnInit(): void {

  }

}

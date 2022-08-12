import {ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {Store} from "@ngrx/store";

import {
  formStyleAdd,
} from "../store/form/form.actions";
import {FieldElement, FormElement} from "../interfaces";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-style-from',
  templateUrl: './style-from.component.html',
  styleUrls: ['./style-from.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StyleFromComponent),
      multi: true,
    },
  ],
})
export class StyleFromComponent implements OnInit, OnDestroy, ControlValueAccessor {

  items = ['Form General Styles', 'Field Styles'];
  expandedIndex = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  public formLabelControl: FormControl = new FormControl();

  writeValue(value: any) {
    if(value) {
      this.formLabelControl.setValue(value);
    }
  }

  registerOnChange(fn: Function) {
    this.formLabelControl.valueChanges.subscribe((val) => fn(val));
  }

  registerOnTouched(fn: Function) {
    this.formLabelControl.valueChanges.subscribe((val) => fn(val));
  }


  @Input() field = '';

  @Input() fieldOBJ: FieldElement = {
    field: '',
    id: ''
  };


  formGeneral= new FormGroup({
    'colorRGB': new FormControl(''),
    'backgroundRGB': new FormControl(''),
    'borderStyle': new FormControl(''),
    'borderColorRGB': new FormControl(''),
  })

  applyFormStyles() {
    console.log(this.formLabelControl.value);
    if(this.formGeneral.valid && this.formLabelControl.valid) {
      this.store$.dispatch(formStyleAdd({
        formLabel: this.formLabelControl.value!,
        colorRGB:  this.formGeneral.get('colorRGB')?.value!,
        backgroundRGB: this.formGeneral.get('backgroundRGB')?.value!,
        borderStyle: this.formGeneral.get('borderStyle')?.value!,
        borderColorRGB: this.formGeneral.get('borderColorRGB')?.value!,
      }));
    }
  }



  constructor(private store$: Store<FormElement>,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  get formLabel() {
    return this.formGeneral.get('formLabel');
  }

  get colorRGB() {
    return this.formGeneral.get('colorRGB');
  }
  get backgroundRGB() {
    return this.formGeneral.get('backgroundRGB');
  }

  get borderColorRGB() {
    return this.formGeneral.get('borderColorRGB');
  }

}

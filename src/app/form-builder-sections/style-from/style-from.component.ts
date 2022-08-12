import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StyleFromComponent implements OnInit, OnDestroy {

  items = ['Form General Styles', 'Field Styles'];
  expandedIndex = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  @Input() field = '';

  @Input() fieldOBJ: FieldElement = {
    field: '',
    id: ''
  };


  formGeneral= new FormGroup({
    'formLabel': new FormControl('Form label', [Validators.required, Validators.minLength(3)]),
    'colorRGB': new FormControl(''),
    'backgroundRGB': new FormControl(''),
    'borderStyle': new FormControl(''),
    'borderColorRGB': new FormControl(''),
  })

  applyFormStyles() {
    console.log(this.formGeneral.get('colorRGB')?.value!);
    if(this.formGeneral.valid) {
      this.store$.dispatch(formStyleAdd({
        formLabel: this.formGeneral.get('formLabel')?.value!,
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

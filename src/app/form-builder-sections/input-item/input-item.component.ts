import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FieldElement, FormElement} from "../interfaces";
import {FormItemStyle} from "../abstract/field.abstract";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {inputDelete, inputUpdate} from "../store/form/form.actions";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";
import {Subject, takeUntil} from "rxjs";
import {ValidatePxFont, ValidatePxHeight, ValidatePxWidth} from "../validate.func";

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss']
})
export class InputItemComponent extends FormItemStyle implements OnInit, OnDestroy {

  @Input() fieldOBJ: FieldElement = {
    field: '',
    id: ''
  };

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(protected override store$: Store<FormElement>,
              protected override dialog: MatDialog) {
    super(store$, dialog);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  protected formControl: FormGroup = new FormGroup({
    'inputLabel': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'inputPlaceholder': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'inputWidth': new FormControl('', ValidatePxWidth),
    'inputHeight': new FormControl('', ValidatePxHeight),
    'inputFontSize': new FormControl('', ValidatePxFont),
    'inputFontWeight': new FormControl(''),
    'inputColor': new FormControl(''),
    'inputBorderType': new FormControl(''),
    'inputCheckRequired': new FormControl(''),
  });

  protected applyFieldStyles(): void {
    if(this.formControl.valid) {
      this.store$.dispatch(inputUpdate({
        id: this.fieldOBJ.id,
        inputLabel: this.formControl.get('inputLabel')?.value!,
        inputPlaceholder: this.formControl.get('inputPlaceholder')?.value!,
        inputWidth: this.formControl.get('inputWidth')?.value!,
        inputHeight: this.formControl.get('inputHeight')?.value!,
        inputFontSize: this.formControl.get('inputFontSize')?.value!,
        inputFontWeight: this.formControl.get('inputFontSize')?.value!,
        inputColor: this.formControl.get('inputColor')?.value!,
        inputBorderType: this.formControl.get('inputBorderType')?.value!,
        inputCheckRequired: !!this.formControl.get('inputCheckRequired')?.value!
      }));
    }
  }

  protected deleteField(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(DeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        data => {
          if(data) {
            this.store$.dispatch(inputDelete({
              id: this.fieldOBJ.id
            }));
            this.formControl.reset();
          }
        }
      );
  }

  get inputLabel() {
    return this.formControl.get('inputLabel');
  }
  get inputPlaceholder() {
    return this.formControl.get('inputPlaceholder');
  }
  get inputWidth() {
    return this.formControl.get('inputWidth');
  }
  get inputHeight() {
    return this.formControl.get('inputHeight');
  }
  get inputFontSize() {
    return this.formControl.get('inputFontSize');
  }
  get inputColor() {
    return this.formControl.get('inputColor');
  }

}

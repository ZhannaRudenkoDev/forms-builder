import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FieldElement, FormElement} from "../interfaces";
import {Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormItemStyle} from "../abstract/field.abstract";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";
import {checkBoxDelete, checkBoxUpdate} from "../store/form/form.actions";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidatePxFont} from "../validate.func";

@Component({
  selector: 'app-checkbox-item',
  templateUrl: './checkbox-item.component.html',
  styleUrls: ['./checkbox-item.component.scss']
})
export class CheckboxItemComponent extends FormItemStyle implements OnInit, OnDestroy {

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
    'checkBoxLabel': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'checkBoxFontSize': new FormControl('', ValidatePxFont),
    'checkBoxFontWeight': new FormControl(''),
    'checkBoxColor': new FormControl(''),
    'checkBoxCheckRequired': new FormControl(''),
    'checkBoxTitle': new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  get checkBoxLabel() {
    return this.formControl.get('checkBoxLabel');
  }
  get checkBoxTitle() {
    return this.formControl.get('checkBoxTitle');
  }
  get checkBoxFontSize() {
    return this.formControl.get('checkBoxFontSize');
  }
  get checkBoxColor() {
    return this.formControl.get('checkBoxColor');
  }

  protected applyFieldStyles(): void {
    if(this.formControl.valid) {
      this.store$.dispatch(checkBoxUpdate({
        id: this.fieldOBJ.id,
        checkBoxLabel: this.formControl.get('checkBoxLabel')?.value!,
        checkBoxFontSize: this.formControl.get('checkBoxFontSize')?.value!,
        checkBoxFontWeight: this.formControl.get('checkBoxFontWeight')?.value!,
        checkBoxColor: this.formControl.get('checkBoxColor')?.value!,
        checkBoxCheckRequired: !!this.formControl.get('checkBoxCheckRequired')?.value!,
        checkBoxTitle: this.formControl.get('checkBoxTitle')?.value!
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
            this.store$.dispatch(checkBoxDelete({
              id: this.fieldOBJ.id
            }));
            this.formControl.reset();
          }
        }
      );
  }

}

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FieldElement, FormElement} from "../interfaces";
import {Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormItemStyle} from "../abstract/field.abstract";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";
import {buttonDelete, buttonUpdate} from "../store/form/form.actions";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidatePxFont, ValidatePxHeight, ValidatePxWidth} from "../validate.func";

@Component({
  selector: 'app-button-item',
  templateUrl: './button-item.component.html',
  styleUrls: ['./button-item.component.scss']
})
export class ButtonItemComponent extends FormItemStyle implements OnInit, OnDestroy {

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
    'buttonLabel': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'buttonWidth': new FormControl('', ValidatePxWidth),
    'buttonHeight': new FormControl('', ValidatePxHeight),
    'buttonFontSize': new FormControl('', ValidatePxFont),
    'buttonFontWeight': new FormControl(''),
    'buttonColor': new FormControl(''),
    'buttonColorBackground': new FormControl(''),
    'buttonBorderType': new FormControl(''),
    'buttonCheckRequired': new FormControl(''),
  });

  protected applyFieldStyles(): void {
    if(this.formControl.valid) {
      this.store$.dispatch(buttonUpdate({
        id: this.fieldOBJ.id,
        buttonLabel: this.formControl.get('buttonLabel')?.value!,
        buttonWidth: this.formControl.get('buttonWidth')?.value!,
        buttonHeight: this.formControl.get('buttonHeight')?.value!,
        buttonFontSize: this.formControl.get('buttonFontSize')?.value!,
        buttonFontWeight: this.formControl.get('buttonFontWeight')?.value!,
        buttonColor: this.formControl.get('buttonColor')?.value!,
        buttonColorBackground: this.formControl.get('buttonColorBackground')?.value!,
        buttonBorderType: this.formControl.get('buttonBorderType')?.value!,
        buttonCheckRequired: !!this.formControl.get('buttonCheckRequired')?.value!
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
            this.store$.dispatch(buttonDelete({
              id: this.fieldOBJ.id
            }));
            this.formControl.reset();
          }
        }
      );
  }

  get buttonLabel() {
    return this.formControl.get('buttonLabel');
  }
  get buttonWidth() {
    return this.formControl.get('buttonWidth');
  }
  get buttonHeight() {
    return this.formControl.get('buttonHeight');
  }
  get buttonFontSize() {
    return this.formControl.get('buttonFontSize');
  }
  get buttonColor() {
    return this.formControl.get('buttonColor');
  }
  get buttonColorBackground() {
    return this.formControl.get('buttonColorBackground');
  }

}

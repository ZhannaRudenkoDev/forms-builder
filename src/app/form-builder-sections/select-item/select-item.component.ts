import { Component, Input, OnDestroy } from '@angular/core';
import { FieldElement, FormElement } from '../interfaces';
import { Subject, takeUntil } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormItemStyle } from '../abstract/field.abstract';
import {
  selectAddOption,
  selectDelete,
  selectUpdate,
} from '../store/form/form.actions';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { getSelectOptionsById } from '../store/form/form.selector';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ValidatePxFont,
  ValidatePxHeight,
  ValidatePxWidth,
} from '../validate.func';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.scss'],
})
export class SelectItemComponent extends FormItemStyle implements OnDestroy {
  @Input() fieldOBJ: FieldElement = {
    field: '',
    id: '',
  };

  destroy$: Subject<boolean> = new Subject<boolean>();

  selectOptions: string[] = [];

  constructor(
    protected override store$: Store<FormElement>,
    protected override dialog: MatDialog
  ) {
    super(store$, dialog);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  addOptionSelect() {
    if (this.formControl.get('selectAddOption')?.valid) {
      this.store$.dispatch(
        selectAddOption({
          id: this.fieldOBJ.id,
          option: this.formControl.get('selectAddOption')?.value!,
        })
      );
    }
  }

  protected formControl: FormGroup = new FormGroup({
    selectLabel: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    selectWidth: new FormControl('', ValidatePxWidth),
    selectHeight: new FormControl('', ValidatePxHeight),
    selectFontSize: new FormControl('', ValidatePxFont),
    selectFontWeight: new FormControl(''),
    selectColor: new FormControl(''),
    selectBorderType: new FormControl(''),
    selectCheckRequired: new FormControl(''),
    selectAddOption: new FormControl('', Validators.minLength(3)),
  });

  protected applyFieldStyles(): void {
    if (this.formControl.valid) {
      this.store$
        .pipe(
          select(getSelectOptionsById(this.fieldOBJ.id)),
          takeUntil(this.destroy$)
        )
        .subscribe(items => {
          this.selectOptions = items;
        });
      this.store$.dispatch(
        selectUpdate({
          id: this.fieldOBJ.id,
          selectLabel: this.formControl.get('selectLabel')?.value!,
          selectWidth: this.formControl.get('selectWidth')?.value!,
          selectHeight: this.formControl.get('selectHeight')?.value!,
          selectFontSize: this.formControl.get('selectFontSize')?.value!,
          selectFontWeight: this.formControl.get('selectFontWeight')?.value!,
          selectColor: this.formControl.get('selectColor')?.value!,
          selectBorderType: this.formControl.get('selectBorderType')?.value!,
          selectCheckRequired: !!this.formControl.get('selectCheckRequired')
            ?.value!,
          selectAddOption: this.selectOptions!,
        })
      );
    }
  }

  protected deleteField(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(DeleteDialogComponent, dialogConfig);
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if (data) {
          this.store$.dispatch(
            selectDelete({
              id: this.fieldOBJ.id,
            })
          );
          this.formControl.reset();
        }
      });
  }

  get selectLabel() {
    return this.formControl.get('selectLabel');
  }
  get selectAddOption() {
    return this.formControl.get('selectAddOption');
  }
  get selectWidth() {
    return this.formControl.get('selectWidth');
  }
  get selectHeight() {
    return this.formControl.get('selectHeight');
  }
  get selectFontSize() {
    return this.formControl.get('selectFontSize');
  }
  get selectColor() {
    return this.formControl.get('selectColor');
  }
}

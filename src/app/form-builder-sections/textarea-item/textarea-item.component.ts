import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FieldElement, FormElement} from "../interfaces";
import {FormItemStyle} from "../abstract/field.abstract";
import {Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {textAreaDelete, textAreaUpdate} from "../store/form/form.actions";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidatePxFont, ValidatePxHeight, ValidatePxWidth} from "../validate.func";

@Component({
  selector: 'app-textarea-item',
  templateUrl: './textarea-item.component.html',
  styleUrls: ['./textarea-item.component.scss']
})
export class TextareaItemComponent extends FormItemStyle implements OnInit, OnDestroy {

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

  protected formControl: FormGroup =  new FormGroup({
    'textAreaLabel': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'textAreaPlaceholder': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'textAreaWidth': new FormControl('', ValidatePxWidth),
    'textAreaHeight': new FormControl('', ValidatePxHeight),
    'textAreaFontSize': new FormControl('', ValidatePxFont),
    'textAreaFontWeight': new FormControl(''),
    'textAreaColor': new FormControl(''),
    'textAreaBorderType': new FormControl(''),
    'textAreaCheckRequired': new FormControl(''),
  });

  protected applyFieldStyles(): void {
    if(this.formControl.valid) {
      this.store$.dispatch(textAreaUpdate({
        id: this.fieldOBJ.id,
        textAreaLabel: this.formControl.get('textAreaLabel')?.value!,
        textAreaPlaceholder: this.formControl.get('textAreaPlaceholder')?.value!,
        textAreaWidth: this.formControl.get('textAreaWidth')?.value!,
        textAreaHeight: this.formControl.get('textAreaHeight')?.value!,
        textAreaFontSize: this.formControl.get('textAreaFontSize')?.value!,
        textAreaFontWeight: this.formControl.get('textAreaFontWeight')?.value!,
        textAreaColor:  this.formControl.get('textAreaColor')?.value!,
        textAreaBorderType: this.formControl.get('textAreaBorderType')?.value!,
        textAreaCheckRequired: !!this.formControl.get('textAreaCheckRequired')?.value!
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
            this.store$.dispatch(textAreaDelete({
              id: this.fieldOBJ.id
            }));
            this.formControl.reset();
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  get textAreaLabel() {
    return this.formControl.get('textAreaLabel');
  }
  get textAreaPlaceholder() {
    return this.formControl.get('textAreaPlaceholder');
  }
  get textAreaWidth() {
    return this.formControl.get('textAreaWidth');
  }
  get textAreaHeight() {
    return this.formControl.get('textAreaHeight');
  }
  get textAreaFontSize() {
    return this.formControl.get('textAreaFontSize');
  }
  get textAreaColor() {
    return this.formControl.get('textAreaColor');
  }

}

import {Component, OnInit, Input, forwardRef} from '@angular/core';
import {FormControl, FormGroup,NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {createFormStyle, createInput, getSelectOptionsById} from "../store/form/form.selector";

import {
  buttonDelete,
  buttonUpdate, checkBoxDelete,
  checkBoxUpdate,
  formStyleAdd, inputDelete,
  inputUpdate,
  selectAddOption, selectDelete,
  selectUpdate, textAreaDelete,
  textAreaUpdate,
} from "../store/form/form.actions";
import {FieldElement, FormElement, FormStyle, InputElement} from "../interfaces";

@Component({
  selector: 'app-style-from',
  templateUrl: './style-from.component.html',
  styleUrls: ['./style-from.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => StyleFromComponent),
    }
  ]
})
export class StyleFromComponent implements OnInit {

  items = ['Form General Styles', 'Field Styles'];
  public form$: Observable<FormStyle> = this.store$.pipe(select(createFormStyle));
  public inputs$: Observable<InputElement[]> = this.store$.pipe(select(createInput));


  expandedIndex = 0;


  @Input() field = '';

  @Input() fieldOBJ: FieldElement = {
    field: '',
    id: ''
  };

  addOptionSelect() {
    if(this.selectControl.get('selectAddOption')?.valid) {
      this.store$.dispatch(selectAddOption({
        id: this.fieldOBJ.id,
        option: this.selectControl.get('selectAddOption')?.value!
      }))
    }

  }

  applyInputStyles() {
    if(this.inputControl.valid) {
      this.store$.dispatch(inputUpdate({
        id: this.fieldOBJ.id,
        inputLabel: this.inputControl.get('inputLabel')?.value!,
        inputPlaceholder: this.inputControl.get('inputPlaceholder')?.value!,
        inputWidth: this.inputControl.get('inputWidth')?.value! + 'px',
        inputHeight: this.inputControl.get('inputHeight')?.value! + 'px',
        inputFontSize: this.inputControl.get('inputFontSize')?.value! + 'px',
        inputFontWeight: this.inputControl.get('inputFontSize')?.value!,
        inputColor: this.inputControl.get('inputColor')?.value!,
        inputBorderType: this.inputControl.get('inputBorderType')?.value!,
        inputCheckRequired: !!this.inputControl.get('inputCheckRequired')?.value!
      }));
      }
  }

  applyTextAreaStyles() {
    if(this.textAreaControl.valid) {
      this.store$.dispatch(textAreaUpdate({
        id: this.fieldOBJ.id,
        textAreaLabel: this.textAreaControl.get('textAreaLabel')?.value!,
        textAreaPlaceholder: this.textAreaControl.get('textAreaPlaceholder')?.value!,
        textAreaWidth: this.textAreaControl.get('textAreaWidth')?.value! + 'px',
        textAreaHeight: this.textAreaControl.get('textAreaHeight')?.value! + 'px',
        textAreaFontSize: this.textAreaControl.get('textAreaFontSize')?.value! + 'px',
        textAreaFontWeight: this.textAreaControl.get('textAreaFontWeight')?.value!,
        textAreaColor:  this.textAreaControl.get('textAreaColor')?.value!,
        textAreaBorderType: this.textAreaControl.get('textAreaBorderType')?.value!,
        textAreaCheckRequired: !!this.textAreaControl.get('textAreaCheckRequired')?.value!
      }));
    }
  }

  deleteInput() {
    this.store$.dispatch(inputDelete({
      id: this.fieldOBJ.id
    }));
  }
  deleteSelect() {
    this.store$.dispatch(selectDelete({
      id: this.fieldOBJ.id
    }));
  }
  deleteButton() {
    this.store$.dispatch(buttonDelete({
      id: this.fieldOBJ.id
    }));
  }
  deleteTextArea() {
    this.store$.dispatch(textAreaDelete({
      id: this.fieldOBJ.id
    }));
  }

  deleteCheckBox() {
    this.store$.dispatch(checkBoxDelete({
      id: this.fieldOBJ.id
    }));
  }

  selectOptions: string[] = [];

  applySelectStyles() {
    if(this.selectControl.valid) {
      this.store$.pipe(select(getSelectOptionsById(this.fieldOBJ.id))).subscribe(items => {
       this.selectOptions = items;
      })
      this.store$.dispatch(selectUpdate({
        id: this.fieldOBJ.id,
        selectLabel: this.selectControl.get('selectLabel')?.value!,
        selectWidth: this.selectControl.get('selectWidth')?.value! + 'px',
        selectHeight: this.selectControl.get('selectHeight')?.value! + 'px',
        selectFontSize: this.selectControl.get('selectFontSize')?.value! + 'px',
        selectFontWeight: this.selectControl.get('selectFontWeight')?.value!,
        selectColor: this.selectControl.get('selectColor')?.value!,
        selectBorderType: this.selectControl.get('selectBorderType')?.value!,
        selectCheckRequired: !!this.selectControl.get('selectCheckRequired')?.value!,
        selectAddOption: this.selectOptions!
      }));
    }
  }

  applyButtonStyles() {
    if(this.buttonControl.valid) {
      this.store$.dispatch(buttonUpdate({
        id: this.fieldOBJ.id,
        buttonLabel: this.buttonControl.get('buttonLabel')?.value!,
        buttonWidth: this.buttonControl.get('buttonWidth')?.value! + 'px',
        buttonHeight: this.buttonControl.get('buttonHeight')?.value! + 'px',
        buttonFontSize: this.buttonControl.get('buttonFontSize')?.value! + 'px',
        buttonFontWeight: this.buttonControl.get('buttonFontWeight')?.value!,
        buttonColor: this.buttonControl.get('buttonColor')?.value!,
        buttonColorBackground: this.buttonControl.get('buttonColorBackground')?.value!,
        buttonBorderType: this.buttonControl.get('buttonBorderType')?.value!,
        buttonCheckRequired: !!this.buttonControl.get('buttonCheckRequired')?.value!
      }));
    }
  }

  applyCheckBoxStyles() {
    if(this.checkBoxControl.valid) {
      this.store$.dispatch(checkBoxUpdate({
        id: this.fieldOBJ.id,
        checkBoxLabel: this.checkBoxControl.get('checkBoxLabel')?.value!,
        checkBoxFontSize: this.checkBoxControl.get('checkBoxFontSize')?.value! + 'px',
        checkBoxFontWeight: this.checkBoxControl.get('checkBoxFontWeight')?.value!,
        checkBoxColor: this.checkBoxControl.get('checkBoxColor')?.value!,
        checkBoxCheckRequired: !!this.checkBoxControl.get('checkBoxCheckRequired')?.value!,
        checkBoxTitle: this.checkBoxControl.get('checkBoxTitle')?.value!
      }));
    }
  }


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
    this.form$.subscribe(value => {
      console.log(value);
    })
  }

  inputControl = new FormGroup({
    'inputLabel': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'inputPlaceholder': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'inputWidth': new FormControl('', [Validators.min(10), Validators.max(390)]),
    'inputHeight': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'inputFontSize': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'inputFontWeight': new FormControl(''),
    'inputColor': new FormControl(''),
    'inputBorderType': new FormControl(''),
    'inputCheckRequired': new FormControl(''),
  });

  textAreaControl = new FormGroup({
    'textAreaLabel': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'textAreaPlaceholder': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'textAreaWidth': new FormControl('', [Validators.min(10), Validators.max(390)]),
    'textAreaHeight': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'textAreaFontSize': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'textAreaFontWeight': new FormControl(''),
    'textAreaColor': new FormControl(''),
    'textAreaBorderType': new FormControl(''),
    'textAreaCheckRequired': new FormControl(''),
  });


  selectControl = new FormGroup({
    'selectLabel': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'selectWidth': new FormControl('', [Validators.min(10), Validators.max(390)]),
    'selectHeight': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'selectFontSize': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'selectFontWeight': new FormControl(''),
    'selectColor': new FormControl(''),
    'selectBorderType': new FormControl(''),
    'selectCheckRequired': new FormControl(''),
    'selectAddOption': new FormControl('', Validators.minLength(3)),
  });

  buttonControl = new FormGroup({
    'buttonLabel': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'buttonWidth': new FormControl('', [Validators.min(10), Validators.max(390)]),
    'buttonHeight': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'buttonFontSize': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'buttonFontWeight': new FormControl(''),
    'buttonColor': new FormControl(''),
    'buttonColorBackground': new FormControl(''),
    'buttonBorderType': new FormControl(''),
    'buttonCheckRequired': new FormControl(''),
  });

  checkBoxControl = new FormGroup({
    'checkBoxLabel': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'checkBoxFontSize': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'checkBoxFontWeight': new FormControl(''),
    'checkBoxColor': new FormControl(''),
    'checkBoxCheckRequired': new FormControl(''),
    'checkBoxTitle': new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  get checkBoxLabel() {
    return this.checkBoxControl.get('checkBoxLabel');
  }
  get checkBoxTitle() {
    return this.checkBoxControl.get('checkBoxTitle');
  }
  get checkBoxFontSize() {
    return this.checkBoxControl.get('checkBoxFontSize');
  }
  get checkBoxColor() {
    return this.checkBoxControl.get('checkBoxColor');
  }

  get buttonLabel() {
    return this.buttonControl.get('buttonLabel');
  }
  get buttonWidth() {
    return this.buttonControl.get('buttonWidth');
  }
  get buttonHeight() {
    return this.buttonControl.get('buttonHeight');
  }
  get buttonFontSize() {
    return this.buttonControl.get('buttonFontSize');
  }
  get buttonColor() {
    return this.buttonControl.get('buttonColor');
  }
  get buttonColorBackground() {
    return this.buttonControl.get('buttonColorBackground');
  }


  get selectLabel() {
    return this.selectControl.get('selectLabel');
  }
  get selectAddOption() {
    return this.selectControl.get('selectAddOption');
  }
  get selectWidth() {
    return this.selectControl.get('selectWidth');
  }
  get selectHeight() {
    return this.selectControl.get('selectHeight');
  }
  get selectFontSize() {
    return this.selectControl.get('selectFontSize');
  }
  get selectColor() {
    return this.selectControl.get('selectColor');
  }

  get inputLabel() {
    return this.inputControl.get('inputLabel');
  }
  get inputPlaceholder() {
    return this.inputControl.get('inputPlaceholder');
  }
  get inputWidth() {
    return this.inputControl.get('inputWidth');
  }
  get inputHeight() {
    return this.inputControl.get('inputHeight');
  }
  get inputFontSize() {
    return this.inputControl.get('inputFontSize');
  }
  get inputColor() {
    return this.inputControl.get('inputColor');
  }

  get textAreaLabel() {
    return this.textAreaControl.get('textAreaLabel');
  }
  get textAreaPlaceholder() {
    return this.textAreaControl.get('textAreaPlaceholder');
  }
  get textAreaWidth() {
    return this.textAreaControl.get('textAreaWidth');
  }
  get textAreaHeight() {
    return this.textAreaControl.get('textAreaHeight');
  }
  get textAreaFontSize() {
    return this.textAreaControl.get('textAreaFontSize');
  }
  get textAreaColor() {
    return this.textAreaControl.get('textAreaColor');
  }

  constructor(private store$: Store<FormElement>) { }

  ngOnInit(): void {
    console.log("Style component");
    console.log(this.fieldOBJ);
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

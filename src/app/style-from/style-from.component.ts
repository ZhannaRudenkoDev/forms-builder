import { Component, OnInit, Input } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NG_VALIDATORS, Validators} from "@angular/forms";

@Component({
  selector: 'app-style-from',
  templateUrl: './style-from.component.html',
  styleUrls: ['./style-from.component.scss'],

})
export class StyleFromComponent implements OnInit {

  items = ['Form General Styles', 'Field Styles'];
  expandedIndex = 0;


  @Input() field = '';


  formGeneral= new FormGroup({
    'formLabel': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'colorRGB': new FormControl('', ValidateRGB),
    'backgroundRGB': new FormControl('', ValidateRGB),
    'borderStyle': new FormControl(''),
    'borderColorRGB': new FormControl('', ValidateRGB),
  })

  inputControl = new FormGroup({
    'inputLabel': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'inputPlaceholder': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'inputWidth': new FormControl('', [Validators.min(10), Validators.max(390)]),
    'inputHeight': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'inputFontSize': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'inputFontWeight': new FormControl(''),
    'inputColor': new FormControl('', ValidateRGB),
    'inputBorderType': new FormControl(''),
    'inputCheckRequired': new FormControl(''),
  });

  selectControl = new FormGroup({
    'selectLabel': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'selectWidth': new FormControl('', [Validators.min(10), Validators.max(390)]),
    'selectHeight': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'selectFontSize': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'selectFontWeight': new FormControl(''),
    'selectColor': new FormControl('', ValidateRGB),
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
    'buttonColor': new FormControl('', ValidateRGB),
    'buttonBorderType': new FormControl(''),
    'buttonCheckRequired': new FormControl(''),
  });
  checkBoxControl = new FormGroup({
    'checkBoxLabel': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'checkBoxFontSize': new FormControl('', [Validators.min(10), Validators.max(100)]),
    'checkBoxFontWeight': new FormControl(''),
    'checkBoxColor': new FormControl('', ValidateRGB),
    'checkBoxCheckRequired': new FormControl(''),
  });

  get checkBoxLabel() {
    return this.checkBoxControl.get('checkBoxLabel');
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


  constructor() { }

  ngOnInit(): void {

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

function ValidateRGB(control: AbstractControl): {[key: string]: any} | null  {
  const rgbArray = control.value.split(',');
  console.log(rgbArray);
  if (parseInt(rgbArray[0]) < 0 || parseInt(rgbArray[0]) > 255) {
    return { 'colorRGBInvalid': true };
  } else if (parseInt(rgbArray[1]) < 0 || parseInt(rgbArray[1]) > 255) {
    return { 'colorRGBInvalid': true };
  } else if (parseInt(rgbArray[2]) < 0 || parseInt(rgbArray[2]) > 255) {
    return { 'colorRGBInvalid': true };
  } else
    return null;
}

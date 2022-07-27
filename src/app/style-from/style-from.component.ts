import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-style-from',
  templateUrl: './style-from.component.html',
  styleUrls: ['./style-from.component.scss']
})
export class StyleFromComponent implements OnInit {

  items = ['Form General Styles', 'Field Styles'];

  @Input() field = '';

  expandedIndex = 0;

  stylesFormOption = 'button';
  //stylesFormOption = 'select';
  //stylesFormOption = 'input';
  //stylesFormOption = 'textarea';
  //stylesFormOption = 'checkbox';




  /*
    rgbControl = new FormControl(16, Validators.min(10));
  */


  constructor() { }

  ngOnInit(): void {
  }

}

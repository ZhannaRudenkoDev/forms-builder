import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-form-items',
  templateUrl: './form-items.component.html',
  styleUrls: ['./form-items.component.scss']
})
export class FormItemsComponent implements OnInit {
  fields = [
    'Input',
    'Textarea',
    'Button',
    'Checkbox',
    'Select',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

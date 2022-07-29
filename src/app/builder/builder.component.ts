import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {FormInterface, FieldOBJ} from "../interfaces";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  public field: FieldOBJ = {
    field: '',
    id: ''
  };

  getField(field: FieldOBJ) {
    this.field = field;
  }

  constructor(private store$: Store<FormInterface>) { }

  ngOnInit(): void {

  }

}

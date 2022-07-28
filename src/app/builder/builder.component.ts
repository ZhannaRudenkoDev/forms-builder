import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  public field = 'Checkbox';

  getField(field: string) {
    this.field = field;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  @Input() field = '';

  constructor() { }

  ngOnInit(): void {
  }

}

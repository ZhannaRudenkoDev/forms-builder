import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-created-form',
  templateUrl: './created-form.component.html',
  styleUrls: ['./created-form.component.scss']
})
export class CreatedFormComponent implements OnInit {

  fields: string[] = [];
  //statusInput: boolean = false;

  @Output() fieldStyleEvent = new EventEmitter<string>();


  getField(field: string) {
    this.fieldStyleEvent.emit(field);
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

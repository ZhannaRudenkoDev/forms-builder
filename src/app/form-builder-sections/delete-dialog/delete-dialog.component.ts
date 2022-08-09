import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>) { }

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.dialogRef.close(true);
  }

  ngOnInit(): void {
  }

}

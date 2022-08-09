import { NgModule } from '@angular/core';
import {StyleFromComponent} from "./style-from/style-from.component";
import {CreatedFormComponent} from "./created-form/created-form.component";
import {FormItemsComponent} from "./form-items/form-items.component";
import {MaterialModule} from "../material/material.module";
import {CommonModule} from "@angular/common";
import { PixelPipePipe } from './pipes/pixel-pipe.pipe';


@NgModule({
  declarations: [
    StyleFromComponent,
    FormItemsComponent,
    CreatedFormComponent,
    PixelPipePipe,
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  providers: [],
  exports: [
    CreatedFormComponent,
    StyleFromComponent,
    FormItemsComponent
  ]
})
export class FormModule { }

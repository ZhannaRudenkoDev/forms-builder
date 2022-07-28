import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "../material/material.module";
import { HeaderComponent } from './header/header.component';
import { StyleFromComponent } from './style-from/style-from.component';
import { BuilderComponent } from './builder/builder.component';
import { FormItemsComponent } from './form-items/form-items.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { CreatedFormComponent } from './created-form/created-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StyleFromComponent,
    BuilderComponent,
    FormItemsComponent,
    CreatedFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

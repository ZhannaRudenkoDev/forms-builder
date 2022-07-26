import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "../material/material.module";
import { HeaderComponent } from './header/header.component';
import { StyleFromComponent } from './style-from/style-from.component';
import { BuilderComponent } from './builder/builder.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StyleFromComponent,
    BuilderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "../material/material.module";
import { HeaderComponent } from './header/header.component';
import { StyleFromComponent } from './style-from/style-from.component';
import { BuilderComponent } from './builder/builder.component';
import { FormItemsComponent } from './form-items/form-items.component';
import { CreatedFormComponent } from './created-form/created-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import {appRoutingModule} from "./app.routing";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StyleFromComponent,
    BuilderComponent,
    FormItemsComponent,
    CreatedFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    appRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

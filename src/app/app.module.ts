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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import {appRoutingModule} from "./app.routing";
import { SignUpComponent } from './sign-up/sign-up.component';
import {AuthenticationService} from "./services/authentication.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./intercepters/auth.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StyleFromComponent,
    BuilderComponent,
    FormItemsComponent,
    CreatedFormComponent,
    LoginComponent,
    SignUpComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        CommonModule,
        appRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        FormsModule
    ],
  providers: [AuthenticationService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

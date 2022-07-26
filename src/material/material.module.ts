import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";



const MaterialComponents = [
  MatButtonModule,
  CdkAccordionModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatSelectModule,
  MatCheckboxModule
];

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule {

}

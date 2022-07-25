import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

const MaterialComponents = [
  MatButtonModule
];

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }

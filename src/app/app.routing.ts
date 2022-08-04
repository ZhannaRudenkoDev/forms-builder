import { Routes, RouterModule } from '@angular/router';

import {BuilderComponent} from "./builder/builder.component";

//import { AuthGuard } from './_helpers';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  { path: '', component: BuilderComponent, /*canActivate: [AuthGuard]*/ },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

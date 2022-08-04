import { Routes, RouterModule } from '@angular/router';

import {BuilderComponent} from "./builder/builder.component";

//import { AuthGuard } from './_helpers';
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";


const routes: Routes = [
  { path: '', component: BuilderComponent, /*canActivate: [AuthGuard]*/ },
  { path: 'log-in', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

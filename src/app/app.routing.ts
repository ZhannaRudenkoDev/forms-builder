import { Routes, RouterModule } from '@angular/router';

import {BuilderComponent} from "./builder/builder.component";

import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AuthGuardService} from "./services/auth-guard.service";


const routes: Routes = [
  { path: '', component: BuilderComponent, canActivate: [AuthGuardService] },
  { path: 'log-in', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterCompanyComponent} from './register-company/register-company.component';
import {RegisterCantidateComponent} from './register-cantidate/register-cantidate.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register-company', component: RegisterCompanyComponent},
  {path: 'register-candidate', component: RegisterCantidateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {AboutYouCandidateComponent} from './register/about-you-candidate/about-you-candidate.component';
import {AboutYouCompanyComponent} from './register/about-you-company/about-you-company.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'register/about-you-candidate', component: AboutYouCandidateComponent},
  {path: 'register/about-you-company', component: AboutYouCompanyComponent},
  {path: 'reset/:email', component: ResetPasswordComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}

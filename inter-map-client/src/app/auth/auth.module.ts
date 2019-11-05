import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import {AuthService} from './auth.service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {
  MatButtonModule,
  MatHorizontalStepper,
  MatIconModule, MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatStepperModule,
  MatToolbarModule,
   MatCheckboxModule
} from '@angular/material';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatStepperModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgetPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    materialComponents,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [AuthService]
})
export class AuthModule { }

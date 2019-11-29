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
  MatIconModule, MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatStepperModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatChipsModule,
  MatAutocompleteModule
} from '@angular/material';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { KeyWordsComponent } from './register/key-words/key-words.component';



const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatStepperModule,
  MatCheckboxModule,
  MatChipsModule
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgetPasswordComponent, ResetPasswordComponent, KeyWordsComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    materialComponents,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  providers: [AuthService]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import {AuthService} from './auth.service';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterComponent } from './register/register.component';
import {
  MatButtonModule,
  MatHorizontalStepper,
  MatIconModule, MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatStepperModule
];

@NgModule({
  declarations: [LoginComponent, RegisterCompanyComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    materialComponents,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [AuthService]
})
export class AuthModule { }

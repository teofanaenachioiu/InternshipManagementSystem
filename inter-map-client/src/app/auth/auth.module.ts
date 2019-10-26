import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import {AuthService} from './auth.service';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterCantidateComponent } from './register-cantidate/register-cantidate.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, RegisterCompanyComponent, RegisterCantidateComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers: [AuthService]
})
export class AuthModule { }

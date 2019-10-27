import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import {AuthService} from './auth.service';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterCantidateComponent } from './register-cantidate/register-cantidate.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent, RegisterCompanyComponent, RegisterCantidateComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class AuthModule { }

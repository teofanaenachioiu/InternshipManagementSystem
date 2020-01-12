import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import {AuthService} from './auth.service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AboutYouCandidateComponent } from './register/about-you-candidate/about-you-candidate.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AboutYouCompanyComponent } from './register/about-you-company/about-you-company.component';
import {MaterialFileInputModule} from "ngx-material-file-input";
import {InternshipAppModule} from "../internship-app/internship-app.module";


const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatStepperModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({declarations: [LoginComponent, RegisterComponent, ForgetPasswordComponent, ResetPasswordComponent, KeyWordsComponent, AboutYouCandidateComponent, AboutYouCompanyComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    materialComponents,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MaterialFileInputModule,
    InternshipAppModule,
  ],
  providers: [
    AuthService]
})
export class AuthModule { }

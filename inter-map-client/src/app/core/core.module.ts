import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../components/home/home.component';
import {GeneralMenuComponent} from '../components/general-menu/general-menu.component';
import {CandidateMenuComponent} from '../components/candidate-menu/candidate-menu.component';
import {CompanyMenuComponent} from '../components/company-menu/company-menu.component';
import {HomeCompanyComponent} from '../components/home-company/home-company.component';
import {HomeCandidateComponent} from '../components/home-candidate/home-candidate.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatExpansionModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule, MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {IntroComponent} from '../components/intro/intro.component';
import {WhatWeDoComponent} from '../components/what-we-do/what-we-do.component';
import {InternshipsGeneralComponent} from '../components/internships-general/internships-general.component';
import {FeedbackComponent} from '../components/feedback/feedback.component';
import {ContactComponent} from '../components/contact/contact.component';
import {StatisticsComponent} from '../components/statistics/statistics.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import {TruncateModule} from '@yellowspot/ng-truncate';
import {HomeGeneralComponent} from '../components/home-general/home-general.component';



@NgModule({
  declarations: [
    HomeComponent,
    GeneralMenuComponent,
    CandidateMenuComponent,
    CompanyMenuComponent,
    HomeCompanyComponent,
    HomeCandidateComponent,
    IntroComponent,
    WhatWeDoComponent,
    InternshipsGeneralComponent,
    FeedbackComponent,
    ContactComponent,
    StatisticsComponent,
    HomeGeneralComponent
  ],
  exports: [
    GeneralMenuComponent,
    CandidateMenuComponent,
    CompanyMenuComponent,
    HomeCompanyComponent,
    HomeCandidateComponent,
    HomeGeneralComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
    MaterialFileInputModule,
    TruncateModule,
    MatToolbarModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }

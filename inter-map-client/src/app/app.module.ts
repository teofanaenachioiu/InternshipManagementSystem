import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatHorizontalStepper,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { GeneralMenuComponent } from './components/general-menu/general-menu.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { InternshipsGeneralComponent } from './components/internships-general/internships-general.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ContactComponent } from './components/contact/contact.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { FooterComponent } from './components/footer/footer.component';

const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule
];

@NgModule({
  declarations: [
    AppComponent,
    GeneralMenuComponent,
    HomeComponent,
    IntroComponent,
    WhatWeDoComponent,
    InternshipsGeneralComponent,
    FeedbackComponent,
    ContactComponent,
    StatisticsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

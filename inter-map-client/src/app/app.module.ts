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
import { InternshipsComponent } from './internship-app/internships/internships.component';
import { CandidateMenuComponent } from './components/candidate-menu/candidate-menu.component';
import { CompanyMenuComponent } from './components/company-menu/company-menu.component';
import { HomeComponent } from './components/home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialComponents
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

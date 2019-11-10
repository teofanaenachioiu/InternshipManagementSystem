import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InternshipsComponent} from './internships/internships.component';
import {InternshipAppRoutingModule} from './internship-app-routing.module';
import {CandidateMenuComponent} from '../components/candidate-menu/candidate-menu.component';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {CompanyMenuComponent} from '../components/company-menu/company-menu.component';

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
  declarations: [InternshipsComponent,
    CandidateMenuComponent,
    CompanyMenuComponent
  ],
  exports: [
    CompanyMenuComponent
  ],
  imports: [
    CommonModule,
    InternshipAppRoutingModule,
    materialComponents
  ]
})
export class InternshipAppModule { }

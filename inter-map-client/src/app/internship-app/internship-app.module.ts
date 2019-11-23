import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InternshipsComponent} from './internships/internships.component';
import {InternshipAppRoutingModule} from './internship-app-routing.module';
import {CandidateMenuComponent} from '../components/candidate-menu/candidate-menu.component';
import {
  MatButtonModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {CompanyMenuComponent} from '../components/company-menu/company-menu.component';
import { CandidateProfileComponent } from './profiles/candidate-profile/candidate-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PersonalDetailsComponent } from './profiles/candidate-profile/personal-details/personal-details.component';
import { ContactComponent } from './profiles/candidate-profile/contact/contact.component';
import { StudiesComponent } from './profiles/candidate-profile/studies/studies.component';
import { WorkExperienceComponent } from './profiles/candidate-profile/work-experience/work-experience.component';
import { LanguagesComponent } from './profiles/candidate-profile/languages/languages.component';
import { CompanyProfileComponent } from './profiles/company-profile/company-profile.component';
import { AboutComponent } from './profiles/company-profile/about/about.component';
import { ProfileComponent } from './profiles/company-profile/profile/profile.component';
import { TellUsMoreComponent } from './profiles/candidate-profile/tell-us-more/tell-us-more.component';
import { InterestsComponent } from './profiles/interests/interests.component';

const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatChipsModule,
  MatTooltipModule
];

@NgModule({
  declarations: [InternshipsComponent,
    CandidateMenuComponent,
    CompanyMenuComponent,
    CandidateProfileComponent,
    PersonalDetailsComponent,
    ContactComponent,
    StudiesComponent,
    WorkExperienceComponent,
    LanguagesComponent,
    CompanyProfileComponent,
    AboutComponent,
    ProfileComponent,
    TellUsMoreComponent,
    InterestsComponent
  ],
  exports: [
    CompanyMenuComponent
  ],
  imports: [
    CommonModule,
    InternshipAppRoutingModule,
    ReactiveFormsModule,
    materialComponents,
    MatDatepickerModule,
    FormsModule
  ]
})
export class InternshipAppModule { }

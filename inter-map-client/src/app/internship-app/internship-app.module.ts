import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InternshipsComponent} from './internships/internships.component';
import {InternshipAppRoutingModule} from './internship-app-routing.module';


import { InternshipItemComponent } from './internship-list/internship-item/internship-item.component';
import { InternshipListComponent } from './internship-list/internship-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCompanyPipe } from './data/filter-company.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FilterForMultipleCompanyPipe } from './data/filter-for-multiple-company.pipe';
import { RatingModule } from 'ng-starrating';
import { FilterRatingPipe } from './data/filter-rating.pipe';
import { OrderModule } from 'ngx-order-pipe';

import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatChipsModule, MatTooltipModule } from
   '@angular/material';
import { FilterForMultipleInterestPipe } from './data/filter-for-multiple-interest.pipe';
import { CandidateProfileComponent } from './profiles/candidate-profile/candidate-profile.component';
import { CandidateMenuComponent } from '../components/candidate-menu/candidate-menu.component';
import { CompanyMenuComponent } from '../components/company-menu/company-menu.component';
import { PersonalDetailsComponent } from './profiles/candidate-profile/personal-details/personal-details.component';
import { ContactComponent } from './profiles/candidate-profile/contact/contact.component'
import { StudiesComponent } from './profiles/candidate-profile/studies/studies.component';
import { WorkExperienceComponent } from './profiles/candidate-profile/work-experience/work-experience.component';
import { LanguagesComponent } from './profiles/candidate-profile/languages/languages.component';
import { CompanyProfileComponent } from './profiles/company-profile/company-profile.component';
import { AboutComponent } from './profiles/company-profile/about/about.component';
import { ProfileComponent } from './profiles/company-profile/profile/profile.component';
import { TellUsMoreComponent } from './profiles/candidate-profile/tell-us-more/tell-us-more.component';
import { InterestsComponent } from './profiles/interests/interests.component';
import { CompanyInternshipsComponent } from './company-internships/company-internships.component';

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
    InterestsComponent,
    InternshipsComponent,
    InternshipItemComponent,
    InternshipListComponent,
    FilterCompanyPipe,
    FilterForMultipleCompanyPipe,
    FilterRatingPipe,
    FilterForMultipleInterestPipe,
    CompanyInternshipsComponent,
  ],
  imports: [
    CommonModule,
    InternshipAppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatCheckboxModule,
    RatingModule,
    OrderModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    materialComponents
  ]
})
export class InternshipAppModule { }

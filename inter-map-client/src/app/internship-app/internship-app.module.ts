import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InternshipsComponent} from './internships/internships.component';
import {InternshipAppRoutingModule} from './internship-app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {InternshipItemComponent} from './internship-list/internship-item/internship-item.component';
import {InternshipListComponent} from './internship-list/internship-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterCompanyPipe} from './data/filter-company.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FilterForMultipleCompanyPipe} from './data/filter-for-multiple-company.pipe';
import {RatingModule} from 'ng-starrating';
import {FilterRatingPipe} from './data/filter-rating.pipe';
import {OrderModule} from 'ngx-order-pipe';

import {CustomSpinnerComponent} from '../components/custom-spinner/custom-spinner.component';
import { ContactViewComponent } from './profiles/candidate-profile/contact-view/contact-view.component';
import { InterestsViewComponent } from './profiles/interests-view/interests-view.component';
import { TellUsMoreViewComponent } from './profiles/candidate-profile/tell-us-more-view/tell-us-more-view.component';
import { LanguagesViewComponent } from './profiles/candidate-profile/languages-view/languages-view.component';
import { WorkExperienceViewComponent } from './profiles/candidate-profile/work-experience-view/work-experience-view.component';
import { StudiesViewComponent } from './profiles/candidate-profile/studies-view/studies-view.component';
import {
  MatCardModule,
	MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatChipsModule,
  MatTooltipModule,
  MatDialogModule,
  MatProgressSpinnerModule, MatAutocompleteModule,
} from
        '@angular/material';
import { FilterForMultipleInterestPipe } from './data/filter-for-multiple-interest.pipe';
import { CandidateProfileComponent } from './profiles/candidate-profile/candidate-profile.component';
import { CandidateMenuComponent } from '../components/candidate-menu/candidate-menu.component';
import { CompanyMenuComponent } from '../components/company-menu/company-menu.component';
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
import { CompanyInternshipsComponent } from './profiles/company-profile/company-internships/company-internships.component';
import { AddModalComponent } from './profiles/company-profile/add-modal/add-modal.component';
import { ConfirmRemoveInternshipComponent } from './profiles/company-profile/company-internships/confirm-remove-internship/confirm-remove-internship.component';
import { AddFormComponent } from './profiles/company-profile/add-modal/add-form/add-form.component';
import { EditModalComponent } from './profiles/company-profile/edit-modal/edit-modal.component';
import { EditFormComponent } from './profiles/company-profile/edit-modal/edit-form/edit-form.component';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import { PersonalDetailsViewComponent } from './profiles/candidate-profile/personal-details-view/personal-details-view.component';
import { CandidateApplicationsListComponent } from './candidate-applications-list/candidate-applications-list.component';
import { CandidateApplicationsListItemComponent } from './candidate-applications-list/candidate-applications-list-item/candidate-applications-list-item.component';
import { ProfileViewComponent } from './profiles/company-profile/profile-view/profile-view.component';
import { InternshipModalDetailsComponent } from './internship-modal-details/internship-modal-details.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import {TruncateModule} from '@yellowspot/ng-truncate';
import {AppModule} from '../app.module';
import {ShowMoreLessTextComponent} from '../components/show-more-less-text/show-more-less-text.component';
import { ExtraMessageDialogComponent } from './candidate-applications-list/candidate-applications-list-item/extra-message-dialog/extra-message-dialog.component';


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
  MatTooltipModule,

  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatDialogModule
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
    AddModalComponent,
    ConfirmRemoveInternshipComponent,
    AddFormComponent,
    EditModalComponent,
    EditFormComponent,
    PersonalDetailsViewComponent,
    CandidateApplicationsListComponent,
    CandidateApplicationsListItemComponent,
    CustomSpinnerComponent,
    ContactViewComponent,
    InterestsViewComponent,
    TellUsMoreViewComponent,
    LanguagesViewComponent,
    WorkExperienceViewComponent,
    StudiesViewComponent,
    ProfileViewComponent,
    InternshipModalDetailsComponent,
    CreateApplicationComponent,
    ShowMoreLessTextComponent,
    ExtraMessageDialogComponent
  ],
  entryComponents: [
    AddModalComponent,
    EditModalComponent,
    ConfirmRemoveInternshipComponent,
    InternshipModalDetailsComponent,
    ExtraMessageDialogComponent
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
    materialComponents,
    MatDialogModule,
    MatCheckboxModule,
    MaterialFileInputModule,
    HttpClientModule,
    MatCardModule,
    TruncateModule,
  ]
})
export class InternshipAppModule {
}

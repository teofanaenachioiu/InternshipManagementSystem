import {RouterModule, Routes} from '@angular/router';
import {InternshipsComponent} from './internships/internships.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CandidateProfileComponent} from './profiles/candidate-profile/candidate-profile.component';
import {CompanyProfileComponent} from './profiles/company-profile/company-profile.component';
import {AuthCandidateGuard} from '../auth/auth-candidate.guard';
import {AuthCompanyGuard} from '../auth/auth-company.guard';
import {CompanyInternshipsComponent} from './profiles/company-profile/company-internships/company-internships.component';
import {InternshipListComponent} from './internship-list/internship-list.component';
import {CandidateApplicationsListComponent} from './candidate-applications-list/candidate-applications-list.component';
import { CreateApplicationComponent } from './create-application/create-application.component';

const routes: Routes = [
  {path: '', redirectTo: 'internships', pathMatch: 'full' },
  {path: 'internships', component: InternshipListComponent },
  {path: 'candidate-profile', component: CandidateProfileComponent},
  // {path: 'candidate-profile', component: CandidateProfileComponent, canActivate: [AuthCandidateGuard] },
  {path: 'company-profile', component: CompanyProfileComponent},
  {path: 'applications', component: CandidateApplicationsListComponent },
  {path: 'company-internships', component: CompanyInternshipsComponent, canActivate: [AuthCompanyGuard] },
  {path: 'create-application/:id', component: CreateApplicationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class InternshipAppRoutingModule { }

import {RouterModule, Routes} from '@angular/router';
import {InternshipsComponent} from './internships/internships.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CandidateProfileComponent} from './profiles/candidate-profile/candidate-profile.component';
import {CompanyProfileComponent} from './profiles/company-profile/company-profile.component';
import {AuthCandidateGuard} from '../auth/auth-candidate.guard';
import {AuthCompanyGuard} from '../auth/auth-company.guard';
import {CompanyInternshipsComponent} from './company-internships/company-internships.component';

const routes: Routes = [
  {path: '', redirectTo: 'internships', pathMatch: 'full' },
  {path: 'internships', component: InternshipsComponent },
  {path: 'candidate-profile', component: CandidateProfileComponent, canActivate: [AuthCandidateGuard] },
  {path: 'company-profile', component: CompanyProfileComponent, canActivate: [AuthCompanyGuard] },
  {path: 'company-internships', component: CompanyInternshipsComponent, canActivate: [AuthCompanyGuard] },
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

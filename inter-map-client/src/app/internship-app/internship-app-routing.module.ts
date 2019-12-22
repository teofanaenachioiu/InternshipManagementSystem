import {RouterModule, Routes} from '@angular/router';
import {InternshipsComponent} from './internships/internships.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CandidateProfileComponent} from './profiles/candidate-profile/candidate-profile.component';
import {CompanyProfileComponent} from './profiles/company-profile/company-profile.component';
import {AuthCandidateGuard} from '../auth/auth-candidate.guard';
import {AuthCompanyGuard} from '../auth/auth-company.guard';

const routes: Routes = [
  {path: '', redirectTo: 'internships', pathMatch: 'full', canActivate: [AuthCandidateGuard] },
  {path: 'internships', component: InternshipsComponent, canActivate: [AuthCandidateGuard] },
  {path: 'candidate-profile', component: CandidateProfileComponent},
  {path: 'company-profile', component: CompanyProfileComponent, canActivate: [AuthCompanyGuard] }
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

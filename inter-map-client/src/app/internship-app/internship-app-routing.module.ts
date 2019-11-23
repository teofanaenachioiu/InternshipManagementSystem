import {RouterModule, Routes} from '@angular/router';
import {InternshipsComponent} from './internships/internships.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralMenuComponent} from '../components/general-menu/general-menu.component';
import {CandidateProfileComponent} from './profiles/candidate-profile/candidate-profile.component';
import {StudiesComponent} from './profiles/candidate-profile/studies/studies.component';
import {CompanyProfileComponent} from './profiles/company-profile/company-profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'internships', pathMatch: 'full'},
  {path: 'internships', component: InternshipsComponent},
  {path: 'candidate-profile', component: CandidateProfileComponent},
  {path: 'company-profile', component: CompanyProfileComponent}
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

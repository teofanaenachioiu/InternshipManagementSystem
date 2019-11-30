import {RouterModule, Routes} from '@angular/router';
import {InternshipsComponent} from './internships/internships.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralMenuComponent} from '../components/general-menu/general-menu.component';

const routes: Routes = [
  {path: '', redirectTo: 'internships', pathMatch: 'full'},
  {path: 'internships', component: InternshipsComponent}
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

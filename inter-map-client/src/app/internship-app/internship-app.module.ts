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

@NgModule({
  declarations: [InternshipsComponent, InternshipItemComponent, InternshipListComponent, FilterCompanyPipe, FilterForMultipleCompanyPipe ],
  imports: [
    CommonModule,
    InternshipAppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatCheckboxModule
  ]
})
export class InternshipAppModule { }
